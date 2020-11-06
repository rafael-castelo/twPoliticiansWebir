require("dotenv").config();
const elastic = require("elasticsearch");

const elasticClient = elastic.Client({
  host: `${process.env.elasticSearchHost}:${process.env.elasticSearchPort}`,
});

const save = (tweets) => {
  tweets[0].map(async (tweet) => {
    try {
      await elasticClient.index({
        index: "tweets",
        body: {
          id: tweet.id,
          author_id: tweet.author_id,
          text: tweet.text,
          retweet_count: tweet.public_metrics.retweet_count,
          reply_count: tweet.public_metrics.reply_count,
          like_count: tweet.public_metrics.like_count,
          quote_count: tweet.public_metrics.quote_count,
        },
      });
      console.log(`Tweet ${tweet.id} indexed.`);
    } catch (error) {
      console.log(error);
    }
  });

  tweets[1][0].users.map(async (user) => {
    try {
      await elasticClient.index({
        index: "users",
        body: {
          id: user.id,
          name: user.name,
          username: user.username,
        },
      });
      console.log(`User ${user.id} indexed.`);
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = { save };
