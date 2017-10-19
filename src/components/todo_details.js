/**
 * Created by Daniel on 15/10/2017.
 */
import React from 'react';



const TodoDetails = ({deleteFunc,onClick, completed, text}) =>(
    <div className="d-inline-block">
        <li
            onClick={onClick}
            className= {completed? "list-group-item list-group-item-success" : "list-group-item"}
        >
            {text}

        </li>
        <button type="button" className="btn btn-danger" onClick={deleteFunc} >Delete</button>
    </div>
);

export default TodoDetails;