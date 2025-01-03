import { Box } from "@react-three/drei"

export default function Room() {
  return (
    <group>
      {/* Floor */}
      <Box args={[10, 0.1, 10]} position={[0, -0.05, 0]} receiveShadow>
        <meshStandardMaterial color="#FF6B6B" /> {/* Vibrant coral */}
      </Box>
      {/* Back Wall */}
      <Box args={[10, 5, 0.1]} position={[0, 2.5, -5]} receiveShadow>
        <meshStandardMaterial color="#4ECDC4" /> {/* Vibrant teal */}
      </Box>
      {/* Side Wall */}
      <Box args={[0.1, 5, 10]} position={[-5, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#45B7D1" /> {/* Vibrant sky blue */}
      </Box>
      {/* Window */}
      <Box args={[3, 2, 0.1]} position={[0, 3, -4.95]} receiveShadow>
        <meshStandardMaterial color="#C7F464" opacity={0.7} transparent /> {/* Vibrant lime */}
      </Box>
      {/* Window Frame */}
      <Box args={[3.2, 2.2, 0.2]} position={[0, 3, -4.9]} receiveShadow>
        <meshStandardMaterial color="#FFFFFF" />
      </Box>
    </group>
  )
}