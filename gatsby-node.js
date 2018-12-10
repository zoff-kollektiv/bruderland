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
      }
    `)
      // filter out published nodes
      .then(({ errors, data }) => {
        if (errors) {
          return Promise.reject(errors);
        }

        const { edges: episodes } = data.episodes;

        return episodes.filter(({ node: { status } }) => status === 'publish');
      })
      // fetch vimeo data
      .then(episodes => {
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
          episodes,
          videos: videoData
        }));
      })
      // create pages
      .then(({ episodes, videos }) => {
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
            number,
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
