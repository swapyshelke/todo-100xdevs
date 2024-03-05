import zod from "zod"

// {
//     title: String,
//     descriptoin: String,
// }

// {
//     id: String,
// }

// write zod schema for this


const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string()
})

export default {
    createTodo: createTodo,
    updateTodo: updateTodo
}