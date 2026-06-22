import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const shapes = [
  { size: 120, x: '8%', y: '15%', className: 'bg-brand/10 rounded-full', duration: 14, drift: 25 },
  { size: 50, x: '80%', y: '25%', className: 'bg-accent/10 rotate-45', duration: 11, drift: 18 },
  { size: 30, x: '70%', y: '12%', className: 'bg-brand/15 rounded-full', duration: 8, drift: 12 },
  { size: 70, x: '15%', y: '65%', className: 'bg-accent/8', duration: 13, drift: 20 },
  { size: 40, x: '55%', y: '50%', className: 'bg-brand/12 rotate-45', duration: 9, drift: 15 },
  { size: 80, x: '75%', y: '70%', className: 'bg-accent/8 rounded-full', duration: 15, drift: 22 },
  { size: 25, x: '45%', y: '10%', className: 'bg-brand/20', duration: 7, drift: 10 },
  { size: 90, x: '35%', y: '75%', className: 'bg-brand/6 rotate-45', duration: 16, drift: 28 },
]

export default function FloatingShapes() {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.className}`}
          style={{ width: s.size, height: s.size, left: s.x, top: s.y }}
          animate={{ y: [0, -s.drift, 0] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
        />
      ))}
    </div>
  )
}
