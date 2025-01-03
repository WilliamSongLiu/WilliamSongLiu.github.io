import { Box } from "@react-three/drei"
import Monitor from "./monitor"

export default function Desk() {
  return (
    <group position={[0, 0, -2]}>
      {/* Desk */}
      <Box args={[4, 0.1, 2]} position={[0, 1, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#4B3621" />
      </Box>
      {/* Desk Legs */}
      <Box args={[0.1, 1, 0.1]} position={[-1.9, 0.5, -0.9]} castShadow>
        <meshStandardMaterial color="#4B3621" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.9, 0.5, -0.9]} castShadow>
        <meshStandardMaterial color="#4B3621" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[-1.9, 0.5, 0.9]} castShadow>
        <meshStandardMaterial color="#4B3621" />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.9, 0.5, 0.9]} castShadow>
        <meshStandardMaterial color="#4B3621" />
      </Box>
      {/* Monitors */}
      <Monitor position={[-1, 1.6, -0.5]} rotation={[0, Math.PI / 6, 0]} />
      <Monitor position={[1, 1.6, -0.5]} rotation={[0, -Math.PI / 6, 0]} isClickable />
    </group>
  )
}

