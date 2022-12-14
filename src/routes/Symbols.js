import React from 'react'
import Symbol_0 from '../components/Symbols/Symbol_0'
import Symbol_1 from '../components/Symbols/Symbol_1'
import Symbol_2 from '../components/Symbols/Symbol_2'
import grid from '../assets/images/gridline.png'
import Footer from '../components/Footer/Footer'
import Symbol_3 from '../components/Symbols/Symbol_3'
const Symbols = () => {
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
      <Symbol_0 />
      <Symbol_1 />
      <Symbol_2 />
      <Symbol_3 />
      <Footer />
    </>
  )
}
export default Symbols
