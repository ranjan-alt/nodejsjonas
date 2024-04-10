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