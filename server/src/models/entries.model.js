const entriesDatabase = require('./entries.mongo');

function addNewEntry(entry) {
    entriesDatabase.set(
        Object.assign(entry)
    );
}

async function getJournalEntries(journal) {
    return await entriesDatabase
        .find({
            journal: journal
        }, { '_id': 0, '__v': 0 })
}

module.exports = {
    getJournalEntries,
    addNewEntry,
};