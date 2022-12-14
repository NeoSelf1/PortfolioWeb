import React from 'react'
import MainVanner from '../components/MainVanner'
import About from '../components/Home/About'
import Loader from '../components/Loader.js'
import Slogan from '../components/Home/Slogan'
import CompanyProfile from '../components/Home/CompanyProfile'
import Team from '../components/Home/Team'
import Footer from '../components/Footer/Footer'
import './Home.scss'
import Thumbnail from '../components/Home/Thumbnail'
import Leader from '../components/Home/Leader'
import grid from '../assets/images/gridline.png'
const Home = () => {
  return (
    <div className="home_base">
      <MainVanner />
      <Thumbnail />
      <About />
      <Slogan />
      <CompanyProfile />
      <Leader />
      <Team />
      <Footer />
      {/* <Loader /> */}
    </div>
  )
}

export default Home
