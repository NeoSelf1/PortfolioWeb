import React from 'react'
import './MenuBar.scss'
import Logo from '../assets/images/logo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'

const MenuBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/about">
            About
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/timeline">
            Timeline
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default MenuBar
