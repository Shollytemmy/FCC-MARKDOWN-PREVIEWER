import React from 'react'
import{ marked} from 'marked'

export const Preview = ({inputValue}) => {
  return (
    <div className="preview">
        <p className='title'>Preview</p>
         <div 
    dangerouslySetInnerHTML={{__html: marked(inputValue.text)}}
    ></div>

    </div>
   
  )
}
