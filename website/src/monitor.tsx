import { useState, useRef } from "react"
import { Box } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import Popup from "./popup"

interface MonitorProps {
  position: [number, number, number]
  rotation: [number, number, number]
  isClickable?: boolean
}

export default function Monitor({ position, rotation, isClickable = false }: MonitorProps) {
  const [showPopup, setShowPopup] = useState(false)
  const indicatorRef = useRef<Mesh>(null)

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
      <Box args={[1.4, 0.8, 0.05]} castShadow onClick={handleClick}>
        <meshStandardMaterial color="#1A1A1A" />
      </Box>
      {/* Screen Content */}
      <Box args={[1.35, 0.75, 0.01]} position={[0, 0, 0.03]} castShadow onClick={handleClick}>
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.2} />
      </Box>
      {/* Stand Neck */}
      <Box args={[0.08, 0.4, 0.08]} position={[0, -0.4, 0]} castShadow>
        <meshStandardMaterial color="#2A2A2A" />
      </Box>
      {/* Stand Base */}
      <Box args={[0.4, 0.02, 0.25]} position={[0, -0.6, 0]} castShadow>
        <meshStandardMaterial color="#2A2A2A" />
      </Box>
      {isClickable && (
        <mesh ref={indicatorRef} position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial color="#4CAF50" emissive="#4CAF50" emissiveIntensity={0.5} />
        </mesh>
      )}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </group>
  )
}

