// Todo
//  - title: string
//  - desriptoin: string
//  - completed: boolean



import mongoose from "mogoose"

const schema = mongoose;

const TodosSchema = new Schema({
    title :String,
    description: String,
    completed :boolean
})

const Todo = mongoose.model('todo', TodosSchema)

export default Todo;