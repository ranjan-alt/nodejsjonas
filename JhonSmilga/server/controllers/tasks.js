const Task = require("../models/task")
console.log(Task, "ranjan")


const getAllTasks = async (req, res) => {
    // res.send("get all tasks ")

    try {
        const task = await Task.find()

        res.status(200).json({
            status: " Success",
            result: task.length,
            data: {
                task
            }
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const createTask = async (req, res) => {
    // res.send("create a task")
    try {
        const task = await Task.create(req.body)
        res.status(200).json({
            status: "success",
            data: {
                task
            }
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const getTask = async (req, res) => {
    // res.send("get single task")
    try {

        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })   //or we can directly pass req.params._id

        res.status(200).json({ task })
        if (!task) {
            return res.status(404).json({ msg: `no task with this id ${taskID}` })
        }
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


const updateTask = async (req, res) => {
    // res.send("update the task")
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })

        if (!task) {
            return res.status(404).json({ msg: `no task with this id ${taskID}` })
        }
        res.status(200).json({
            status: "success",
            data: task
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error
        })
    }
}


const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })              //{_id:taskID}
        if (!task) {
            return res.status(404).json({ msg: `no taks with this id ${taskID}` })
        }
        res.status(200).json({
            status: "successfully deleted",
            data: {
                task
            }
        })
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }

}



module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}