const { getAllJournals, addNewJournal } = require('../../models/journals.model');

async function httpGetAllJournals(req, res) {
    return res.status(200).json(await getAllJournals());
}

function httpAddNewJournal(req, res) {
    const journal = req.body;


    if (!journal.journalName) {
        return res.status(400).json({
            error: "Missing Task Property"
        });
    }

    addNewJournal(journal);
    return res.status(201).json(journal);
}



module.exports = {
    httpGetAllJournals,
    httpAddNewJournal,
};