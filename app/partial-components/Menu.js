import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Menu = () => {
  const context = useContext(AppContext)
  return (
    <ul>
      <li className='link'>
        <NavLink tabIndex='2' exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink tabIndex='3' activeClassName='active' to='/about'>About</NavLink>
      </li>
      <li className='menu'>
        <span className='k-icon k-i-menu'
          onKeyPress={event => {
            if (event.key === 'Enter') {
              context.toggleSidenav(!context.navOpen)
            }
          }}
          onClick={() => {
            context.toggleSidenav(!context.navOpen)
          }}
        ></span>
      </li>
    </ul>
  )
}

export default Menu