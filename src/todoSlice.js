import { createSlice } from "@reduxjs/toolkit";

//createSlice represents a portion of the global state
// 
export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
      value: [{
        text: 'Go to the Store',
        isCompleted: true
      },
        {
          text: 'new todo',
          isCompleted: false
        }
      ]
    },
//how these reduces will modify the state
    reducers: {
        createTodo: (state, action) => {
            state.value = [...state.value, {
                text: action.payload,
                isCompleted: false,
            }]
        },
        markAsCompleted: (state, action) => {
          console.log(action)
            const text = action.payload
            const todo = state.value.find( t => t.text === text)
            todo.isCompleted = true
        },
        deleteTodo: (state, action) => {
          console.log("delete", action)
            const text = action.payload
            state.value = state.value.filter( t => t.text !== text)
        },
    }
})


export const {createTodo, markAsCompleted, deleteTodo } = todosSlice.actions;
