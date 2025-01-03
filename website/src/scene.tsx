"use client"

import { Canvas } from "@react-three/fiber"
import { OrthographicCamera, OrbitControls } from "@react-three/drei"
import Room from "./room"
import Desk from "./desk"
import Bookshelf from "./bookshelf"

export default function Scene() {
  return (
    <Canvas shadows style={{ width: '100%', height: '100%' }}>
      <OrthographicCamera makeDefault position={[15, 10, 15]} zoom={40} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
      />
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 12, 10]} castShadow intensity={1} />
      <color attach="background" args={['#e0f7ff']} />
      <Room />
      <Desk />
      <Bookshelf />
    </Canvas>
  )
}