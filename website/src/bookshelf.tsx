import { Box } from "@react-three/drei"

export default function Bookshelf() {
  return (
    <group position={[-4.5, 2, 0]}>
      {/* Main Shelf */}
      <Box args={[1, 4, 0.5]} castShadow receiveShadow>
        <meshStandardMaterial color="#8B4513" /> {/* Brown */}
      </Box>
      {/* Shelves */}
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} args={[1, 0.1, 0.5]} position={[0, -1.5 + i, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#D2691E" /> {/* Chocolate */}
        </Box>
      ))}
      {/* Books */}
      {[0, 1, 2, 3].map((shelf) =>
        [...Array(3)].map((_, i) => (
          <Box
            key={`${shelf}-${i}`}
            args={[0.2, 0.7, 0.3]}
            position={[-0.3 + i * 0.25, -1.15 + shelf, 0]}
            castShadow
          >
            <meshStandardMaterial color={`hsl(${Math.random() * 360}, 70%, 50%)`} />
          </Box>
        ))
      )}
    </group>
  )
}