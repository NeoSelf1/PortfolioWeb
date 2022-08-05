import React from 'react'
import MainVanner from '../components/MainVanner'
import Loader from 'react-loaders'
const Home = () => {
  return (
    <>
      <MainVanner />
      <Loader type="pacman" />
    </>
  )
}

export default Home
