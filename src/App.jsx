import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.scss'
import { Editor } from './Components/Editor'
import { Preview } from './Components/Preview'
import {markdown} from "../markDown"



function App() {
  const [inputValue, setInputValue] = useState({text: markdown}) 

  const handleChange = (event) => {

    setInputValue({ text: event.target.value})
    
  
  }

  

  return (
    <div className="App">
      <Editor handleChange={handleChange} inputValue={inputValue} />
      <Preview inputValue={inputValue} />
      
    </div>
  )
}

export default App
