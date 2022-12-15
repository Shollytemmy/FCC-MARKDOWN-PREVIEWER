import React from 'react'

export const Editor = ({handleChange, inputValue:{text}}) => {
  return (
    <textarea name="" id="" cols="30" rows="10" value={text} onChange={handleChange}></textarea>
  )
}
