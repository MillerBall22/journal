const { getAllTasks, addNewTask, existsTaskWithId, finishTaskById } = require('../../models/tasks.model');

async function httpGetAllTasks(req, res) {
    return res.status(200).json(await getAllTasks());
}

function httpAddNewTask(req, res) {
    const task = req.body;


    if (!task.mainTask) {
        return res.status(400).json({
            error: "Missing Task Property"
        });
    }

    addNewTask(task);
    return res.status(201).json(task);
}

function httpFinishTask(req, res) {
    const taskId = Number(req.params.id);

    if (!existsTaskWithId(taskId)) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const finished = finishTaskById(taskId);
    return res.status(200).json(finished);
}


module.exports = {
    httpGetAllTasks,
    httpAddNewTask,
    httpFinishTask,
};