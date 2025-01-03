import { Box } from "@react-three/drei"
import Monitor from "./monitor"

export default function Desk() {
  return (
    <group position={[0, 0, -2]}>
      {/* Desk Top */}
      <Box args={[4, 0.1, 2]} position={[0, 1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>
      {/* Desk Mat */}
      <Box args={[2, 0.02, 1]} position={[0, 1.06, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#4A4A4A" />
      </Box>
      {/* Desk Support */}
      <Box args={[3.8, 0.8, 0.1]} position={[0, 0.5, -0.9]} castShadow>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>
      {/* Monitor */}
      <Monitor position={[0, 1.6, -0.5]} rotation={[0, 0, 0]} />
      {/* Second Monitor */}
      <Monitor position={[1.2, 1.6, -0.5]} rotation={[0, -Math.PI / 12, 0]} isClickable />
    </group>
  )
}

