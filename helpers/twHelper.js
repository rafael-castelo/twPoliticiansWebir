const twConfig = require('../config/config.json')
const utils = require('./utils.js')

async function retreiveTweets(query, numberOfTweets) {
	const endpoint = `https://api.twitter.com/2/tweets/search/recent?query=${query}&tweet.fields=public_metrics&expansions=author_id`;
	const headers = {
		   Authorization: `Bearer ${twConfig.TwBearerToken}`,
		}

	var countTw = 0
	var nextToken = ''
	var tweets = [], 
			metadata = [];

	while(countTw < numberOfTweets){
		var retreiveToken = (nextToken ? `&next_token=${nextToken}` : '')
		var maxResults = '&max_results=' + Math.min(100, numberOfTweets - countTw)
		var twRes = await utils.promiseRequest({ url: endpoint + retreiveToken + maxResults, headers: headers })
		countTw += twRes.meta.result_count
		nextToken = twRes.meta.next_token
		tweets = tweets.concat(twRes.data)
		metadata = metadata.concat(twRes.includes)
	}
	return [tweets, metadata]
}

async function exampleCall(){
	//Call function with a query and a number of results
	var res = await retreiveTweets('frente amplio', 125)
	console.log(res)
}

exampleCall()