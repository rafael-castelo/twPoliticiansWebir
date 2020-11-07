const { search, getUser } = require("../helpers/database.js");
const { retreiveUser } = require("../helpers/twHelper");

const relevantTweet = (tweets) => {
  if (tweets.length === 0) {
    return 0;
  }

  let max_metrics =
    tweets[0]._source.like_count +
    tweets[0]._source.quote_count +
    tweets[0]._source.reply_count +
    tweets[0]._source.retweet_count;
  let max_index = 0;

  for (let i = 1; i < tweets.length; i++) {
    current_metrics =
      tweets[i]._source.like_count +
      tweets[i]._source.quote_count +
      tweets[i]._source.reply_count +
      tweets[i]._source.retweet_count;

    if (current_metrics > max_metrics) {
      max_index = i;
    }
  }

  return max_index;
};

const relevantUser = async (politicalParty, topic) => {
  const tweets = await search(politicalParty, topic);

  if (tweets.length === 0) {
    return { error: "No results" };
  }

  const relevantTweetIndex = relevantTweet(tweets);
  console.log("Tweet más relevante: ", tweets[relevantTweetIndex]);
  const user = await retreiveUser(tweets[relevantTweetIndex]._source.author_id);//getUser(tweets[relevantTweetIndex]._source.author_id);
  return user;
};

module.exports = { relevantUser };
