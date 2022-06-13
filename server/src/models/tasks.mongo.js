const mongoose = require('mongoose');

const { subTaskSchema } = require('./subTasks.mongo');

const tasksSchema = new mongoose.Schema({
    mainTask: {
        type: String,
        required: true,
    },
    subTasks: {
        type: [subTaskSchema],
        required: true,
    },
    quadrant: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model('Tasks', tasksSchema);