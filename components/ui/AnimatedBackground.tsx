'use client'

import { useEffect, useRef } from 'react'

interface Bubble {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubblesRef = useRef<Bubble[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create very subtle bubbles
    const createBubbles = () => {
      const bubbles: Bubble[] = []
      const bubbleCount = Math.min(4, Math.floor((window.innerWidth * window.innerHeight) / 150000))
      
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 120 + 80,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.03 + 0.02, // Extremely subtle
        })
      }
      bubblesRef.current = bubbles
    }
    createBubbles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current.forEach((bubble) => {
        // Update position
        bubble.x += bubble.speedX
        bubble.y += bubble.speedY

        // Wrap around edges
        if (bubble.x < -bubble.size) bubble.x = canvas.width + bubble.size
        if (bubble.x > canvas.width + bubble.size) bubble.x = -bubble.size
        if (bubble.y < -bubble.size) bubble.y = canvas.height + bubble.size
        if (bubble.y > canvas.height + bubble.size) bubble.y = -bubble.size

        // Draw very subtle bubble
        const isDark = document.documentElement.classList.contains('dark')
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        )
        
        if (isDark) {
          gradient.addColorStop(0, `rgba(148, 163, 184, ${bubble.opacity})`)
          gradient.addColorStop(1, `rgba(148, 163, 184, 0)`)
        } else {
          gradient.addColorStop(0, `rgba(203, 213, 225, ${bubble.opacity})`)
          gradient.addColorStop(1, `rgba(203, 213, 225, 0)`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}
