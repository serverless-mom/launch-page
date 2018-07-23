let responseBody = require('./responseBody')

module.exports = async request => {
  // Log the request to the console.
  console.log('Request:');
  console.dir(request);

  

  // Build an HTTP response.
  let response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: responseBody
  };

  return response;
};