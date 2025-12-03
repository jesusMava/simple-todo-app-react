import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../todoSlice'

const NewTodoForm = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch();

  return (
    <div> 
        <input 
            type="test"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
        />
        <button onClick={() =>
            { 
                dispatch(createTodo(inputText))
                setInputText('')
            }
        }>
            Create New Todo
        </button>
    </div>
  )
}

export default NewTodoForm