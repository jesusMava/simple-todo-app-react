import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todosAreLoading = useSelector(state => state.loading.value.completed)
  const todos = useSelector(state => state.todos.value)
console.log(todos)
  return (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm />
        {!todosAreLoading ? <p>Loading...</p> :
        (
          <>
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
          </>
        )}


    </div>
  )
}

export default TodoList
