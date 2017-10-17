/**
 * Created by Daniel on 27/09/2017.
 */
import {ADD_TODO,TOGGLE_TODO} from '../actions';

export default function (state = [], action) {

    switch (action.type){

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id) ? {...todo,completed: !todo.completed} :todo
            );
        default:
            return state;
    }

}