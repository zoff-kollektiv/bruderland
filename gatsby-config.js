const config = require('./config.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: config.episodes.endpoint,
        protocol: 'https',
        includedRoutes: [
          '/*/*/episodes',
          '/*/*/media',
        ],
        verboseOutput: true
      }
    },

    'gatsby-plugin-styled-jsx'
  ]
};
