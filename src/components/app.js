import React,{Component} from 'react'
import Footer from './footer'

import Login from './login';

export default class App extends Component {

    render() {
        return (
            <div>
                <Login/>
                <Footer/>
            </div>
        );
    }
}



