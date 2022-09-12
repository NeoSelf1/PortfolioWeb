import React, { useState, useEffect } from 'react'
// import History from '../components/History'
import Portfolio from '../components/Portfolio'
import Loader from '../components/Loader'
import { Center } from '@react-three/drei'
const Timeline = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <Loader />
      {size.width > 800 ? (
        <Portfolio />
      ) : (
        <h1
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            fontSize: '2rem',
            lineHeight: '50vh',
            textAlign: 'center',
            // transform: 'translateY(-50%)',
            fontFamily: 'M',
            backgroundColor: '#0b402c',
            color: '#ffffff',
          }}
        >
          이 페이지는 큰 화면에서만 보실 수 있어요!
        </h1>
      )}
    </>
  )
}

export default Timeline
