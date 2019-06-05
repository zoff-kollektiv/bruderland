const ua = require('universal-analytics');

const visitor = ua('UA-141497940-1');

exports.handler = async event => {
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
