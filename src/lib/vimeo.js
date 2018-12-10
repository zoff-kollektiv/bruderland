const { Vimeo } = require('vimeo');
const { parsed: env } = require('dotenv').config();

console.log(env);

const { VIMEO_CLIENT_ID, VIMEO_CLIENT_SECRET, VIMEO_ACCESS_TOKEN } = env;

const fetchVimeoVideo = videoId =>
  new Promise((resolve, reject) => {
    if (!VIMEO_CLIENT_ID || !VIMEO_CLIENT_SECRET || !VIMEO_ACCESS_TOKEN) {
      reject(
        new Error(
          'You must provide the "VIMEO_CLIENT_ID", "VIMEO_CLIENT_SECRET" and "VIMEO_ACCESS_TOKEN" environment variables.'
        )
      );
    }

    // eslint-disable-next-line no-console
    console.log('Fetch vimeo video', `/videos/${videoId}/`);

    new Vimeo(VIMEO_CLIENT_ID, VIMEO_CLIENT_SECRET, VIMEO_ACCESS_TOKEN).request(
      {
        path: `/videos/${videoId}/`
      },
      (error, res) => {
        if (error) {
          reject(error);
        }

        res.id = videoId;

        resolve(res);
      }
    );
    // eslint-disable-next-line no-console
  }).catch(console.log);

module.exports = {
  fetchVimeoVideo
};
