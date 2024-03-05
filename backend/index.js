
// write basic express boilerplate code 
// with express.json() middleware

import express from "express";
import createTodo from "./type.js"
import Todo from "./db.js";

const app = express();
app.use(express.json())

// body 
// title : string
// description : string

app.post('/todos', async (req, res) => {

    // store payload from req body
    const createPayload = req.body

    // get createTodo
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload)
 {
        res.status(411).json({
            ms: "you sent the wrong inpts"
        })    
        return
 }

 await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
 })

 res.json({
    msg: "Todo created"
 })

})


app.get("/todos", async (req, res) => {
    const todos = await todo.find({})

    res.json({
        todos
    })
})


app.put("/completed", (req, res) => {
        const updatePayload = req.body
        const parsedPayload = updateTodo.safeParse(updatePayload);
        if(!parsedPayload.success) {
            res.status(411).json({
                msg: "you send to wrong input"
            })
            return
        }

        // here update todo as completed

        // return json response as a compelted todo list
})

app.listen(3001, () => {
    console.log(`listening to port ${3001}`);
})