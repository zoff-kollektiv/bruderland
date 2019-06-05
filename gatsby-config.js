const proxy = require('http-proxy-middleware');

const config = require('./config.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: config.episodes.endpoint,
        protocol: 'https',
        includedRoutes: [
          '**/episodes',
          '**/protagonists',
          '**/countries',
          '**/media',
          '**/background'
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },

    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Link: </fonts/lapture/lapture-bold-italic.woff2>; as=font; rel=preload; crossorigin=anonymous',
          'Link: </fonts/superla/superla-book.woff2>; as=font; rel=preload; crossorigin=anonymous',
          'Link: </fonts/superla/superla-extra-bold.woff2>; as=font; rel=preload; crossorigin=anonymous'
        ]
      }
    },

    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],

  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000'
      })
    );
  }
};
