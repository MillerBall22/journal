const express = require('express');

const tasksRouter = express.Router();

const { httpGetAllTasks, httpAddNewTask, httpFinishTask } = require('./tasks.controller');

tasksRouter.get('/', httpGetAllTasks);
tasksRouter.post('/', httpAddNewTask);
tasksRouter.delete('/:id', httpFinishTask);

module.exports = tasksRouter;