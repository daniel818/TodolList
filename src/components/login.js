/**
 * Created by Daniel on 24/10/2017.
 */
import React,{Component} from 'react'
import firebase from 'firebase';
import AddTodo from '../containers/add_todo'
import VisibleTodoList from '../containers/visible_todo_list'
import {connect} from 'react-redux'
import {addUser,fetchUsers} from '../actions';
import {Avatar} from 'rebass';

class Login extends Component{
    constructor(props){
        super(props);
        this.renderLogin = this.renderLogin.bind(this);
        this.renderTodos = this.renderTodos.bind(this);

        this.state = {
            user: null,
            authenticated: false,
        }

    }
    componentDidMount(){

        this.props.fetchUsers()
            .then(()=>{
                firebase.auth().onAuthStateChanged((user = false) =>{
                    if(user){
                      if(!this.props.users.hasOwnProperty(user.uid)){
                          this.props.addUser(user);
                      }
                    }
                    this.setState({
                        authenticated: !!user,
                        user
                    })
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    authenticate(){
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }

    renderLogin(){
        return(
            <nav>
                <button onClick={() => this.authenticate()}>Facebook Login</button>
                <button onClick={() => this.authenticate()}>Google Login</button>
            </nav>
        )
    }

    renderTodos(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Todo List
                        <Avatar size={72} src={this.state.user.photoURL}/>
                    </h1>
                    <h2>Welcome {this.state.user.displayName}</h2>
                </div>
                <AddTodo userObj={this.state.user}/>
                <VisibleTodoList userObj={this.state.user}/>
            </div>
        )
    }

    render(){
        return( (!this.state.authenticated)? this.renderLogin() : this.renderTodos() )
    }
}
const mapStateToProps = ({users}) =>({users});

export default connect(mapStateToProps,{addUser,fetchUsers})(Login);