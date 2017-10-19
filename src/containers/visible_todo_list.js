/**
 * Created by Daniel on 16/10/2017.
 */
import { connect } from 'react-redux'
import { toggleTodo,fetchTodos,deleteTodo } from '../actions'
import TodoList from '../components/todo_list'


const getVisibleTodos = (todos,filter) => {
    switch(filter){
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return Object.keys(todos).reduce((ans, key)=>{
                if(todos[key].completed){
                    ans[key] = todos[key];
                }
                return ans;
            },{});

        case "SHOW_ACTIVE":
            return Object.keys(todos).reduce((ans, key)=>{
                if(!todos[key].completed){
                    ans[key] = todos[key];
                }
                return ans;
            },{});

        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToPropS(state) {

    return {
        todos:getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

export default connect(mapStateToPropS,{toggleTodo,fetchTodos,deleteTodo})(TodoList);