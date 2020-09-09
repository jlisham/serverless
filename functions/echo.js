exports.handler = async (e) => {
  const { text } = e.queryStringParameters;
  return { statusCode: 200, body: `echo ${text}` };
};
