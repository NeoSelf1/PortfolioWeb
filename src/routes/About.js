import React from 'react'
import Introducing from '../components/Introducing'
import Loader from 'react-loaders'
import Card from '../components/Card'
const About = () => {
  return (
    <div>
      <Card />
      <Introducing />

      <Loader type="pacman" />
    </div>
  )
}

export default About
