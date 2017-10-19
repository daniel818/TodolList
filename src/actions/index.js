import _ from 'lodash'
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';


import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDsFSiQXn_Qlul1vErDA6Jzrb9oOnuxFAc",
    authDomain: "todolist-f1d2e.firebaseapp.com",
    databaseURL: "https://todolist-f1d2e.firebaseio.com",
    storageBucket: "todolist-f1d2e.appspot.com",
};

const fb = firebase
    .initializeApp(config)
    .database()
    .ref();

export function fetchTodos(){

    return dispatch => {
        fb.on('value', snapshot =>{
            dispatch({
                type: FETCH_TODOS,
                payload: snapshot.val()
            })
        })
    }
}

export function addTodo(text){

    return dispatch => fb.push({
        text,
        completed:false
    },
    )
}

export function setVisibiltyFilter(filter) {

    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}

export function toggleTodo(id){

    return dispatch => fb.once('value',snapshot =>{
        (snapshot.val()[id].completed)?
           fb.child(id).update({"completed": false}) :   fb.child(id).update({"completed": true})
    });

}

export function deleteTodo(key) {
    return dispatch => fb.child(key).remove();

}