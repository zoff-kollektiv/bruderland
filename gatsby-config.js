module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'chapter',
        path: `${__dirname}/_data/chapter/`,
      },
    }
  ]
};
