import React,{Component} from 'react'
import  TodoDetails from './todo_details'

class TodoList extends Component {

    constructor(props){
        super(props);

        this.renderTodoList = this.renderTodoList.bind(this);
    }

    componentDidMount(){
        this.props.fetchTodos(this.props.userObj);
    }

    renderTodoList() {
        const { todos, toggleTodo, deleteTodo } = this.props;

        if (!todos) {
            return <div> Add some Ass in here </div>
        }else{
             return Object.keys(todos).map(key =>
                <TodoDetails
                    key={key}
                    {...todos[key]}
                    onClick={() => toggleTodo(key,this.props.userObj)}
                    deleteFunc={() => deleteTodo(key,this.props.userObj)}
                />
            )
        }
    }

    render() {
        return (
            <div className="col-lg-12">
                <ul className="list-group">
                    { this.renderTodoList() }
                </ul>
            </div>
        )
    }
}



export default TodoList
