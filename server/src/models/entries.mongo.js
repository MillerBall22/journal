const mongoose = require('mongoose');

const entriesSchema = new mongoose.Schema({
    entry: {
        type: String,
        required: true,
    },
    journal: {
        type: String,
        required: true,
    },
    entryDate: {
        type: Date,
        required: true,
    },
    hoursTaken: {
        type: Number,
        required: true,
    },
    entryDetails: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Entries', entriesSchema);