import express from 'express'

import tasksRoutes from './task.routes.js'

const router = express.Router()

// router.use('/', function(req,res) {
//     res.send("Hello")
// })

router.use('/tasks', tasksRoutes)


export default router