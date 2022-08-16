import { useState, React, useEffect, useLayoutEffect, useRef } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import './Card.scss'
import { Suspense, Spinner } from 'react'
import * as THREE from 'three'
import logo from '../assets/images/logo.png'
import nameCard from '../assets/models/nameCard.glb'
import { useGLTF, SpotLight, PresentationControls } from '@react-three/drei'

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
        <h1>
          Let me introduce <img src={logo} alt="logo"></img>eoSelf
        </h1>
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
          <h1>기본정보</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subTitle">
              <h2>이름</h2>
              <h2>연락처</h2>
              <h2>생년월일</h2>
              <h2>주소</h2>
            </div>
            <div className="subText mgL">
              <h3>김형석</h3>
              <h3>010.5595.1105</h3>
              <h3>1999.11.05</h3>
              <h3>경기도 고양시 일산</h3>
            </div>
          </div>
        </div>
        <div className="area">
          <h1>학력</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subText mgS">
              <h2 className="present">현</h2>
              <h3>홍익대학교</h3>
              <h3 className="majors">디자인컨버전스 학부 & 컴퓨터 공학</h3>
              <h3>동두천 외국어 고등학교</h3>
              <h3>Nanjing International School</h3>
            </div>
            <div className="subText flexEnd mgM">
              <h3>졸업예정</h3>
              <h3>졸업</h3>
              <h3>졸업</h3>
            </div>
          </div>
        </div>
        <div className="area">
          <h1>ETC.</h1>
          <div className="line"></div>
          <div className="text-zone">
            <div className="subTitle">
              <h2>취미</h2>
              <h2>좋아하는 것</h2>
              <h2>단점</h2>
              <h2>MBTI</h2>
            </div>
            <div className="subText mgL">
              <h3>피아노 연주</h3>
              <h3>비빔면, 콜라</h3>
              <h3>타인 공감능력</h3>
              <div>
                <h3>ENTJ </h3>
                <h4 className="abs">가 되고 싶은 INTJ</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
