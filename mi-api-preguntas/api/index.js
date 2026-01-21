const express = require('express');
const cors = require('cors');
const questions = require('../questions.json');

const app = express();

app.use(cors());

app.get('/api/questions', (req, res) => {
    res.json(questions);
});

module.exports = app;