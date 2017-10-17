/**
 * Created by Daniel on 16/10/2017.
 */
import {SET_VISIBILITY_FILTER} from '../actions';

export default function (state="SHOW_ALL",action) {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
    
}