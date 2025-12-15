import axios from "axios"
import { loadingStarted, loadingFailed, loadingCompleted } from '../../loadingSlice'
import { todosUpdated } from "../../todoSlice"
export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted)
    try {
        const response = await axios.get('/api/todos')
        const todos = response.data;
        console.log(todos)
        dispatch(loadingCompleted(todos))
    } catch(e) {
        loadingFailed(e)
    }



}


export const createTodo = (newTodoText) => async (dispatch, getState) => {
    try{
        const response = await axios.post('api/todos', {
            text: newTodoText
        })
        const newTodo = response.data;
        const updatedTodos = getState().todos.value.concat(newTodo)
        dispatch(todosUpdated(updatedTodos))
    }catch(e){
        console.log(e)
    }
}