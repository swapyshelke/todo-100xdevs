
// write basic express boilerplate code 
// with express.json() middleware

import express from "express";
import createTodo from "./type.js"
const app = express();

app.use(express.json())

// body 
// title : string
// description : string




app.post('/todos', (req, res) => {
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

})


app.get("todos", (req, res) => {
    
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
})

app.listen(3001, () => {
    console.log(`listening to port ${3001}`);
})