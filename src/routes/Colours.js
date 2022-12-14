import React from 'react'
import Colours_0 from '../components/Colours/Colours_0'
import Colours_1 from '../components/Colours/Colours_1'
import Colours_2 from '../components/Colours/Colours_2'

import grid from '../assets/images/gridline.png'
import Footer from '../components/Footer/Footer'
const Colours = () => {
  return (
    <>
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
      <Colours_0 />
      <Colours_1 />
      <Colours_2 />
      <Footer />
    </>
  )
}

export default Colours
