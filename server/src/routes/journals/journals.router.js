const express = require('express');

const journalsRouter = express.Router();

const { httpGetAllJournals, httpAddNewJournal } = require('./journalss.controller');

journalsRouter.get('/', httpGetAllJournals);
journalsRouter.post('/', httpAddNewJournal);

module.exports = journalsRouter;