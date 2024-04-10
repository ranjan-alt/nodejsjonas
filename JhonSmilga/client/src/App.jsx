import { useEffect, useState } from 'react'

import './App.css'
import axios from "axios";
import { getAllTasks } from '../api/taskApi';

function App() {

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

  return (
    <>

    </>
  )
}

export default App
