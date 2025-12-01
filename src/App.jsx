import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    {text: 'Learn React', isCompleted: true},
    {text: 'Learn about Props', isCompleted: true}
  ])
  const [incompleteTodos, setIncompletedTodos] = useState([
    {text: 'Learn about State', isCompleted: false},
    {text: 'Build a ToDo App', isCompleted: false}
  ])

  const markTodoAsComplete = (task) => {
    setIncompletedTodos(incompleteTodos.filter(t => t.text !== task))
    setCompletedTodos([...completedTodos, { ...incompleteTodos.find(t => t.text === task), isCompleted: true}])
  }

  const deleteTodo = (text) => {
    setCompletedTodos(completedTodos.filter(t => t.text !== text))

  }

  const onCreateClicked = (text) => {
    setIncompletedTodos([...incompleteTodos, {text: text, isCompleted: false}])
  }

  return (
    <>
      <TodoList
       completedTodos={completedTodos}
       incompleteTodos={incompleteTodos}
       onCompletedClicked={markTodoAsComplete}
       onDeleteClicked={deleteTodo}
       onCreateClicked={onCreateClicked}
      />
    </>
  )
}

export default App
