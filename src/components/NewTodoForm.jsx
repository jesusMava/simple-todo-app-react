import { useState } from 'react'

const NewTodoForm = ({onCreateClicked}) => {
    const [inputText, setInputText] = useState('')
  return (
    <div> 
        <input 
            type="test"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
        />
        <button onClick={() =>
            { 
                onCreateClicked(inputText)
                setInputText('')
            }
        }>
            Create New Todo
        </button>
    </div>
  )
}

export default NewTodoForm