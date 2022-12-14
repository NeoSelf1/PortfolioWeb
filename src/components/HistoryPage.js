import React from 'react'
import './HistoryPage.scss'
import plus from '../assets/images/plus.png'
const HistoryPage = ({
  year,
  month,
  categ,
  detail,
  title,
  side,
  img,
  link,
}) => {
  return (
    <div className={`content_${side}`}>
      <div className="line"></div>
      <div className="line_green"></div>
      <img className="categ" src={categ} alt="categ" />
      <div className="second">
        <h1 className="year">{year}</h1>
        <h2 className="month">{month}</h2>
        {link && (
          <a href={link}>
            <img src={plus} alt="plus" className="more" />
          </a>
        )}
      </div>
      <div className="third">
        <h2 className="title">{title}</h2>
        <p className="detail">{detail}</p>
        {img && <img className="image" src={img} alt="text" />}
      </div>
    </div>
  )
}

export default HistoryPage
