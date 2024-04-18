import { getAllTasks, getTask, updateTask, deleteTask } from "../api/taskApi";
import { useEffect, useState } from 'react';
import "./task.css";
import TaskForm from "./TaskForm";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editable, setEditable] = useState(false);
    const [updatedTaskName, setUpdatedTaskName] = useState('');
    const [updatedTaskCompleted, setUpdatedTaskCompleted] = useState(false);


    const fetchTask = async () => {
        try {
            const data = await getAllTasks();
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTask()
    }, [])

    const fetchSingleTask = async (taskId) => {
        try {
            const task = await getTask(taskId);
            setSelectedTask(task);
            setUpdatedTaskName(task.name);
            setUpdatedTaskCompleted(task.completed);
            setShowModal(true);
            setEditable(false); // Set editable to false initially
        } catch (error) {
            console.log(error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleEdit = () => {
        setEditable(true); // Enable editing when "Edit" button is clicked
    };

    const handleTaskNameChange = (event) => {
        setUpdatedTaskName(event.target.value);
    };

    const handleTaskCompletedChange = (event) => {
        setUpdatedTaskCompleted(event.target.checked);
    };

    const handleUpdateTask = async () => {
        try {
            await updateTask(selectedTask._id, { name: updatedTaskName, completed: updatedTaskCompleted });
            // Update task in the local state
            setTasks(tasks.map(task => task._id === selectedTask._id ? { ...task, name: updatedTaskName, completed: updatedTaskCompleted } : task));
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteTask = async () => {
        try {
            await deleteTask(selectedTask._id)
            setTasks(tasks.filter((task) => {
                return task._id !== selectedTask._id
            }))
            setShowModal(false)
        } catch (error) {
            console.log(error, "Error in deleting")
        }
    }

    return (
        <>
            <h1>Task List component</h1>
            <TaskForm fetchTask={fetchTask} />
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {task.name}
                        {task.completed ? <input type="checkbox" checked={true} readOnly /> : <input type="checkbox" checked={false} readOnly />}
                        <button onClick={() => fetchSingleTask(task._id)}>View Task</button>
                    </li>
                ))}
            </ul>

            {showModal && (
                <div className={`modal ${showModal ? 'show' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        {selectedTask && (
                            <div>
                                <h2>{editable ? 'Edit Task' : 'Task Details'}</h2>
                                <input type="text" value={updatedTaskName} onChange={handleTaskNameChange} readOnly={!editable} />
                                <input type="checkbox" checked={updatedTaskCompleted} onChange={handleTaskCompletedChange} disabled={!editable} />
                                {editable && <button onClick={handleUpdateTask}>Update Task</button>}
                                {!editable && <button onClick={handleEdit}>Edit</button>}
                                <button onClick={handleDeleteTask}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskList;
