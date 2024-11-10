const express = require('express');
const router = express.Router();

const { getQuestions, saveQuestion, addAnswerToQuestion } = require('../controllers/discussionController');

router.get('/getQuestion', getQuestions);

router.post('/postQuestion', saveQuestion);

router.put('/:id/answer', addAnswerToQuestion);

module.exports = router;
