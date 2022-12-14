import React from 'react'
import './CompanyProfile.scss'

const CompanyProfile = () => {
  return (
    <div className="profile">
      <div className="profile__title">
        <h1>Company Profile</h1>
        <h2>기업 소개</h2>
      </div>
      <div className="profile__detail">
        <div className="profile__detail__1">
          <h4>설립</h4>
          <h3>2018년 03월 28</h3>
        </div>
        <div className="profile__detail__1">
          <h4>대표이사</h4>
          <h3>장세훈 감독</h3>
        </div>
        <div className="profile__detail__1">
          <h4>자본금</h4>
          <h3>
            10천만원 <b>(2018월 06월)</b>
          </h3>
        </div>
        <div className="profile__detail__1">
          <h4>임원현황</h4>
          <h3>
            김명순 이사
            <br />
            김정우 이사
            <br />
            이치훈 이사 <br />
            주효석 이사
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
