const { fetchTweets } = require("./tweets.js");
const { save } = require("../helpers/database.js");

const loadDB = async (query) => {
  const tweets = await fetchTweets(query);
  save(tweets);
};

module.exports = { loadDB };
