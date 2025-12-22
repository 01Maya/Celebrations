"use client"

import { useState } from "react"

interface Surprise {
  id: number
  title: string
  emoji: string
  description: string
}

const surprises: Surprise[] = [
  {
    id: 1,
    title: "Sweet Facts",
    emoji: "📚",
    description: "Did you know? Celebrations chocolates have been bringing joy for generations!",
  },
  {
    id: 2,
    title: "Flavor Quest",
    emoji: "🎯",
    description: "Test your chocolate knowledge and discover your perfect match!",
  },
  {
    id: 3,
    title: "Celebration Ideas",
    emoji: "🎊",
    description: "Get creative ideas on how to celebrate with your loved ones.",
  },
  {
    id: 4,
    title: "Mystery Box",
    emoji: "🎁",
    description: "Explore unlimited combinations of flavors and create your own magic.",
  },
]

export default function SurprisesSection() {
  const [openedBoxes, setOpenedBoxes] = useState<number[]>([])

  const toggleBox = (id: number) => {
    setOpenedBoxes((prev) => (prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]))
  }

  return (
    <section className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFE8D6] to-[#FFF9F0] overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A2511] mb-4 text-balance leading-tight">
            A Box Full of Surprises
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">Explore, discover, and celebrate the magic</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] mx-auto rounded-full mt-4 shadow-md" />
        </div>

        {/* Surprise boxes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {surprises.map((surprise) => (
            <div
              key={surprise.id}
              className="relative group h-64 cursor-pointer perspective"
              onClick={() => toggleBox(surprise.id)}
            >
              <div
                className="relative w-full h-full rounded-2xl transition-all duration-500 transform-gpu"
                style={{
                  transform: openedBoxes.includes(surprise.id) ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Box front */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#FFB800] via-[#FFB800] to-[#FFA500] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-6xl animate-bounce-gentle">{surprise.emoji}</div>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
                  <p className="text-center text-white font-bold text-sm">Click to reveal</p>
                </div>

                {/* Box inside - content */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#E73A3A] to-[#CC2F2F] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center gap-4"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="text-5xl">{surprise.emoji}</div>
                  <h3 className="text-xl font-bold text-white text-center">{surprise.title}</h3>
                  <p className="text-white text-sm text-center leading-relaxed">{surprise.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun fact section */}
        <div className="mt-20 bg-gradient-to-r from-[#E73A3A]/10 to-[#FFB800]/10 rounded-3xl p-8 md:p-12 border-2 border-[#FFB800] border-opacity-30 hover:border-opacity-50 transition-all">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="text-7xl">💡</div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#4A2511] mb-3">Did You Know?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Celebrations chocolates are loved by over 400 million people worldwide, and a new box is opened
                somewhere in the world every 3 seconds! Each assortment is carefully crafted to bring joy, laughter, and
                sweet memories to your celebrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
