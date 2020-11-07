const express = require('express');
const router = express.Router();
const { searchPartieTerm } = require('../../services/query')

router.get('/:partie/:term', async (req, res, next) => {
	const {partie, term} = req.params
    const relevantData = await searchPartieTerm(partie, term)
    res.status(200).json(relevantData);
});

module.exports = router;