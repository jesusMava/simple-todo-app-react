import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todosAreLoading = useSelector(state => !state.loading.value.completed)
  const todos = useSelector(state => state.todos.value)
  return (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm />
        {todosAreLoading ? <p>Loading...</p> :
        (
          <>
          <h3>Completed:</h3>
          {todos.map((todo) => (
              <TodoListItem 
                todo={todo}
                key={todo.id}
              />
          ))}
        <hr/>
          <h3>Incomplete:</h3>
          {todos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id}/>
          ))}
          </>
        )}


    </div>
  )
}

export default TodoList
