import { createSlice } from "@reduxjs/toolkit";

//createSlice represents a portion of the global state
// 
export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
//how these reduces will modify the state
    reducers: {
        createTodo: state => {
            state.value = [...state.value, {
                text: 'new todo',
                isCompleted: false,
            }]
        },
        markAsCompleted: state => {
            const text = 'new todo'
            const todo = state.value.find( t => t.text === text)
            todo.isCompleted = true
        },
        deleteTodo: state => {
            const text = 'new todo'
            state.value = state.value.filter( t => t.text !== text)
        },
    }
})