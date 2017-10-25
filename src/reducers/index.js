import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import TodoReducer from './reducer_todos';
import UsersReducer from './user_reducer';
import VisibilityReducer from './reducer_visibility_filter'

const rootReducer = combineReducers({

    todos: TodoReducer,
    visibilityFilter: VisibilityReducer,
    users: UsersReducer,
    form:formReducer

});

export default rootReducer;
