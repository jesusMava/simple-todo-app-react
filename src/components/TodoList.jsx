import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { useSelector } from 'react-redux'

const TodoList = ({onCreateClicked}) => {
  const todos = useSelector(state => state.todos.value)

  return (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm />
        <p>New todo form will go here....</p>
        <h3>Completed:</h3>
        {todos.map((todo, idx) => (
            <TodoListItem 
              todo={todo}
              key={idx}
            />
        ))}
      <hr/>
        <h3>Incomplete:</h3>
        {todos.map((todo, idx) => (
            <TodoListItem todo={todo} key={idx}/>
        ))}


    </div>
  )
}

export default TodoList
