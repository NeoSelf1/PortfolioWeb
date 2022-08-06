import React from 'react'
import Introducing from '../components/Introducing'
import Loader from 'react-loaders'
const About = () => {
  return (
    <div>
      <Introducing />

      <Loader type="pacman" />
    </div>
  )
}

export default About
