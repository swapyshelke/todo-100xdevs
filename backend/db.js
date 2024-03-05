// Todo
//  - title: string
//  - desriptoin: string
//  - completed: boolean

import 'dotenv/config'

import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect(process.env.DATAbASE_URL)

const todoSchema = new Schema({
    title :String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

export default todo;