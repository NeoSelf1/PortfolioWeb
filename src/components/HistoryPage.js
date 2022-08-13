import React from 'react'
import './HistoryPage.scss'
import plus from '../assets/images/plus.png'
import edu from '../assets/images/edu.png'
import trophie from '../assets/images/trophie.png'
const HistoryPage = ({ year, month, categ, detail, title, side, img }) => {
  console.log(categ)
  return (
    <>
      {categ == edu && (
        <div className={`content_${side}`}>
          <div className="line"></div>
          <div className="line_green"></div>
          <img className="categ" src={categ} alt="categ" />
          <div className="second">
            <h1 className="year">{year}</h1>
            <h2 className="month">{month}</h2>
            <a href="#">
              <img src={plus} alt="plus" className="more" />
            </a>
          </div>
          <div className="third">
            <h2 className="title">{title}</h2>
            <h3 className="detail">{detail}</h3>
            <img className="image" src={categ == 'edu' && edu} alt="text" />
          </div>
        </div>
      )}
    </>
  )
}

export default HistoryPage
