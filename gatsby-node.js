const fetch = require('node-fetch');
const path = require('path');

const episodesEndpoint = require('./config.json').episodes.endpoint;
const component = path.resolve('src/templates/episode/index.jsx');

const fetchEpisodes = endpoint => fetch(endpoint)
  .then(res => res.json())
  .catch(err => console.error(err));

const createPages = ({ actions }) => {
  const { createPage } = actions;

  return fetchEpisodes(episodesEndpoint)
    .then(episodes => {

      episodes.forEach((episode, index) => {
        const slug = index === 0 ? '/' : `/episode/${episode.slug}/`;

        createPage({
          path: slug,
          component,
          context: {
            episode
          },
        })
      })
    });
};

exports.createPages = createPages;
