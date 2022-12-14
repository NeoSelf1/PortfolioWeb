import React from 'react'
import logo from '../../assets/images/logo.png'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__left">
          <img src={logo} alt="logo" />
          <div className="footer__left__text">
            <div className="footer__left__text__title">
              <h2>퍼스트씬</h2>
              <h4>첫인상 지금</h4>
            </div>
            <div className="footer__left__text__detail">
              <h2>Contact Us</h2>
              <h4>
                010 - 2848 - 9261 <br />
                nicky2023@naver.com
                <br />
                충남 금산군 금산읍 비호산로 57, 2층
              </h4>
            </div>
          </div>
        </div>
      </div>
      <h5>© 2022 FIRSTSCENE. All rights reserved.</h5>
    </div>
  )
}

export default Footer
