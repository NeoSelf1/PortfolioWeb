import React from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import './Card.scss'
import { Suspense, Spinner } from 'react'
import * as THREE from 'three'
import {
  useGLTF,
  MeshReflectorMaterial,
  Environment,
  Stage,
  PresentationControls,
} from '@react-three/drei'
function Model(props) {
  const { scene, nodes, materials } = useGLTF('../assets/models/nameCard.gltf')
  return <primitive object={scene} {...props} />
}
const card = () => {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach="background" args={['#101010']} />
      <fog attach="fog" args={['#101010', 10, 20]} />
      <Suspense fallback={<Spinner />}>
        {/* <Environment path="/cube"/> */}
        <PresentationControls
          speed={1.5}
          global
          zoom={0.7}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage
            environment={null}
            intensity={1}
            contactShadow={false}
            shadowBias={-0.0015}
          >
            <Model scale={1} />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
          </mesh>
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}

export default card
