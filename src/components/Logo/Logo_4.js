import React from 'react'
import mockup1 from '../../assets/images/mockup1.jpg'
import mockup2 from '../../assets/images/mockup2.jpg'
import './Logo_4.scss'
const Logo_4 = () => {
  return (
    <div className="logo4">
      <h1>Application</h1>
      <div className="logo4__container">
        <div className="logo4__container__img">
          <img src={mockup1} alt="mockup1" />
          <img src={mockup2} alt="mockup2" />
        </div>
        <h2>명함</h2>
      </div>
    </div>
  )
}
export default Logo_4
