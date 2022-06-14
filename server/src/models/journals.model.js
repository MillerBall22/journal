const journalsDatabase = require('./entries.mongo');

function addNewJournal(journal) {
    journalsDatabase.set(
        Object.assign(journal)
    );
}

async function getAllJournals() {
    return await journalsDatabase
        .find({}, { '_id': 0, '__v': 0 })
}

module.exports = {
    getAllJournals,
    addNewJournal,
};