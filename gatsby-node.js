const crypto = require('crypto');
const fsExtra = require('fs-extra');
const path = require('path');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const { fetchVimeoVideo } = require('./src/lib/vimeo');

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type VimeoVideo implements Node @infer {
      sources: [VimeoVideoSource]
      tracks: [VimeoVideoTrack]
    }

    type VimeoVideoSource @infer {
      link: String!
      type: String!
      width: Int
    }

    type VimeoVideoTrack @infer {
      publicPath: String
      file: File!
    }
  `);
};

exports.onCreateNode = ({ node }) => {
  /* for some reason the repeater field returns false, if there wasn't any footnote.
     To avoid a Schema conflict (array/boolean) always use an empty array */
  if (
    node.internal.type === 'WordPressAcf_text' &&
    node.footnotesRepeat === false
  ) {
    // eslint-disable-next-line no-param-reassign
    node.footnotesRepeat = [];
  }
};

exports.createPages = ({
  actions,
  graphql,
  getNode,
  store,
  cache,
  createNodeId
}) => {
  const { createPage, createNode } = actions;

  return (
    graphql(`
      {
        episodes: allWordpressWpEpisodes(
          filter: { acf: { published: { ne: false } } }
        ) {
          edges {
            node {
              slug
              title
              acf {
                quote
                number
                text
                topic
                content_episodes {
                  ... on WordPressAcf_vimeoVideo {
                    __typename
                    wordpress_id
                  }
                }
              }
            }
          }
        }

        protagonists: allWordpressWpProtagonists(
          filter: { status: { eq: "publish" } }
        ) {
          edges {
            node {
              slug
              wordpress_id
            }
          }
        }

        background: allWordpressWpBackground(
          filter: { status: { eq: "publish" } }
        ) {
          edges {
            node {
              slug
              wordpress_id
            }
          }
        }
      }
    `)
      // filter out published nodes
      .then(
        ({
          errors,
          data: {
            episodes: { edges: episodes },
            protagonists: { edges: protagonists },
            background: { edges: background }
          }
        }) => {
          if (errors) {
            return Promise.reject(errors);
          }

          return {
            episodes,
            protagonists,
            background
          };
        }
      )
      // fetch vimeo data
      .then(({ episodes, protagonists, background }) => {
        const videos = [];

        episodes.forEach(({ node: { acf } }) => {
          const { content_episodes: contentEpisodes } = acf;

          contentEpisodes
            .filter(
              ({ __typename: typeName }) =>
                typeName === 'WordPressAcf_vimeoVideo'
            )
            .map(({ wordpress_id: videoID }) =>
              videos.push(fetchVimeoVideo(videoID))
            );
        });

        return Promise.all(videos)
          .then(videoData => {
            const createTrackNodes = (node, video) => {
              const nodes = [];

              if (
                video &&
                video.tracks &&
                video.tracks.data &&
                video.tracks.data.length > 0
              ) {
                video.tracks.data.forEach((track, index) => {
                  const id = `${node.id}-track-${index}`;
                  const trackNode = createNode({
                    id,
                    parent: null,
                    children: [],
                    internal: {
                      type: `VimeoVideoTrack`,
                      contentDigest: crypto
                        .createHash(`md5`)
                        .update(JSON.stringify(video))
                        .digest(`hex`)
                    }
                  });

                  const trackFileNode = createRemoteFileNode({
                    url: track.link,
                    store,
                    cache,
                    createNode,
                    createNodeId,
                    parentNodeId: node.id,
                    auth: {}
                  });

                  const completeNode = Promise.all([
                    trackNode,
                    trackFileNode
                  ]).then(resolvedNodes => {
                    const createdNode = getNode(id);
                    const fileNode = resolvedNodes[1];

                    const { name } = fileNode;

                    createdNode.file = fileNode;
                    createdNode.publicPath = path.join('static', `${name}.vtt`);

                    return createdNode;
                  });

                  nodes.push(completeNode);
                });
              }

              return Promise.all(nodes);
            };

            const createVideoNode = data => {
              const nodes = [];
              const cached = [];

              data.forEach(video => {
                const { id } = video;

                if (cached.includes(id)) {
                  return;
                }

                const node = createNode({
                  id,
                  sources: video.video.files
                    ? video.video.files.map(file => {
                        const { link, type, width } = file;

                        return { link, type, width };
                      })
                    : [],
                  parent: null,
                  children: [],
                  internal: {
                    type: `VimeoVideo`,
                    contentDigest: crypto
                      .createHash(`md5`)
                      .update(JSON.stringify(video))
                      .digest(`hex`)
                  }
                }).then(() => {
                  const createdNode = getNode(id);

                  return createTrackNodes(createdNode, video).then(tracks => {
                    createdNode.tracks = tracks;

                    tracks.forEach(track => {
                      const { absolutePath, name } = track.file;
                      const publicPath = path.join(
                        process.cwd(),
                        `public`,
                        `static`,
                        `${name}.vtt`
                      );

                      if (!fsExtra.existsSync(publicPath)) {
                        fsExtra.copy(absolutePath, publicPath, err => {
                          if (err) {
                            // eslint-disable-next-line no-console
                            console.error(
                              `Error copying file from ${absolutePath} to ${publicPath}`,
                              err
                            );
                          }
                        });
                      }
                    });

                    return createdNode;
                  });
                });

                nodes.push(node);
                cached.push(id);
              });

              return nodes;
            };

            return Promise.all([...createVideoNode(videoData)]).then(
              () => videoData
            );
          })
          .then(videoData => ({
            protagonists,
            episodes,
            videos: videoData,
            background
          }));
      })
      // create pages
      .then(({ episodes, protagonists, background, videos }) => {
        protagonists.forEach(({ node }) => {
          const { slug, wordpress_id: wordpressId } = node;
          const pagePath = `/protagonists/${slug}/`;

          // eslint-disable-next-line no-console
          console.log('create page', pagePath);

          createPage({
            path: pagePath,
            component: path.resolve('src/templates/protagonist.jsx'),
            context: {
              wordpressId
            }
          });
        });

        episodes.forEach(({ node }) => {
          const { slug, acf } = node;
          const number = parseInt(acf.number, 10);
          let pagePath = `/episodes/${slug}/`;

          if (number < 0) {
            pagePath = `/__internal${pagePath}`;
          } else if (number === 0) {
            pagePath = '/';
          }

          const context = {
            number: `${number}`,
            videos
          };

          // eslint-disable-next-line no-console
          console.log('create page', pagePath);

          createPage({
            path: pagePath,
            component: path.resolve('src/templates/episode.jsx'),
            context
          });
        });

        background.forEach(({ node: { slug, wordpress_id: wordpressId } }) => {
          const pagePath = `/background/${slug}/`;

          // eslint-disable-next-line no-console
          console.log('create background', pagePath);

          createPage({
            path: pagePath,
            component: path.resolve('src/templates/background.jsx'),
            context: {
              wordpressId
            }
          });
        });

        // eslint-disable-next-line no-console
        console.log('create page', '/navigation/');

        createPage({
          path: '/navigation/',
          component: path.resolve('src/templates/navigation.jsx'),
          context: {
            episodes
          }
        });
      })
  );
};
