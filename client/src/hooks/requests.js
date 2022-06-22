const API_URL = 'http://localhost:8000';

// Add New Task
async function httpAddNewTask(task) {
    try {
        return await fetch(`${API_URL}/tasks`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
    } catch (error) {
        return {
            ok: false
        };
    }
}

// get Tasks
async function httpGetAllTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    return await response.json();
}

//Delete Task
async function httpFinishTask(id, ) {
    try {
        return await fetch(`${API_URL}/tasks/${[id]}`, {
            method: "put",
        });
    } catch (error) {
        return {
            ok: false
        };
    }
}

//Get All Journals
async function httpGetAllJournals() {
    const response = await fetch(`${API_URL}/journals`);
    return await response.json();
}

//Add Journal
async function httpAddNewJournal(journal) {
    try {
        return await fetch(`${API_URL}/journals`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journal)
        });
    } catch (error) {
        return {
            ok: false
        };
    }
}
export {
    httpAddNewTask,
    httpGetAllTasks,
    httpFinishTask,
    httpGetAllJournals,
    httpAddNewJournal,

}