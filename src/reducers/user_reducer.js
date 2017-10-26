/**
 * Created by Daniel on 24/10/2017.
 */
/**
 * Created by Daniel on 27/09/2017.
 */
import {FETCH_USERS} from '../actions';

export default function (state = {}, action = '') {

    switch (action.type){

        case FETCH_USERS:
            return action.payload;

        default:
            return state;
    }

}
