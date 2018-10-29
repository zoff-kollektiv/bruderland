const path = require('path');

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
      return Promise.reject(errors)
    }

    const episodes = data.allWordpressWpEpisodes.edges;

    episodes.forEach(({ node }) => {
      const { slug, acf } = node;
      const number = parseInt(acf.number, 10);
      const pagePath = number === 1 ? '/' : slug;
      const context = {
        number: number
      };

      console.log('create page', pagePath, context);

      createPage({
        path: pagePath,
        component: path.resolve('src/templates/episode.jsx'),
        context
      })
    })
  })
}
