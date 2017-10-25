import React,{Component} from 'react'
import Footer from './footer'

import Login from './login';

export default class App extends Component {



    render() {

        return (
            <div>
                <div className="jumbotron"><h1>Todo List</h1></div>
                <Login/>
                <Footer/>
            </div>

    );}
}



