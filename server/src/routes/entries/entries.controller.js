const { getJournalEntries, addNewEntry } = require('../../models/entries.model');

async function httpGetJournalEntries(req, res) {
    const journal = req.body
    return res.status(200).json(await getJournalEntries(journal));
}

function httpAddNewEntry(req, res) {
    const entry = req.body;


    if (!entry.entry || !entry.journal || entry.details) {
        return res.status(400).json({
            error: "Missing Task Property"
        });
    }

    //Confrim Date and number
    entry.entryDate = new Date(entry.entryDate);

    if (isNaN(entry.entryDate) || isNaN(entry.hoursTaken)) {
        return res.status(400).json({
            error: "Invalid Date or Hours"
        });
    }

    addNewEntry(entry);
    return res.status(201).json(entry);
}



module.exports = {
    httpGetJournalEntries,
    httpAddNewEntry,
};