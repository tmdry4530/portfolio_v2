"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleMotionPreferenceChange)
    return () => mediaQuery.removeEventListener("change", handleMotionPreferenceChange)
  }, [])

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Adaptive particle count based on screen size and device capability
    const isMobile = window.innerWidth < 768
    const isLowPower = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false
    const particleCount = isMobile || isLowPower ? 20 : 40

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }

    const particles: Particle[] = []

    // Create particles with varied properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      })
    }

    let animationId: number
    let isVisible = true

    // Pause animation when page is not visible
    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    function animate() {
      if (!ctx || !canvas || !isVisible) {
        animationId = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 255, 153, ${0.03 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 153, ${particle.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      cancelAnimationFrame(animationId)
    }
  }, [prefersReducedMotion])

  // Don't render canvas if reduced motion is preferred
  if (prefersReducedMotion) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
