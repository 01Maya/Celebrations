"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  type: "star" | "circle" | "square"
  color: string
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 4 + Math.random() * 6,
      type: ["star", "circle", "square"][Math.floor(Math.random() * 3)] as "star" | "circle" | "square",
      color: ["#FFB800", "#FF69B4", "#0055D4", "#FFF5E6"][Math.floor(Math.random() * 4)],
    }))
    setParticles(newParticles)
  }, [])

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      position: "fixed" as const,
      left: `${particle.left}%`,
      top: "-20px",
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      backgroundColor: particle.color,
      borderRadius: particle.type === "circle" ? "50%" : particle.type === "star" ? "0%" : "20%",
      opacity: 0.6,
      pointerEvents: "none" as const,
      animation: `confetti-fall ${particle.duration}s linear ${particle.delay}s infinite`,
      zIndex: 1,
    }

    return <div key={particle.id} style={baseStyle} />
  }

  return <div className="fixed inset-0 pointer-events-none overflow-hidden">{particles.map(renderParticle)}</div>
}
