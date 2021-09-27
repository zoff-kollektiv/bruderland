const { createProxyMiddleware } = require('http-proxy-middleware');

const config = require('./config.json');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://bruderland.de',
  },
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
          '**/background',
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Link: </fonts/lapture/lapture-bold-italic.woff2>; as=font; rel=preload; crossorigin=anonymous',
          'Link: </fonts/superla/superla-book.woff2>; as=font; rel=preload; crossorigin=anonymous',
          'Link: </fonts/superla/superla-extra-bold.woff2>; as=font; rel=preload; crossorigin=anonymous',
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Eigensinn im Bruderland',
        short_name: 'Bruderland',
        start_url: '/',
        background_color: 'white',
        theme_color: '#D0021B',
        display: 'standalone',
        icon: './static/favicon.png',
        legacy: false,
      },
    },

    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/navigation/'],
      },
    },

    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-preact',
  ],

  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
      })
    );
  },
};
