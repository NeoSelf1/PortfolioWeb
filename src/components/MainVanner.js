import React from 'react'
import './MainVanner.scss'
import video from '../assets/video/background.mp4'
import { Link } from 'react-router-dom'
const MainVanner = () => {
  //prettier-ignore

  return (
    <div className="main__base">
      <video className='background' src={video} autoPlay loop muted/>
      <div className="left">
        <h3 className='text_1'>First Seen</h3>
        <h2 className='text_2'>FIRST SCENE</h2>
        <Link to="/portfolio" className="flat-button">
            작업물 보기
        </Link>
      </div>
    </div>
    
  )
}

export default MainVanner
