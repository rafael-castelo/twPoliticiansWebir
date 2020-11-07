require("dotenv").config();

const { retreiveTweets } = require("../helpers/twHelper");

const fetchTweets = async(query) => {
  return await retreiveTweets(query, process.env.MaxTweets);
}

module.exports = { fetchTweets };
