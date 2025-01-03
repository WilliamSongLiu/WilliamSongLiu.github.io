import { Box } from "@react-three/drei"

export default function Room() {
  return (
    <group>
      {/* Floor */}
      <Box args={[8, 0.1, 8]} position={[0, -0.05, 0]} receiveShadow>
        <meshStandardMaterial color="#FFD7BA" /> {/* Warmer beige floor */}
      </Box>
      {/* Back Wall */}
      <Box args={[8, 4, 0.1]} position={[0, 2, -4]} receiveShadow>
        <meshStandardMaterial color="#F5F5F5" /> {/* Crisp white wall */}
      </Box>
      {/* Side Wall */}
      <Box args={[0.1, 4, 8]} position={[-4, 2, 0]} receiveShadow>
        <meshStandardMaterial color="#F5F5F5" /> {/* Crisp white wall */}
      </Box>
      {/* Window */}
      <Box args={[3.5, 2.5, 0.1]} position={[0, 2.5, -3.95]} receiveShadow>
        <meshStandardMaterial color="#B4E4FF" opacity={0.4} transparent /> {/* Brighter blue window */}
      </Box>
      {/* Window Frame */}
      <Box args={[3.7, 2.7, 0.2]} position={[0, 2.5, -3.9]} receiveShadow>
        <meshStandardMaterial color="#E8AA7C" /> {/* Warmer wood color */}
      </Box>
      {/* Window Divider Horizontal */}
      <Box args={[3.7, 0.1, 0.2]} position={[0, 2.5, -3.9]} receiveShadow>
        <meshStandardMaterial color="#E8AA7C" />
      </Box>
      {/* Window Divider Vertical */}
      <Box args={[0.1, 2.7, 0.2]} position={[0, 2.5, -3.9]} receiveShadow>
        <meshStandardMaterial color="#E8AA7C" />
      </Box>
    </group>
  )
}