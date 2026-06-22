import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../hooks/useReducedMotion'

function TorusKnotShape() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12
      ref.current.rotation.y += delta * 0.18
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.8, 0.6, 128, 16]} />
        <meshPhysicalMaterial
          color="#6B705B"
          transparent
          opacity={0.12}
          roughness={0.3}
          metalness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1.8, 0.6, 128, 16]} />
        <meshBasicMaterial
          color="#C9A96E"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 40
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#C9A96E"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeBackground() {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.4} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#C9A96E" />
        <TorusKnotShape />
        <Particles />
      </Canvas>
    </div>
  )
}
