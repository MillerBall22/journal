const express = require('express');

const journalsRouter = express.Router();

const { httpGetAllJournals, httpAddNewJournal } = require('./journals.controller');

journalsRouter.get('/', httpGetAllJournals);
journalsRouter.post('/', httpAddNewJournal);

module.exports = journalsRouter;