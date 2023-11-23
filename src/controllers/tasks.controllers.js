import Task from "../models/tasks.model.js";

export const addTask = async (req, res) => {
    try {
        const newTask = new Task(req.body)
        await newTask.save()
        res.status(201).send(newTask)
    } catch(err) {
        res.status(400).send(err)
    }
}


export const deleteTask = async (req, res) => {
    const {_id}=req.body
    Task.findByIdAndDelete(_id)
    .then(()=>res.set(201).send("Deleted successfully"))
    .catch((err)=>console.log(err))
}




export const getTasks = async (req, res) => {
    const toDo=await Task.find()
    res.send(toDo)
}
    


