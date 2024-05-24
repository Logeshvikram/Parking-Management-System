import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='container-fluid-nav'>
         <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contactus'>Contact Us</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
    </div>
  )
}
