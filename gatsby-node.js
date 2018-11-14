const path = require('path');

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

  return graphql(`
    {
      allWordpressWpEpisodes {
        edges {
          node {
            slug
            acf {
              number
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors);
    }

    const episodes = data.allWordpressWpEpisodes.edges;

    episodes.forEach(({ node }) => {
      const { slug, acf } = node;
      const number = parseInt(acf.number, 10);
      const pagePath = number === 1 ? '/' : `/episodes/${slug}/`;
      const context = {
        number
      };

      // eslint-disable-next-line no-console
      console.log('create page', pagePath, context);

      createPage({
        path: pagePath,
        component: path.resolve('src/templates/episode.jsx'),
        context
      });
    });

    return undefined;
  });
};
