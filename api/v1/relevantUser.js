const express = require('express');
const router = express.Router();
const { relevantUser } = require('../../services/relevantUser')

router.get('/:politicalParty/:topic', async (req, res, next) => {
	const {politicalParty, topic} = req.params
    const user = await relevantUser(politicalParty, topic)
    res.status(200).json(user);
});

module.exports = router;