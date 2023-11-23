import express from 'express'

import { addTask, deleteTask, getTasks } from '../controllers/tasks.controllers.js'

const router = express.Router()

// this is === /students
router.get('/', getTasks) //GET all tasks
router.post('/save', addTask) // ADD a new task

router.post('/delete',deleteTask) //delete task


// router.get('/:id', getStudent) // GET a single student by id
// router.put() // UPDATE a student
// router.delete() // DElETE a student


export default router