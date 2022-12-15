import React from 'react'

export const Editor = ({handleChange, inputValue:{text}}) => {
  return (
    <div className="editor">
        <p className='title'>Editor</p>
        <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleChange}></textarea>

    </div>
    
  )
}
//#0b0c10