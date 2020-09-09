const movies = require("./movie_list");

exports.handler = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;
  const movie = movies.find((m) => m.id === id);
  return movie
    ? { statusCode: 200, body: movie }
    : { statusCode: 404, body: "not found" };
};
