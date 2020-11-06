const { retreiveTweets } = require('../helpers/twHelper')
async function fetchTweets(query){
	return await retreiveTweets(query, 100)	 
}

module.exports = { fetchTweets }