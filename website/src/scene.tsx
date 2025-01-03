"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Room from "./room"
import Desk from "./desk"
import Bookshelf from "./bookshelf"

export default function Scene() {
  return (
    <Canvas shadows style={{ width: '100%', height: '100%' }}>
      <PerspectiveCamera makeDefault position={[8, 8, 8]} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
      />
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} castShadow intensity={0.8} />
      <Room />
      <Desk />
      <Bookshelf />
    </Canvas>
  )
}