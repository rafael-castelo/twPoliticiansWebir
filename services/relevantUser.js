const { search, getUser } = require("../helpers/database.js");
const { retreiveUser } = require("../helpers/twHelper");

const relevantTweet = (tweets) => {
  if (tweets.length === 0) {
    return 0;
  }

  const weights = [0.2, 1, 0.6, 0.8]
  let relevanceScore =
    tweets[0]._source.like_count * weights[0] +
    tweets[0]._source.quote_count * weights[1]+
    tweets[0]._source.reply_count * weights[2]+
    tweets[0]._source.retweet_count * weights[3];
  let max_index = 0;

  for (let i = 1; i < tweets.length; i++) {
    current_metrics =
      tweets[i]._source.like_count * weights[0] +
      tweets[i]._source.quote_count * weights[1] +
      tweets[i]._source.reply_count * weights[2] +
      tweets[i]._source.retweet_count * weights[3];

    if (current_metrics > relevanceScore) {
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
  const user = await retreiveUser(tweets[relevantTweetIndex]._source.author_id); //getUser(tweets[relevantTweetIndex]._source.author_id);

  return user;
};

module.exports = { relevantUser };
