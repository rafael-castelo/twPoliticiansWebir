const { fetchTweets } = require("./tweets.js");
const { save } = require("../helpers/database.js");

const loadDB = async () => {
  const tweets = await fetchTweets("frente amplio");
  save(tweets);
};

module.exports = { loadDB };

// loadDB();
