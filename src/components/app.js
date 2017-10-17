import React,{Component} from 'react'
import Footer from './footer'
import AddTodo from '../containers/add_todo'
import VisibleTodoList from '../containers/visible_todo_list'

export default class App extends Component {


  render() {
    return (
      <div>
          <div className="jumbotron"><h1>Todo List</h1></div>
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
      </div>

    );
  }
}
