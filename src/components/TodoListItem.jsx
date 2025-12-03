import React from 'react'
//this useDispatch is  to let it know to redux that something is gonna happend
//trigger an acction
import { useDispatch } from 'react-redux'
import { markAsCompleted, deleteTodo } from '../todoSlice'

const TodoListItem = ({todo}) => {
  const dispatch = useDispatch()


  return (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted && <p>Complete!!</p>}
        {todo.isCompleted ? <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete Item</button>
        : <button onClick={() => dispatch(markAsCompleted(todo.text))}>Mark as Completed</button>}
    </div>
  )
}

export default TodoListItem
