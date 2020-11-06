const twConfig = require('../config/config.json')
var request = require('request')

async function retreiveTweets(query, numberOfTweets) {
	const endpoint = `https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=public_metrics&expansions=author_id`;
	const headers = {
		   Authorization: `Bearer ${twConfig.TwBearerToken}`,
		}

	await request.post({ url: endpoint, headers: headers }, twResponseCallback)

}

function twResponseCallback(error, response, body) {
  console.log(body);
}

retreiveTweets('frente amplio', 100)