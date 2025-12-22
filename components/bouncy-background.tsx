"use client"

import { useEffect, useState } from "react"

type EmojiItem = {
  id: number
  emoji: string
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

const EMOJIS = ["🍫", "✨", "🎀", "🎉", "🍬", "⭐", "💖"]
const COUNT = 32

export default function BouncyBackground() {
  const [items, setItems] = useState<EmojiItem[]>([])

  useEffect(() => {
    setItems(
      Array.from({ length: COUNT }, (_, id) => ({
        id,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 18 + Math.random() * 24,
        delay: Math.random() * 4,
        duration: 8 + Math.random() * 6,
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
      {items.map(({ id, emoji, left, top, size, delay, duration }) => (
        <span
          key={id}
          className="absolute animate-bounce-float opacity-30"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            fontSize: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      <style jsx global>{`
        @keyframes bounce-float {
          0% {
            transform: translateY(0) scale(1);
          }
          25% {
            transform: translateY(-16px) scale(1.08);
          }
          50% {
            transform: translateY(10px) scale(0.96);
          }
          75% {
            transform: translateY(-8px) scale(1.04);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-bounce-float {
          animation: bounce-float ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
