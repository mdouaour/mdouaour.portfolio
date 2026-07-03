import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 800
const CONNECTION_DIST = 100
const AUTO_ROTATE_SPEED = 0.0002

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000)
    camera.position.z = 500

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)

    const palette = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#a78bfa'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#22d3ee'),
      new THREE.Color('#3b82f6'),
    ]

    const radius = 400

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius * Math.cbrt(Math.random())

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6)
    let lineCount = 0

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < CONNECTION_DIST) {
          linePositions[lineCount * 6] = positions[i * 3]
          linePositions[lineCount * 6 + 1] = positions[i * 3 + 1]
          linePositions[lineCount * 6 + 2] = positions[i * 3 + 2]
          linePositions[lineCount * 6 + 3] = positions[j * 3]
          linePositions[lineCount * 6 + 4] = positions[j * 3 + 1]
          linePositions[lineCount * 6 + 5] = positions[j * 3 + 2]
          lineCount++
        }
      }
    }

    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions.slice(0, lineCount * 6), 3)
    )

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.02,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)

    let frame: number

    function animate() {
      particles.rotation.x += AUTO_ROTATE_SPEED
      particles.rotation.y += AUTO_ROTATE_SPEED * 1.3
      lines.rotation.x = particles.rotation.x
      lines.rotation.y = particles.rotation.y

      particles.rotation.x += mouse.current.y * 0.0005
      particles.rotation.y += mouse.current.x * 0.0005
      lines.rotation.x = particles.rotation.x
      lines.rotation.y = particles.rotation.y

      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      geometry.dispose()
      material.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
