import { useState, React, useEffect, useLayoutEffect, useRef } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import './Card.scss'
import { Suspense, Spinner } from 'react'
import * as THREE from 'three'
import nameCard from '../assets/models/nameCard.glb'
import { useGLTF, SpotLight, PresentationControls } from '@react-three/drei'

function Model(props) {
  const { scene, nodes, materials } = useGLTF(nameCard)
  return <primitive object={scene} {...props} />
}
const Card = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  // const [clientSize, setClientSize] = useState(0)
  // const ref = useRef(null)
  // useEffect(() => {
  //   setClientSize(ref.current.clientHeight)
  // }, [])

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    })
  }
  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <Suspense fallback={null}>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 1 }}>
          {/* <color attach="background" args={['#0A402']} /> */}
          <PresentationControls
            speed={1.5}
            rotation={[coords.y / 100 - 1.1, 3.14, -coords.x / 300]}
            global
            snap={true}
            zoom={0.8}
            // polar={[0, Math.PI / 2]}
            // azimuth={[0.00001, -0.0001]}
            // config={{ mass: 1, tension: 170, friction: 26 }}
          >
            <ambientLight />
            <Model scale={0.00005} /> <planeGeometry args={[0, 0]} />
            <pointLight position={[10, 10, 10]} shadows />
          </PresentationControls>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Card
