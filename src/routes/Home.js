import React from 'react'
import MainVanner from '../components/MainVanner'
import Loader from 'react-loaders'
import frame from '../assets/images/frame_1.png'
const Home = () => {
  return (
    <>
      <MainVanner />
      <Loader type="pacman" />
    </>
  )
}

export default Home
