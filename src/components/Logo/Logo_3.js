import React from 'react'
import './Logo_3.scss'
import logoWhite from '../../assets/images/logoWhite.jpg'
import logoBlack from '../../assets/images/logoBlack.jpg'
const Logo_3 = () => {
  return (
    <div className="logo3">
      <h1>Logo Variable</h1>
      <div className="logo3__container">
        <div className="logo3__container__black">
          <img src={logoBlack} alt="logoBlack" />
          <h2>Black</h2>
        </div>
        <div className="logo3__container__white">
          <img src={logoWhite} alt="logoWhite" />
          <h2>White</h2>
        </div>
      </div>
    </div>
  )
}

export default Logo_3
