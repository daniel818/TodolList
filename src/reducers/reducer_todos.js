/**
 * Created by Daniel on 27/09/2017.
 */
import {ADD_TODO,TOGGLE_TODO,FETCH_TODOS} from '../actions';




export default function (state = [], action) {

    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];

        case TOGGLE_TODO:
            Object.keys(state).map(key =>
                (key === action.id )? state[key].completed= !state[key].completed : state[key]);
            console.log(state);
            return state;

        case FETCH_TODOS:
            return action.payload;

        default:
            return state;
    }

}