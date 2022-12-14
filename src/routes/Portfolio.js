import React from 'react'
import Loader from '../components/Loader.js'
import Video from '../components/Portfolio/Video.js'
import grid from '../assets/images/gridline.png'

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: '#2c2d2d' }} className="portfolio">
      {/* <img
        style={{
          width: '100%',
          height: '10000vh',
          position: 'absolute',
          left: '0',
          opacity: '40%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        src={grid}
        alt="grid"
      /> */}
      <h1 style={{ margin: 0, padding: '160px 0 80px 9vw', color: '#f8f8f8' }}>
        PORTFOLIO
      </h1>
      <Video
        link="https://www.youtube.com/watch?v=Bn7_aAOY4Jo"
        title="세종시 황실치과"
      />
      <Video
        link="https://www.youtube.com/watch?v=XPvmikpzFNg&t=64s"
        title="대전롯데시티호텔 오픈식"
      />
      <Video
        link="https://www.youtube.com/watch?v=2KrrkGb0slI&t=240s"
        title="청양 관광 홍보 웹 드라마"
      />
      <Video
        link="https://www.youtube.com/watch?v=RW88p_K9124&t=66s"
        title="펨트론 3D 제품홍보영상"
      />
      {/* <Loader /> */}
    </div>
  )
}

export default Portfolio
