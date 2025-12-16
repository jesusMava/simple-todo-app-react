import React from 'react'
import { markTodoAsCompleted,deleteTodo } from './thunks/thunks'

//this useDispatch is  to let it know to redux that something is gonna happend
//trigger an acction
import { useDispatch } from 'react-redux'
// import { markAsCompleted} from '../todoSlice'

const TodoListItem = ({todo}) => {
  const dispatch = useDispatch()


  return (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted && <p>Complete!!</p>}
        {todo.isCompleted ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>Mark as Completed</button>}
    </div>
  )
}

export default TodoListItem
