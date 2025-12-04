import { useDispatch } from 'react-redux'
import TodoList from './components/TodoList'
import { useEffect } from 'react'
import { loadTodos } from './components/thunks/thunks'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTodos());
  }, [])

  return (
    <>
      <TodoList/>
    </>
  )
}

export default App
