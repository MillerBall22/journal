const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    mainTask: {
        type: String,
        required: true,
    },
    subTasks: {
        type: [String],
        required: true,
    },
    finished: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model('Tasks', tasksSchema);