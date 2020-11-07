const express = require('express');
const router = express.Router();
const { relevantUser } = require('../../services/relevantUser')

router.get('/:partie/:term', async (req, res, next) => {
	const {partie, term} = req.params
    const user = await relevantUser(partie, term)
    res.status(200).json(user);
});

module.exports = router;