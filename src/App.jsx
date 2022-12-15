import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'
import { Editor } from './Components/Editor'
import { Preview } from './Components/Preview'

const markdown = `# heading 1
## heading 2
##### heading 4

**This is a bold text**
_this is a italic text_

[GOOGLE]: (https://www.google.com/)
> this is a blocquote text


\`\`\` javascript
const dectet = (name) => \`You are ${name}\`
\`\`\`

- item1
- item2
- item3


![Markdown Logo](https://markdown-here.com/img/icon256.png)


  
  
  `

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
