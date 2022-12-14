import React, { useEffect, useState } from 'react'
import './MenuBar.scss'
import frame from '../assets/images/menuFrame.jpg'
import { NavLink, Outlet } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div className="menu_base">
      <div className="nav-bar">
        {/* <img className="frame" src={frame} alt="frame" /> */}
        <h2 className="text_1">First Scene</h2>
        <nav className="menu_top">
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? 'active' : 'a')}
            to="/"
          >
            Home
          </NavLink>
          <div className="line"></div>
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? 'active' : 'a')}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </nav>
        <h2 className="text_2">Brand</h2>
        <nav className="menu_bot">
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? 'active' : 'a')}
            to="/logo"
          >
            5 Rings
          </NavLink>
          <div className="line"></div>
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? 'active' : 'a')}
            to="/colours"
          >
            Colours
          </NavLink>
          <div className="line"></div>
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? 'active' : 'a')}
            to="/typography"
          >
            Typography
          </NavLink>
          <div className="line"></div>
          <NavLink
            exact="true"
            className={({ isActive }) => (isActive ? 'active' : 'a')}
            to="/symbols"
          >
            Symbols
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default MenuBar
