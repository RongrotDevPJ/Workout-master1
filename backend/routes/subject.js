const express = require('express');
const routes = express.Router();

const subject_file = require('../data/contact_subject.json');

routes.get('/', (req, res) => {
    res.json(subject_file);
});

module.exports = routes;