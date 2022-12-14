import React from 'react'
import './Typo_0.scss'
import back from '../../assets/video/typoback.mp4'

const Typo_0 = () => {
  return (
    <div className="typo0">
      <video className="typo0__background" src={back} autoPlay loop muted />
    </div>
  )
}
export default Typo_0
