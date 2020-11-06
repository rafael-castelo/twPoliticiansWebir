const express = require('express');
const router = express.Router();
const { fetchTweets } = require('../../services/tweets')

router.get('/:query', async (req, res, next) => {
    const tweets = await fetchTweets(req.params.query)
    res.status(200).json(tweets);
});

module.exports = router;