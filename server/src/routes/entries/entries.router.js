const express = require('express');

const entriesRouter = express.Router();

const { httpGetJournalEntries, httpAddNewEntry } = require('./entries.controller');

entriesRouter.get('/:journal', httpGetJournalEntries);
entriesRouter.post('/', httpAddNewEntry);

module.exports = entriesRouter;