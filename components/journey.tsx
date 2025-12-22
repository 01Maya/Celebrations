"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineItem {
  id: number
  title: string
  description: string
  icon: string
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Birth of Celebrations",
    description: "The iconic chocolate assortment was created to bring joy and celebration into every home.",
    icon: "🎁",
  },
  {
    id: 2,
    title: "A Festive Favourite",
    description: "Becoming a beloved tradition during festivals and special occasions worldwide.",
    icon: "🎉",
  },
  {
    id: 3,
    title: "Loved Worldwide",
    description: "Spreading happiness across continents, one chocolate at a time.",
    icon: "🌍",
  },
  {
    id: 4,
    title: "Innovation & Joy",
    description: "Continuously evolving while maintaining the magic that made it special.",
    icon: "✨",
  },
]

export default function Journey() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = Number.parseInt(entry.target.getAttribute("data-id") || "0")
            setVisibleItems((prev) => [...prev, itemId])
          }
        })
      },
      { threshold: 0.3 },
    )

    const items = document.querySelectorAll("[data-timeline-item]")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5E6] to-[#FFF9F0]"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-yellow-200 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-100 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite 3s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A2511] mb-4 text-balance leading-tight">
            A Sweet Journey Through Time
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] mx-auto rounded-full shadow-md" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E73A3A] via-[#FFB800] to-[#FFB3D9] transform -translate-x-1/2 shadow-lg" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                data-timeline-item
                data-id={item.id}
                className={`transform transition-all duration-700 ${
                  visibleItems.includes(item.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 md:w-1/2">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FFB800] border-opacity-20 hover:border-opacity-40 hover:scale-105">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#4A2511] mb-3">{item.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot and icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-6 h-6 bg-[#E73A3A] rounded-full border-4 border-white shadow-lg relative z-20" />
                    <div className="mt-6 mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFB800] to-[#E73A3A] p-2 shadow-lg hover:scale-110 transition-transform text-5xl flex items-center justify-center text-white font-bold">
                      {item.icon}
                    </div>
                  </div>

                  <div className="hidden md:block flex-1 md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
