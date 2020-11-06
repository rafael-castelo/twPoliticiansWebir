const { retreiveTweets } = require('../helpers/twHelper')
async function fetchTweets(query){
	const tweets = await retreiveTweets(query, 100)
	return tweets
}

module.exports = { fetchTweets }