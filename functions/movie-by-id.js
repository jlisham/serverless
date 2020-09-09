const movies = Axios.get(
  `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=spider`
)
  .then((res) => res.data)
  .then((data) => data.Search)
  .then((movies) => movies && null);
// const movies = require("../data/movies.json");

exports.handler = async ({ queryStringParameters }) => {
  const { id } = queryStringParameters;
  const movie = movies.find((m) => m.id === id);
  return movie
    ? { statusCode: 200, body: JSON.stringify(movie) }
    : { statusCode: 404, body: "not found" };
};
