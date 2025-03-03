import React from 'react'
import './outline-button.css'

export default function OutlineButton({ text, onClick, height, width, image, fontSize, ...props }) {
  return (
    <button className='outline-button' onClick={onClick} {...props} style={{ height: height, width: width, fontSize: fontSize }}>
      {image && image}
      {text}
    </button>
  )
}
