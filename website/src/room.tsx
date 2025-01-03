import { Box } from "@react-three/drei"

export default function Room() {
  return (
    <group>
      {/* Floor */}
      <Box args={[10, 0.1, 10]} position={[0, -0.05, 0]} receiveShadow>
        <meshStandardMaterial color="#FFE5CC" /> {/* Warm beige floor */}
      </Box>
      {/* Back Wall */}
      <Box args={[10, 5, 0.1]} position={[0, 2.5, -5]} receiveShadow>
        <meshStandardMaterial color="#E8E6E3" /> {/* Light gray wall */}
      </Box>
      {/* Side Wall */}
      <Box args={[0.1, 5, 10]} position={[-5, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#E8E6E3" /> {/* Light gray wall */}
      </Box>
      {/* Window */}
      <Box args={[4, 3, 0.1]} position={[0, 3, -4.95]} receiveShadow>
        <meshStandardMaterial color="#87CEEB" opacity={0.3} transparent /> {/* Light blue window */}
      </Box>
      {/* Window Frame */}
      <Box args={[4.2, 3.2, 0.2]} position={[0, 3, -4.9]} receiveShadow>
        <meshStandardMaterial color="#D4B08C" /> {/* Wooden frame color */}
      </Box>
      {/* Window Divider Horizontal */}
      <Box args={[4.2, 0.1, 0.2]} position={[0, 3, -4.9]} receiveShadow>
        <meshStandardMaterial color="#D4B08C" />
      </Box>
      {/* Window Divider Vertical */}
      <Box args={[0.1, 3.2, 0.2]} position={[0, 3, -4.9]} receiveShadow>
        <meshStandardMaterial color="#D4B08C" />
      </Box>
    </group>
  )
}