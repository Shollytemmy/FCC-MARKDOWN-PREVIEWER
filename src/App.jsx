import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReactMarkdown># _Hello_, *World*</ReactMarkdown>
      
    </div>
  )
}

export default App
