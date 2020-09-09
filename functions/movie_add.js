const { query } = require("./util/hasura");

exports.handler = async (e) => {
  const { id, title, tagline, poster } = JSON.parse(e.body);
  const result = await query({
    query: `mutation ($id: String!, $poster: String!, $tagline: String!, $title: String!) {
      insert_movies_one(object: {id: $id, poster: $poster, tagline: $tagline, title: $title}) {
        id
        poster
        tagline
        title
      }
    }`,
    variables: { id, title, tagline, poster },
  });
  return { statusCode: 200, body: JSON.stringify(result) };
};
