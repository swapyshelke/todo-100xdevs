// Todo
//  - title: string
//  - desriptoin: string
//  - completed: boolean



import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect("mongodb+srv://swapy:swapnil@cluster0.crjtflw.mongodb.net/todos")

const todoSchema = new Schema({
    title :String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

export default todo;