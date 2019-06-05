const ua = require('universal-analytics');

const visitor = ua(process.env.GA_ID);

exports.handler = async event => {
  if (!process.env.GA_ID) {
    return {
      body: 'No GA Account supplied.',
      statusCode: 500
    };
  }

  const { queryStringParameters } = event;
  const { target } = queryStringParameters;

  if (target) {
    visitor.pageview(target).send();
  }

  return {
    body: '',
    statusCode: 204
  };
};
