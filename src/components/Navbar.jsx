import React from 'react'
import './navBar.css'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div  className='navBar'>
    
      <Link className='link' to="/">About</Link>
      <Link className='link' to="/books">Books</Link>
      <Link className='link' to="/shortFiction">Short Fiction</Link>
      <Link className='link' to="/writingResources"> Writing Resources </Link>
      <Link className='link' to="/exophony"> Exophony </Link>

    </div>
  )
}
