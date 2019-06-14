const express = require('express');
const router = express.Router();

const score = require('../controllers/score.controller.js');

router.get('/', score.getScores);
router.post('/', score.createScores);
router.get('/:id', score.getScore);
router.delete('/:id', score.deleteScores);
router.put('/:id', score.editScores);

module.exports = router;