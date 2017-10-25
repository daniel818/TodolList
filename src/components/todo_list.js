import React,{Component} from 'react'
import  TodoDetails from './todo_details'
import firebase from 'firebase';

class TodoList extends Component {

    constructor(props){
        super(props);

        this.renderTodoList = this.renderTodoList.bind(this);
    }

    componentDidMount(){
        this.props.fetchTodos(this.props.userObj);
        console.log(this.props.userObj.uid + ' Did mount todos of current user ');
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
