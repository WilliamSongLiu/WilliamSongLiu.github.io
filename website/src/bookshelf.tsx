import { Box } from "@react-three/drei"

export default function Bookshelf() {
  return (
    <group position={[-4.5, 2, -4.5]}>
      {/* Shelves */}
      {[0, 1, 2].map((i) => (
        <group key={i} position={[0, i * 1.2, 0]}>
          {/* Shelf */}
          <Box args={[2, 0.05, 0.6]} castShadow receiveShadow>
            <meshStandardMaterial color="#FFFFFF" />
          </Box>
          {/* Shelf Support */}
          <Box args={[0.1, 0.4, 0.6]} position={[0.9, -0.2, 0]} castShadow>
            <meshStandardMaterial color="#FFFFFF" />
          </Box>
          {/* Books */}
          {[...Array(4)].map((_, j) => (
            <Box
              key={j}
              args={[0.15, 0.6, 0.4]}
              position={[-0.8 + j * 0.2, 0.3, 0]}
              castShadow
            >
              <meshStandardMaterial color={`hsl(${(i * 40 + j * 30) % 360}, 70%, 80%)`} />
            </Box>
          ))}
          {/* JS Book */}
          {i === 2 && (
            <Box args={[0.2, 0.5, 0.35]} position={[0.2, 0.25, 0]} castShadow>
              <meshStandardMaterial color="#F7DF1E" /> {/* JavaScript Yellow */}
            </Box>
          )}
        </group>
      ))}
    </group>
  )
}