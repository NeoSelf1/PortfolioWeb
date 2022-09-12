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
      {size.width > 1000 ? (
        <Portfolio />
      ) : (
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            width: '100%',
            fontSize: '2rem',
            textAlign: 'center',
            transform: 'translateY(-50%)',
            fontFamily: 'EB',
          }}
        >
          이 페이지는 PC에서만 접속이 가능합니다.
        </h1>
      )}
    </>
  )
}

export default Timeline
