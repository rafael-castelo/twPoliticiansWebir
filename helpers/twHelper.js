const { TwBearerToken } = require("../config/config.js");
const utils = require("./utils.js");
const headers = {
    Authorization: `Bearer ${TwBearerToken}`,
  };

const retreiveTweets = async(query, numberOfTweets) => {
  const endpoint = `https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=public_metrics&expansions=author_id`;

  var countTw = 0;
  var nextToken = "";
  var tweets = [],
    metadata = [];

  while (countTw < numberOfTweets) {
    var retreiveToken = nextToken ? `&next_token=${nextToken}` : "";
    const twToFetch = Math.max(numberOfTweets - countTw, 10); //10 is the minimun number possilbe so if it needs 5 we ask for 10
    var maxResults = "&max_results=" + Math.min(100, twToFetch);
    var twRes = await utils.promiseRequest({
      url: endpoint + retreiveToken + maxResults,
      headers: headers,
    });
    countTw += twRes.meta.result_count;
    nextToken = twRes.meta.next_token;
    tweets = tweets.concat(twRes.data);
    metadata = metadata.concat(twRes.includes);
  }
  return [tweets, metadata];
}

const retreiveUser = async(userId) => {
  const endpoint = `https://api.twitter.com/2/users/${userId}?user.fields=profile_image_url`;
  var twUser = await utils.promiseRequest({
      url: endpoint,
      headers: headers,
    });
  return twUser.data

}

module.exports = { retreiveTweets, retreiveUser };

// async function exampleCall() {
//   //Call function with a query and a number of results
//   var res = await retreiveTweets("frente amplio", 20);
//   console.log(res[1][0].users);
//   // console.log(res[0]);
// }

// exampleCall();
