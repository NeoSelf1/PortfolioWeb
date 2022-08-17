import React from 'react'
import MainVanner from '../components/MainVanner'
import Loader from 'react-loaders'
import frame from '../assets/images/frame_1.png'
const Home = () => {
  return (
    <>
      <div>
        <img
          src={frame}
          style={{ opacity: 0.8, position: 'absolute', top: 0, width: '100vw' }}
          alt="test"
        />
      </div>
      <MainVanner />
      <Loader type="pacman" />
    </>
  )
}

export default Home
