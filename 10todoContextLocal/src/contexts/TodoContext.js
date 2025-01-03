import {createContext, useContext} from 'react';

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            title:'Learn React',
            completed:false,
        }
    ],
    createTodo:(title)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,title)=>{},
    toggleTodo:(id)=>{},
});  

export const TodoProvider=TodoContext.Provider

export const useTodo=()=> {return useContext(TodoContext)}