import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

const TodoList = ({completedTodos, incompleteTodos, onDeleteClicked, onCompletedClicked, onCreateClicked}) => {
  return (
    <div>
        <h1>My Todos</h1>
        <NewTodoForm onCreateClicked={onCreateClicked}/>
        <p>New todo form will go here....</p>
        <h3>Completed:</h3>
        {completedTodos.map((todo, idx) => (
            <TodoListItem 
              todo={todo}
              key={idx}
              onDeleteClicked={onDeleteClicked}
            />
        ))}
      <hr/>
        <h3>Incomplete:</h3>
        {incompleteTodos.map((todo, idx) => (
            <TodoListItem todo={todo} key={idx} onCompletedClicked={onCompletedClicked}/>
        ))}


    </div>
  )
}

export default TodoList