const express = require('express');
const router = express.Router();
const { searchPartieTerm } = require('../../services/query')

router.get('/:politicalParty/:topic', async (req, res, next) => {
	const { politicalParty, topic } = req.params
    const relevantData = await searchPartieTerm(politicalParty, topic)
    res.status(200).json(relevantData);
});

module.exports = router;