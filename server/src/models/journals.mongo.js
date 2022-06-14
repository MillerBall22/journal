const mongoose = require('mongoose');

const journalsSchema = new mongoose.Schema({
    journalName: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Journals', journalsSchema);