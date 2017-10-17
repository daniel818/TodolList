import React from 'react'
import  TodoDetails from './todo_details'

const TodoList = ({ todos, toggleTodo }) => {
    return(
        <div className="col-lg-12">
            <ul className="list-group">
                {todos.map(todo =>
                    <TodoDetails
                        key={todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                    />
                )}
            </ul>
        </div>
    )
}



export default TodoList
