import React from 'react'
import '../../styles/header.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
  return (
    <div id='header-container'>
        <div id='logo-container'>
            <h1 id='logo' onClick={() => navigate('/')}>IURI PENICHE</h1>
        </div>
    </div>
  )
}
