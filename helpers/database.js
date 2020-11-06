require("dotenv").config();
const snakeCase = require("snake-case");
const elastic = require("elasticsearch");

const elasticClient = elastic.Client({
  host: `${process.env.elasticSearchHost}:${process.env.elasticSearchPort}`,
});

const save = (index, tweets) => {
  tweets[0].map(async (tweet) => {
    try {
      await elasticClient.index({
        index: snakeCase.snakeCase(index),
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
    } catch (error) {
      console.log(error);
    }
  });
};

const search = async (index, query) => {
  const elasticIndex = elastic.Client({
    host: `${process.env.elasticSearchHost}:${
      process.env.elasticSearchPort
    }/${snakeCase.snakeCase(index)}`,
  });

  try {
    const res = await elasticIndex.search({
      body: {
        query: {
          match: {
            text: query,
          },
        },
      },
    });

    return res.hits.hits;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  save,
  search,
};
