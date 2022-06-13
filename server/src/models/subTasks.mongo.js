const mongoose = require('mongoose');

const subTasksSchema = new mongoose.Schema({
    subTask: {
        type: String,
        required: true,
    },
    subTaskFinished: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = subTasksSchema;