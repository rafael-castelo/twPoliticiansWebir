require("dotenv").config();

const { retreiveTweets } = require("../helpers/twHelper");

async function fetchTweets(query) {
  return await retreiveTweets(query, process.env.MaxTweets);
}

module.exports = { fetchTweets };
