const { Vimeo } = require('vimeo');
const { parsed: env } = require('dotenv').config();

const { VIMEO_CLIENT_ID, VIMEO_CLIENT_SECRET, VIMEO_ACCESS_TOKEN } =
  env || process.env;

const fetchVimeoVideo = (videoId) => {
  const client = new Vimeo(
    VIMEO_CLIENT_ID,
    VIMEO_CLIENT_SECRET,
    VIMEO_ACCESS_TOKEN
  );

  const fetchVideo = () =>
    new Promise((resolve, reject) => {
      client.request(
        {
          path: `/videos/${parseInt(videoId, 10)}/`,
        },
        (error, res) => {
          if (error) {
            reject(error);
          }

          resolve(res);
        }
      );
    });

  const fetchTextTracks = () =>
    new Promise((resolve, reject) => {
      client.request(
        {
          path: `/videos/${parseInt(videoId, 10)}/texttracks`,
        },
        (error, res) => {
          if (error) {
            reject(error);
          }

          resolve(res);
        }
      );
    });

  return (
    Promise.all([fetchVideo(), fetchTextTracks()])
      .then(([video, tracks]) => ({ id: videoId, video, tracks }))
      // eslint-disable-next-line no-console
      .catch(console.log)
  );
};

module.exports = {
  fetchVimeoVideo,
};
