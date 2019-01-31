// Helpers
const buildResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*", // FIXME: check allowed sites
    "Access-Control-Allow-Credentials": true
  },
  body: JSON.stringify(body)
});

// Methods
const failure = (statusCode, error) => {
  if (typeof statusCode === "object") {
    return buildResponse(500, { error: statusCode });
  }

  if (statusCode >= 400) {
    return buildResponse(statusCode, { error });
  }

  return buildResponse(500, { error });
};

const notFound = body => buildResponse(404, body);
const success = body => buildResponse(200, body);

export default { failure, notFound, success };
