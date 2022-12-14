import React from 'react'
import sym1 from '../../assets/images/sym1.png'
import sym2 from '../../assets/images/sym2.png'
import sym3 from '../../assets/images/sym3.png'
import sym4 from '../../assets/images/sym4.png'
import sym5 from '../../assets/images/sym5.png'
import sym6 from '../../assets/images/sym6.png'
import './Symbol_2.scss'
const Symbol_2 = () => {
  return (
    <div className="symbol2">
      <div className="symbol2__top">
        <div className="symbol2__container">
          <img className="symbol2__container__item" src={sym1} alt="sym1" />
          <div className="symbol2__container__text">
            <h2>Spotlight</h2>
            <h3>하나되는/ 카메라 </h3>
          </div>
        </div>
        <div className="symbol2__container">
          <img
            style={{ width: '14vw' }}
            className="symbol2__container__item"
            src={sym2}
            alt="sym1"
          />
          <div className="symbol2__container__text">
            <h2>Road</h2>
            <h3>나아가는 / 시간표</h3>
          </div>
        </div>
        <div className="symbol2__container">
          <img className="symbol2__container__item" src={sym3} alt="sym1" />
          <div className="symbol2__container__text">
            <h2>Friend</h2>
            <h3>신뢰하는 /5</h3>
          </div>
        </div>
      </div>

      <div className="symbol2__bot">
        <div className="symbol2__container">
          <img className="symbol2__container__item" src={sym4} alt="sym1" />
          <div className="symbol2__container__text">
            <h2>Culture</h2>
            <h3>지역</h3>
          </div>
        </div>
        <div className="symbol2__container">
          <img className="symbol2__container__item" src={sym5} alt="sym1" />
          <div className="symbol2__container__text">
            <h2>News</h2>
            <h3>기업</h3>
          </div>
        </div>
        <div className="symbol2__container">
          <img className="symbol2__container__item" src={sym6} alt="sym1" />
          <div className="symbol2__container__text">
            <h2>Smile</h2>
            <h3>개인</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Symbol_2
