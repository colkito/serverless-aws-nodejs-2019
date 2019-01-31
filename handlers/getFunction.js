// Ours
import debug from "../helpers/debug";
import httpResponse from "../helpers/http-response";

export const handler = async event => {
  debug.log("EVENT", JSON.stringify(event));

  try {
    const params = event.queryStringParameters;

    debug.info("PARAMS", JSON.stringify(params));

    return httpResponse.success({ params });
  } catch (error) {
    debug.error(error, error.stack);
    return httpResponse.failure({ message: "Internal error" });
  }
};

export default { handler };
