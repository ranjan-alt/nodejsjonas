import { useState } from "react"
import { createTask } from "../api/taskApi"

const TaskForm = () => {

    const [name, setName] = useState("")
    const [completed, setCompleted] = useState(false)
    console.log(name)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            await createTask({ name, completed })
        } catch (error) {
            console.log("Error", error)
        }
    }

    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit} >
                    <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} placeholder="enter task name" />
                    <label htmlFor="">
                        Completed
                        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
                    </label>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </>
    )
}



export default TaskForm