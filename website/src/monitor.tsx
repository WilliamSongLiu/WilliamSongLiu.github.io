import { useState, useRef } from "react"
import { Box, Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Popup from "./popup"

interface MonitorProps {
  position: [number, number, number]
  rotation: [number, number, number]
  isClickable?: boolean
}

export default function Monitor({ position, rotation, isClickable = false }: MonitorProps) {
  const [showPopup, setShowPopup] = useState(false)
  const indicatorRef = useRef<THREE.Mesh>(null)

  const handleClick = () => {
    if (isClickable) {
      setShowPopup(!showPopup)
    }
  }

  useFrame((state) => {
    if (indicatorRef.current) {
      indicatorRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 0.45
    }
  })

  return (
    <group position={position} rotation={rotation}>
      {/* Screen */}
      <Box args={[1.2, 0.7, 0.05]} castShadow onClick={handleClick}>
        <meshStandardMaterial color={isClickable ? "#4169E1" : "#000000"} />
      </Box>
      {/* Stand */}
      <Box args={[0.05, 0.5, 0.05]} position={[0, -0.3, 0]} castShadow>
        <meshStandardMaterial color="#A9A9A9" />
      </Box>
      {/* Base */}
      <Box args={[0.3, 0.05, 0.2]} position={[0, -0.55, 0]} castShadow>
        <meshStandardMaterial color="#A9A9A9" />
      </Box>
      {isClickable && (
        <mesh ref={indicatorRef} position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.05, 32, 32]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
        </mesh>
      )}
      {isClickable && (
        <Html center position={[0, 0.6, 0]}>
          <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold">
            Click me!
          </div>
        </Html>
      )}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </group>
  )
}

