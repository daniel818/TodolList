/**
 * Created by Daniel on 15/10/2017.
 */
import React from 'react';



const TodoDetails = ({onClick, completed, text}) =>(
    <li
        onClick={onClick}
        className= {completed? "list-group-item list-group-item-success" : "list-group-item"}
    >
        {text}
    </li>

);

export default TodoDetails;