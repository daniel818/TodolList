import _ from 'lodash'
export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_USERS = 'FETCH_USERS';


import firebase from 'firebase';

 export const config = {
    apiKey: "AIzaSyDsFSiQXn_Qlul1vErDA6Jzrb9oOnuxFAc",
    authDomain: "todolist-f1d2e.firebaseapp.com",
    databaseURL: "https://todolist-f1d2e.firebaseio.com",
    storageBucket: "todolist-f1d2e.appspot.com",
}




const fb = firebase
    .initializeApp(config)
    .database().ref('users')




export function fetchTodos(user){

    return dispatch => {
        fb.child(user.uid).on('value', snapshot =>{
            dispatch({
                type: FETCH_TODOS,
                payload: snapshot.val()
            })
        })
    }
}

export function addTodo(text,user){

    return dispatch => fb.child(user.uid).push({
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

export function toggleTodo(id,user){

    return dispatch => fb.child(user.uid).once('value',snapshot =>{
        (snapshot.val()[id].completed)?
            fb.child(user.uid).child(id).update({"completed": false}) :
            fb.child(user.uid).child(id).update({"completed": true})
    });

}

export function deleteTodo(key,user) {
    return dispatch => fb.child(user.uid).child(key).remove();

}

export function addUser(user){
    return dispatch => fb.child(user.uid).set({
        name : user.displayName,
    })
}

export function fetchUsers() {
    return dispatch => {
        return new Promise((resolve,reject)=>{
            fb.on('value', snapshot =>{
                dispatch({
                    type: FETCH_USERS,
                    payload: snapshot.val()
                });
                resolve(snapshot);
                if(!snapshot) reject();
            })
        })
    }
}