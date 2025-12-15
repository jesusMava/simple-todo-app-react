import { createSlice } from "@reduxjs/toolkit";
import { loadingCompleted } from "./loadingSlice";
//createSlice represents a portion of the global state
// 
export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
      value: []
    },
//how these reduces will modify the state
    reducers: {
        markAsCompleted: (state, action) => {
          console.log(action)
            const text = action.payload
            const todo = state.value.find( t => t.text === text)
            todo.isCompleted = true
        },
        todosUpdated: (state, action) => {
          const updatedTodos = action.payload;
          state.value = updatedTodos;
        },
        deleteTodo: (state, action) => {
          console.log("delete", action)
            const text = action.payload
            state.value = state.value.filter( t => t.text !== text)
        },
    },
    extraReducers: (builder) => {
      builder.addCase(loadingCompleted, (state, action) => {
        state.value = action.payload
      })
    }
})


export const { markAsCompleted, deleteTodo, todosUpdated } = todosSlice.actions;
