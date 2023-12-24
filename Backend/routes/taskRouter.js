// import controllers review, tasks
const taskController = require('../controllers/taskController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addTask', taskController.addTask)

router.get('/allTasks', taskController.getAllTasks)


// Tasks router
router.get('/:id', taskController.getOneTask)

router.put('/:id', taskController.updateTask)

router.delete('/:id', taskController.deleteTask)

module.exports = router