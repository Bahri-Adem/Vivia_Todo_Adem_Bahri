const db = require('../models')
// create main Model
const Task = db.tasks

// main work

// 1. create task

const addTask = async (req, res) => {

    let info = {
        task: req.body.task,
        progress: req.body.progress,
    }

    const task = await Task.create(info)
    res.status(200).send(task)
    console.log(task)

}



// 2. get all tasks

const getAllTasks = async (req, res) => {

    let tasks = await Task.findAll({})
    res.status(200).send(tasks)

}

// 3. get single task

const getOneTask = async (req, res) => {

    let id = req.params.id
    let task = await Task.findOne({ where: { id: id }})
    res.status(200).send(task)

}

// 4. update Task

const updateTask = async (req, res) => {

    let id = req.params.id

    const task = await Task.update(req.body, { where: { id: id }})

    res.status(200).send(task)
   

}

// 5. delete task by id

const deleteTask = async (req, res) => {

    let id = req.params.id
    
    await Task.destroy({ where: { id: id }} )

    res.status(200).send('Task is deleted !')

}

module.exports = {
    addTask,
    getAllTasks,
    getOneTask,
    updateTask,
    deleteTask,
}