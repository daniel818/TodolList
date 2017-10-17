import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import TodoReducer from './reducer_todos';
import VisibilityReducer from './reducer_visibility_filter'

const rootReducer = combineReducers({
    todos: TodoReducer,
    visibilityFilter: VisibilityReducer,
    form:formReducer
});

export default rootReducer;
