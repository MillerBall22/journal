const entriesDatabase = require('./entries.mongo');

async function addNewEntry(entry) {

    const filter = {
        entry: entry.entry,
        journal: entry.journal,
        entryDate: entry.entryDate,
        hoursTaken: entry.hoursTaken,
        entryDetails: entry.entryDetails,
    };

    await entriesDatabase.findOneAndUpdate(filter, entry, {
        new: true,
        upsert: true,
        projection: { _id: 0, __v: 0 },
    });
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