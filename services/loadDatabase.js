const { fetchTweets } = require("./tweets.js");
const { save } = require("../helpers/database.js");
const sankeCase = require("snake-case");

const loadDB = async (query) => {
  const tweets = await fetchTweets(query);
  save(sankeCase.snakeCase(query), tweets);
};

module.exports = { loadDB };
