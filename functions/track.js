const ua = require('universal-analytics');

const visitor = ua(process.env.GA_ID);

exports.handler = async (event) => {
  const isProduction = process.env.NODE_ENV === 'production';

  const trackView = (path) =>
    new Promise((resolve, reject) => {
      visitor.pageview(path, (error) => {
        if (error) {
          reject(error);
        }

        resolve();
      });
    });

  if (!process.env.GA_ID) {
    return {
      body: 'No GA Account supplied.',
      statusCode: 500,
    };
  }

  const { queryStringParameters } = event;
  const { target } = queryStringParameters;

  if (isProduction && target) {
    try {
      await trackView(target);
    } catch (error) {
      return {
        body: JSON.stringify(error),
        statusCode: 500,
      };
    }
  }

  return {
    body: '',
    statusCode: 204,
  };
};
