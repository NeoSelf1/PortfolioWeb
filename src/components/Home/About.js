import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className="about">
      <div className="about__text">
        <div className="about__text__title">
          <h1>First scene</h1>
          <h2>퍼스트씬 협동조합</h2>
        </div>
        <h3>
          퍼스트씬 협동조합 (이하 퍼스트씬)은 클라이언트와 신뢰를 바탕으로 제작
          의도에 맞춘 인상적이고 합리적인 영상을 제작하여 상호 소통을 통해
          성장하고 사업을 추천하여 기업의 상생을 목표로 합니다.
        </h3>
      </div>
      <img
        className="about__img"
        src={`https://file.rendit.io/n/2Mlreu4GlCpsxHDrGmTp.png`}
        alt=""
      />
    </div>
  )
}

export default About
