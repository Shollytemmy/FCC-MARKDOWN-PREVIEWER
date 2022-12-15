import React from 'react'
import{ marked} from 'marked'

export const Preview = ({inputValue}) => {
  return (
    <div 
    dangerouslySetInnerHTML={{__html: marked(inputValue.text)}}
    ></div>
  )
}
