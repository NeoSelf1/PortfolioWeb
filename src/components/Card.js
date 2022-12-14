import { useState, React, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import './Card.scss'
import { Suspense } from 'react'
import logo from '../assets/images/logo.png'
import nameCard from '../assets/models/nameCard.glb'
import { useGLTF, PresentationControls } from '@react-three/drei'

function Model(props) {
  const { scene, nodes, materials } = useGLTF(nameCard)
  return <primitive object={scene} {...props} />
}
const Card = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
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
  const handleMouseMove = (event) => {
    setCoords({
      width: event.clientX,
      height: event.clientY,
    })
  }
  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="title">
        {size.width > 1000 ? (
          <h1>
            Let
            <br />
            Me <br />
            Introduce
            <br /> <img src={logo} alt="logo"></img>&nbsp;&nbsp; eoSelf
          </h1>
        ) : (
          <h1>Let me introduce Neoself</h1>
        )}
      </div>
      <div className="card">
        <Suspense fallback={null}>
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 1 }}>
            <pointLight position={[1, 1, 1]} intensity={4} />
            <hemisphereLight
              color="#0b402c"
              groundColor="#b9b9b9"
              position={[-0, 1, 1]}
              intensity={1}
            />
            {/* <color attach="background" args={['#0A402']} /> */}
            <PresentationControls
              speed={1.5}
              // rotation={[1, 1, -0.4]}
              // rotation={[coords.y / 100 - 1.1, 3.14, -coords.x / w]}
              rotation={[
                coords.height / (size.height / 3) + 3.14,
                3.14,
                -coords.width / (size.width / 4) - 0.1,
              ]}
              global
              snap={true}
              zoom={0.8}
            >
              <Model scale={0.00005} />
            </PresentationControls>
          </Canvas>
        </Suspense>
      </div>
      <div className="introduce">
        <div className="area">
          <h1>????????????</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subTitle">
              <h2>??????</h2>
              <h2>?????????</h2>
              <h2>????????????</h2>
              <h2>??????</h2>
            </div>
            <div className="subText">
              <h3>?????????</h3>
              <h3>010.5595.1105</h3>
              <h3>1999.11.05</h3>
              <h3>????????? ????????? ??????</h3>
            </div>
          </div>
        </div>
        <div className="area">
          <h1>??????</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="School mgS">
              <h2 className="present">???</h2>
              <h3>???????????????</h3>
              <h3 className="majors">????????????????????? ?????? & ????????? ??????</h3>
              <h3>????????? ????????? ????????????</h3>
              <h3>
                <b>Nanjing International School</b>
              </h3>
            </div>
            <div className="subText gray">
              <h3>
                <a>????????????</a>
              </h3>
              <h3>
                <a>??????</a>
              </h3>
              <h3>
                <a>??????</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="area">
          <h1>ETC.</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subTitle">
              <h2>??????</h2>
              <h2>???????????? ???</h2>
              <h2>??????</h2>
              <h2>MBTI</h2>
            </div>
            <div className="subText">
              <h3>????????? ??????</h3>
              <h3>?????????, ??????</h3>
              <h3>?????? ????????????</h3>
              <div>
                <h3>
                  ENTJ <b>??? ?????? ?????? INTJ</b>{' '}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
