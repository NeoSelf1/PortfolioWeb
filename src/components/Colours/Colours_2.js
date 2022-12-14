import React from 'react'
import './Colours_2.scss'

const Colours_2 = () => {
  return (
    <div className="colours2">
      <h2>Grey Tones</h2>
      <div className="colours2__container">
        <div className="colours2__container__item">
          <div
            style={{ backgroundColor: '#f8f8f8', border: '1px solid #2c2d2d' }}
            className="colours2__container__item__square"
          ></div>
          <h3>#F8F8F8</h3>
        </div>
        <div className="colours2__container__item">
          <div
            style={{ backgroundColor: '#ABABAB' }}
            className="colours2__container__item__square"
          ></div>
          <h3>#ABABAB</h3>
        </div>
        <div className="colours2__container__item">
          <div
            style={{ backgroundColor: '#787474' }}
            className="colours2__container__item__square"
          ></div>
          <h3>#787474</h3>
        </div>
        <div className="colours2__container__item">
          <div
            style={{ backgroundColor: '#545454' }}
            className="colours2__container__item__square"
          ></div>
          <h3>#545454</h3>
        </div>
      </div>
    </div>
  )
}
export default Colours_2
