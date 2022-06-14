const API_URL = 'http://localhost:8000';

//TODO Submit OT Submission
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

// get submissions
async function httpGetAllTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    return await response.json();
}

//change submissions
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

export {
    httpAddNewTask,
    httpGetAllTasks,
    httpFinishTask,
}