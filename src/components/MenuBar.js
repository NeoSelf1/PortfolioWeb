import React, { useEffect, useState } from 'react'
import './MenuBar.scss'
import Logo from '../assets/images/logo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: undefined,
  })

  console.log(menuOpen)
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 767 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p)
  }
  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav
          className={`${'nav'} ${menuOpen && size.width < 768 ? 'isMenu' : ''}`}
        >
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
        <div className="toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose
              style={{ color: '#fff' }}
              onClick={menuToggleHandler}
            />
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default MenuBar
