const Journals = require('./journals.mongo');


async function addNewJournal(journalInfo) {
    const filter = { journalName: journalInfo.journalName };
    await Journals.findOneAndUpdate(filter, journalInfo, {
        new: true, // Always returning updated work experiences.
        upsert: true, // By setting this true, it will create if it doesn't exist
        projection: { _id: 0, __v: 0 }, // without return _id and __v
    });
}


async function getAllJournals() {
    return await Journals
        .find({}, { '_id': 0, '__v': 0 })
}

module.exports = {
    getAllJournals,
    addNewJournal,
};