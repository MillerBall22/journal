const path = require('path')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const tasksRouter = require('./routes/tasks/tasks.router');
const journalsRouter = require('./routes/journals/journals.router');
const entriesRouter = require('./routes/entries/entries.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/tasks', tasksRouter);
app.use('/journals', journalsRouter);
app.use('/entries', entriesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;