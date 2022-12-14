import React from 'react'
import app1 from '../../assets/images/app1.jpg'
import app2 from '../../assets/images/app2.jpg'
import app3 from '../../assets/images/app3.jpg'
import './Symbol_3.scss'
const Symbol_3 = () => {
  return (
    <div className="symbol3">
      <h1>Applications</h1>
      <div className="symbol3__container">
        <div className="symbol3__container__left">
          <img src={app1} alt="app1" />
          <img src={app2} alt="app2" />
        </div>
        <img src={app3} alt="app3" />
      </div>
    </div>
  )
}

export default Symbol_3
