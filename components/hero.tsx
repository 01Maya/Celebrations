"use client"

import { useEffect, useRef, useState } from "react"
import Confetti from "react-confetti"
import Image from "next/image"

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showConfetti, setShowConfetti] = useState(false)
  const [confettiDimensions, setConfettiDimensions] = useState({ width: 0, height: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const celebrationColors = [
    "#FF4444", // C - Bright Red
    "#FFD700", // E - Bright Gold
    "#0066FF", // L - Bright Blue
    "#FF4444", // E - Bright Red
    "#FF6600", // B - Bright Orange
    "#FFD700", // R - Bright Gold
    "#FFEB3B", // A - Bright Yellow
    "#00DD66", // T - Bright Green
    "#9933FF", // I - Bright Purple
    "#FF4444", // O - Bright Red
    "#FF9900", // N - Bright Orange
    "#FFD700", // S - Bright Gold
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    setConfettiDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleExploreClick = () => {
    const gallerySection = document.getElementById("chocolates")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const chocolatePositions = [
    { x: -18, y: -22, delay: 0.2, image: "/images/snickers.png" },
    { x: 18, y: -28, delay: 0.4, image: "/images/twix.png" },
    { x: -25, y: 8, delay: 0.6, image: "/images/bounty.png" },
    { x: 25, y: 12, delay: 0.8, image: "/images/mars.png" },
    { x: -12, y: 28, delay: 1, image: "/images/galaxy.png" },
    { x: 15, y: 32, delay: 1.2, image: "/images/maltesers.png" },
    { x: -32, y: 2, delay: 1.4, image: "/images/galaxy-caramel.png" },
    { x: 28, y: -8, delay: 1.6, image: "/images/milkyway.png" },
  ]

  return (
    <div
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-br from-[#E73A3A] via-[#F15555] to-[#E73A3A] overflow-hidden flex items-center justify-center pt-16 sm:pt-20 px-4"
    >
      {showConfetti && confettiDimensions.width > 0 && (
        <Confetti
          width={confettiDimensions.width}
          height={confettiDimensions.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.3}
        />
      )}

      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-60 sm:h-60 bg-white rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-64 h-64 sm:w-80 sm:h-80 bg-yellow-200 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-blue-300 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-pink-200 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              backgroundColor: ["rgba(255,255,255,0.6)", "rgba(255,184,0,0.5)", "rgba(255,105,180,0.5)"][
                Math.floor(Math.random() * 3)
              ],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {chocolatePositions.map((pos, idx) => (
          <div
            key={idx}
            className="absolute animate-chocolate-bounce hidden sm:block"
            style={{
              right: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${pos.delay}s`,
            }}
          >
            <div className="w-14 h-18 sm:w-16 sm:h-20 md:w-20 md:h-28 relative opacity-90 hover:opacity-100 transition-opacity transform hover:scale-110 duration-300">
              <Image src={pos.image || "/placeholder.svg"} alt="Chocolate" fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center flex-wrap gap-0.5 sm:gap-1 mb-4">
            {["C", "E", "L", "E", "B", "R", "A", "T", "I", "O", "N", "S"].map((letter, index) => (
              <span
                key={index}
                style={{
                  color: celebrationColors[index],
                  textShadow: `
                    0 4px 12px rgba(0,0,0,0.3),
                    0 0 15px ${celebrationColors[index]}60
                  `,
                  transform: `perspective(1200px) rotateX(${mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg)`,
                  transition: "transform 0.15s ease-out",
                  animation: "bounce-gentle 3s ease-in-out infinite",
                  animationDelay: `${index * 0.1}s`,
                  filter: "brightness(1.2) saturate(1.3)",
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black drop-shadow-2xl tracking-widest inline-block"
              >
                {letter}
              </span>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 h-1 sm:h-2 w-40 sm:w-56 bg-gradient-to-r from-yellow-300 via-blue-400 via-pink-300 to-orange-300 mx-auto rounded-full shadow-2xl animate-pulse" />
        </div>

        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light mb-8 sm:mb-12 tracking-wide text-balance drop-shadow-md"
          style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
        >
          Celebrate Every Moment
        </p>

        <button
          onClick={handleExploreClick}
          className="relative px-8 sm:px-12 py-3 sm:py-4 bg-white text-[#E73A3A] font-bold text-base sm:text-lg md:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 active:scale-95 border-2 border-yellow-200 inline-block"
          style={{ animation: "scale-up 0.8s ease-out 0.5s both" }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Explore Flavours
            <span className="text-lg sm:text-xl animate-bounce">✨</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full opacity-0 hover:opacity-30 transition-opacity" />
        </button>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex items-start justify-center pt-1 sm:pt-2">
            <div className="w-0.5 sm:w-1 h-1 sm:h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  )
}
