const tasksDatabase = require('./tasks.mongo');

function existsTaskWithId(taskId) {
    return tasks.has(taskId);
}

function addNewTask(task) {
    tasks.set(
        Object.assign(task, {
            finished: false,
        }));
}

async function saveTask(task) {
    await tasksDatabase.updateOne({
        taskName: task.taskName
    }, task, {
        upsert: true,
    })
}

async function getAllTasks() {
    return await tasksDatabase
        .find({}, { '_id': 0, '__v': 0 })
}

function abortTaskById(taskId) {
    const finished = tasks.get(taskId);
    finished.finished = true;
    return finished;
}

module.exports = {
    getAllTasks,
    addNewTask,
    existsTaskWithId,
    abortTaskById
};