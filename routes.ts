import {Router} from 'express'

const router = Router()

let todos = []; // In-memory database
let idCounter = 1; // To track unique IDs

router.post("/todos", (req, res) => {
    const {task} = req.body

    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }

    const newTodo = { id: idCounter++, task };
    todos.push(newTodo);
    res.status(201).json(newTodo);


});

// Get all To-Dos (GET)
router.get("/todos", (req, res) => {
    res.json(todos);
});

router.get("/todos/:id", (req,res)=> {
    const todo = todos.find( todo => todo.id === parseInt(req.params.id))

    if(!todo){
        res.send(404).json({message: 'todo not found'})
    }
    res.json(todo)
})

export default router