module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/admin/index.js`,
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'chapter',
        path: `${__dirname}/data/chapter/`,
      },
    }
  ]
};
