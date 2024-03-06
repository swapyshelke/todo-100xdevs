import React from 'react'

/* 
todos = [
    {
        title: "go to gym"
        description: "push ups, alkgm kakjr "
    }
]
*/

const Todos = ({ todos }) => {
    return (
        <div>
            
            {
                todos.map((todo) => {
                    return <div>
                        <h2>{todo.title}</h2>
                        <h5>{todo.description}</h5>

                        <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                })
            }
        </div>
    )
}

export default Todos