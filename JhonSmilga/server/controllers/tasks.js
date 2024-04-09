const getAllTasks = (req, res) => {
    // res.send("get all tasks ")
    const task = req.body

    res.status(200).json({
        status: " Success",
        data: {
            task
        }
    })
}

const createTask = (req, res) => {
    // res.send("create a task")
    const task = req.body
    res.status(200).json({
        status: "success",
        data: {
            task
        }
    })
}

const getTask = (req, res) => {
    // res.send("get single task")
    res.json({ id: req.params.id })
}


const updateTask = (req, res) => {
    res.send("update the task")
}


const deleteTask = (req, res) => {
    res.send("delete the task ")
}



module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}