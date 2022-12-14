import React from 'react'
import './Leader.scss'
const Leader = () => {
  return (
    <div className="leader">
      <div className="leader__title">
        <h1>The Team</h1>
        <h2>직원 소개</h2>
      </div>
      <div className="leader__container">
        <img
          src={'https://file.rendit.io/n/kULdMz1f7YkhnKSrN4of.png'}
          alt="leader"
        />
        <div className="leader__container__text">
          <div className="leader__container__text__duty">
            <h2>장세훈 감독</h2>
            <h3>대표이사</h3>
          </div>
          <div className="leader__container__text__detail">
            <div className="leader__container__text__detail_1">
              <h2>경력</h2>
              <h4>신문방송 전공, 방송영상 15년 경력, KTV PD, 티브로드 PD 외</h4>
            </div>
            <div className="leader__container__text__detail_1">
              <h2>연락처</h2>
              <h4>010 - 2848 - 9261</h4>
            </div>
            <div className="leader__container__text__detail_1">
              <h2>이메일</h2>
              <h4>nicky2023@naver.com</h4>
            </div>
            <div className="leader__container__text__detail_1">
              <h2>주소</h2>
              <h4>충남 금산군 금산읍 비호산로 57, 2층</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leader
