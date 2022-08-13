import React from 'react'
import './Introducing.scss'
import logo from '../assets/images/logo.png'

const Introducing = () => {
  return (
    <div className="base">
      <h1>
        Let me introduce <img src={logo} alt="logo"></img>eoSelf
      </h1>
      <div className="content">
        <div className="area">
          <h1>기본정보</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subTitle">
              <h2>이름</h2>
              <h2>연락처</h2>
              <h2>생년월일</h2>
              <h2>주소</h2>
            </div>
            <div className="subText mgL">
              <h3>김형석</h3>
              <h3>010.5595.1105</h3>
              <h3>1999.11.05</h3>
              <h3>경기도 고양시 일산</h3>
            </div>
          </div>
        </div>
        <div className="area">
          <h1>학력</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subText mgS">
              <h2 className="present">현</h2>
              <h3>홍익대학교</h3>
              <h3 className="majors">디자인컨버전스 학부 & 컴퓨터 공학</h3>
              <h3>동두천 외국어 고등학교</h3>
              <h3>Nanjing International School</h3>
            </div>
            <div className="subText flexEnd mgM">
              <h3>졸업예정</h3>
              <h3>졸업</h3>
              <h3>졸업</h3>
            </div>
          </div>
        </div>
        <div className="area">
          <h1>ETC.</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subTitle">
              <h2>취미</h2>
              <h2>좋아하는 것</h2>
              <h2>단점</h2>
              <h2>MBTI</h2>
            </div>
            <div className="subText mgL">
              <h3>피아노 연주</h3>
              <h3>비빔면, 콜라</h3>
              <h3>타인 공감능력</h3>
              <div>
                <h3>ENTJ </h3>
                <h3 className="abs">가 되고 싶은 INTJ</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introducing
