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
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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

        return Promise.all(videos).then(videoData => ({
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
