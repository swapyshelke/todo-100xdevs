
// write basic express boilerplate code 
// with express.json() middleware

import express from "express";
import {createTodo}  from "./type.js"
import Todo from "./db.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors({
    // origin: "http://localhost:5173/"
}))



app.post('/todos', async (req, res) => {
    const createPayload = req.body;
   
       try {
        const parsedPayload = createTodo.parse(createPayload);
        console.log(parsedPayload);


        // console.log('error')

        await Todo.create({
            title: parsedPayload.title,
            description: parsedPayload.description,
            completed: false
        });

        res.json({
            msg: "Todo created"
        });

       } catch (error) {
        res.status(400).json({
            msg: "You sent the wrong inputs",
            // errors: error.errors
        });
       }
});


app.get("/todos", async (req, res) => {
    const todos = await Todo.find({})

    res.json({
        todos
    })
})


app.put("/completed", async (req, res) => {
        const updatePayload = req.body
        const parsedPayload = updateTodo.safeParse(updatePayload);
        if(!parsedPayload.success) {
            res.status(411).json({
                msg: "you send to wrong input"
            })
            return 
        }

        // here update todo as completed
        await Todo.updateMany({
            _id: req.body.id,
        }, {
            completed: true
        } 
        )

        // return json response as a compelted todo list
        res.json({
            msg: "Todo marked as completed"
        })
})

app.listen(3001, () => {
    console.log(`listening to port ${3001}`);
})