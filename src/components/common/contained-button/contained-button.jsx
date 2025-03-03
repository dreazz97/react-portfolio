import React from 'react'
import './contained-button.css'

export default function ContainedButton({ text, onClick, height, width, fontSize, image, ...props }) {
  return (
    <button className='contained-button' onClick={onClick} {...props} style={{ height: height, width: width, fontSize: fontSize }}>
      <div style={ image ? { display: 'flex', alignItems: 'center', gap: '5px' } : {}}>
        {image && image}
        {text}
      </div>
    </button>
  )
}
