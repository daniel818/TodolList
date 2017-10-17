import _ from 'lodash'
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addTodo(text){
    return{
        type: ADD_TODO,
        text,
        id: _.uniqueId()
    }
}

export function setVisibiltyFilter(filter) {

    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}

export function toggleTodo(id){
    return{
        type:TOGGLE_TODO,
        id
    }
}