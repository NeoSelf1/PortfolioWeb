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
          <NavLink exact="true" activeclassname="activeHome" to="/">
            Home
          </NavLink>
          <NavLink exact="true" activeclassname="activeAbout" to="/about">
            About
          </NavLink>
          <NavLink exact="true" activeclassname="activeTimeline" to="/timeline">
            Timeline
          </NavLink>
        </nav>
        {/* <div className="underline"></div> */}
      </div>
      <Outlet />
    </>
  )
}

export default MenuBar
