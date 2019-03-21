const path = require('path');
const { fetchVimeoVideo } = require('./src/lib/vimeo');

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

  if (
    node.internal.type === 'WordPressAcf_illustration' &&
    node.audio === false
  ) {
    // eslint-disable-next-line no-param-reassign
    node.audio = {};
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return (
    graphql(`
      {
        episodes: allWordpressWpEpisodes {
          edges {
            node {
              slug
              status
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

        protagonists: allWordpressWpProtagonists {
          edges {
            node {
              slug
              status
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
            protagonists: { edges: protagonists }
          }
        }) => {
          if (errors) {
            return Promise.reject(errors);
          }

          return {
            episodes: episodes.filter(
              ({ node: { status } }) => status === 'publish'
            ),
            protagonists: protagonists.filter(
              ({ node: { status } }) => status === 'publish'
            )
          };
        }
      )
      // fetch vimeo data
      .then(({ episodes, protagonists }) => {
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

        return Promise.all(videos).then(videoData => ({
          protagonists,
          episodes,
          videos: videoData
        }));
      })
      // create pages
      .then(({ episodes, protagonists, videos }) => {
        protagonists.forEach(({ node }) => {
          const { slug } = node;
          const pagePath = `/protagonists/${slug}/`;

          // eslint-disable-next-line no-console
          console.log('create page', pagePath);

          createPage({
            path: pagePath,
            component: path.resolve('src/templates/protagonist.jsx'),
            context: {
              slug
            }
          });
        });

        episodes.forEach(({ node }) => {
          const { slug, acf } = node;
          const { content_episodes: contentEpisodes } = acf;
          const number = parseInt(acf.number, 10);
          let pagePath = `/episodes/${slug}/`;
          const episodeVideos = contentEpisodes
            .map(block => {
              const { __typename: typeName, wordpress_id: videoId } = block;

              if (typeName === 'WordPressAcf_vimeoVideo') {
                return videos.find(({ id }) => id === videoId);
              }

              return null;
            })
            .filter(Boolean);

          if (number < 0) {
            pagePath = `/__internal${pagePath}`;
          } else if (number === 0) {
            pagePath = '/';
          }

          const context = {
            number: `${number}`,
            videos: episodeVideos
          };

          // eslint-disable-next-line no-console
          console.log('create page', pagePath);

          createPage({
            path: pagePath,
            component: path.resolve('src/templates/episode.jsx'),
            context
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
        });
      })
  );
};
