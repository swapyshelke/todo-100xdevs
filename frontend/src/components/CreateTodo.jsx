import React from 'react'

const CreateTodo = () => {
  return (
    <div>
        <input style={{
            padding: 10,
            margin:10
        }} type="text" name="title" placeholder='title' id="" /> <br />

        <input style={{
            padding: 10,
            margin:10
        }}  type="text" name="description" id="" placeholder='descritption'/> <br />

        <button style={{
            padding: 10,
            margin:10
        }} >add a todo</button>
    </div>
  )
}

export default CreateTodo