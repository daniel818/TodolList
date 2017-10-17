/**
 * Created by Daniel on 16/10/2017.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/todo_list'


const getVisibleTodos = (todos,filter) => {
    switch(filter){
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToPropS(state) {

    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToPropS,{toggleTodo})(TodoList);