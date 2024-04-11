
import { getAllTasks, getTask } from "../api/taskApi";
import { useEffect, useState } from 'react'
const TaskList = () => {
    const [tasks, setTasks] = useState([])
    console.log(tasks)

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getAllTasks();
                console.log(data, "ranjan")
                setTasks(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTask()
    }, []);

    const fetchSingleTask = async (taskId) => {
        try {
            const task = await getTask(taskId)
            console.log(task, "kumar")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Task List component</h1>
            <ul>
                {tasks.map((task) => (
                    <>

                        <li>{task.name}{task.completed ? <input type="checkbox" checked={true} /> : <input type="checkbox" checked={false} />}</li>
                        <button onClick={() => fetchSingleTask(task._id)}>Click</button>
                    </>

                ))}
            </ul >
        </>
    )
}


export default TaskList;