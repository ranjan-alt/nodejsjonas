import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/tasks';


export const getAllTasks = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                'Accept': 'application/json'
            }
        })
        console.log(response)
        return response.data.data.task
    } catch (error) {
        throw new Error(error.response.message)
    }
}

export const createTask = async (taskData) => {
    try {
        const response = await axios.post(BASE_URL, taskData)

    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const getTask = async (taskId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${taskId}`)
        return response.data.task
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = async (taskId, taskData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${taskId}`, taskData);
        return response.data.data.task
    } catch (error) {
        console.log(error)
    }
}


export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${taskId}`);
        return response.data.data.task;
    } catch (error) {
        throw new Error(error.response.data.msg || 'Error deleting task');
    }
}