import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to="/"><h1>Home</h1></NavLink>
        <ul>
          <NavLink to='/about'> <li>About</li></NavLink>
          <NavLink to='/contact'><li>Contact Us</li></NavLink>

        </ul>


      </nav>
    </>
  )
}

export default Nav
