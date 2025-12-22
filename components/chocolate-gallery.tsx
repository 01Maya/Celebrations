"use client"

import { useState } from "react"

interface Chocolate {
  id: number
  name: string
  wrapper: string
  flavor: string
  texture: string
  fun_fact: string
  sweetness: string
  perfect_for: string
  color: string
  emoji: string
}

const chocolates: Chocolate[] = [
  {
    id: 1,
    name: "Snickers",
    wrapper: "Blue & Gold",
    flavor: "Peanut, Caramel & Nougat",
    texture: "Crunchy & Chewy",
    fun_fact: "Named after a horse!",
    sweetness: "7/10",
    perfect_for: "Peanut lovers",
    color: "#0055D4",
    emoji: "🥜",
  },
  {
    id: 2,
    name: "Twix",
    wrapper: "Orange & Brown",
    flavor: "Caramel & Chocolate",
    texture: "Crispy & Creamy",
    fun_fact: "Twin bars since creation!",
    sweetness: "8/10",
    perfect_for: "Caramel enthusiasts",
    color: "#FF6B35",
    emoji: "🍮",
  },
  {
    id: 3,
    name: "Mars",
    wrapper: "Red & Gold",
    flavor: "Nougat & Caramel",
    texture: "Smooth & Airy",
    fun_fact: "Discovered by mistake!",
    sweetness: "8/10",
    perfect_for: "Nougat lovers",
    color: "#8B0000",
    emoji: "☁️",
  },
  {
    id: 4,
    name: "Milky Way",
    wrapper: "Blue & White",
    flavor: "Malt & Chocolate",
    texture: "Light & Fluffy",
    fun_fact: "Named after a galaxy!",
    sweetness: "8/10",
    perfect_for: "Malt fans",
    color: "#4169E1",
    emoji: "🌌",
  },
  {
    id: 5,
    name: "Galaxy",
    wrapper: "Purple & Silver",
    flavor: "Smooth Chocolate",
    texture: "Melts in mouth",
    fun_fact: "Galaxy dissolves on the tongue!",
    sweetness: "7/10",
    perfect_for: "Chocolate purists",
    color: "#663399",
    emoji: "🍫",
  },
  {
    id: 6,
    name: "Bounty",
    wrapper: "Blue & Brown",
    flavor: "Coconut & Chocolate",
    texture: "Coconutty Bliss",
    fun_fact: "Tropical escape in a wrapper!",
    sweetness: "7/10",
    perfect_for: "Coconut lovers",
    color: "#1E90FF",
    emoji: "🥥",
  },
  {
    id: 7,
    name: "Maltesers",
    wrapper: "Red & Gold",
    flavor: "Malt & Chocolate",
    texture: "Light & Crispy",
    fun_fact: "Light enough to float!",
    sweetness: "6/10",
    perfect_for: "Light snacking",
    color: "#C41E3A",
    emoji: "⭕",
  },
  {
    id: 8,
    name: "M&M's",
    wrapper: "Colorful",
    flavor: "Milk Chocolate",
    texture: "Hard Shell",
    fun_fact: "Melts in your mouth, not in your hand!",
    sweetness: "8/10",
    perfect_for: "Sharing moments",
    color: "#FF4500",
    emoji: "🎨",
  },
]

export default function ChocolateGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [unwrapped, setUnwrapped] = useState<number | null>(null)

  const selected = chocolates.find((c) => c.id === selectedId)
  const isUnwrapped = unwrapped === selectedId

  return (
    <section
      id="chocolate-gallery"
      className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF9F0] to-[#FFE8D6]"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A2511] mb-4 text-balance leading-tight">
            Meet the Flavours of Happiness
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">Tap, unwrap, and discover the magic inside.</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] mx-auto rounded-full shadow-md" />
        </div>

        {/* Main gallery layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Chocolate grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {chocolates.map((chocolate) => (
                <div
                  key={chocolate.id}
                  onClick={() => {
                    setSelectedId(selectedId === chocolate.id ? null : chocolate.id)
                    setUnwrapped(null)
                  }}
                  className={`relative cursor-pointer transform transition-all duration-300 ${
                    selectedId === chocolate.id
                      ? "scale-110 z-20"
                      : selectedId
                        ? "scale-75 opacity-40"
                        : "hover:scale-110"
                  }`}
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                    <div
                      className="w-full h-full flex items-center justify-center text-5xl font-bold text-white"
                      style={{ backgroundColor: chocolate.color }}
                    >
                      {chocolate.emoji}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-white font-bold text-sm text-center w-full">{chocolate.name}</p>
                    </div>
                  </div>

                  {selectedId === chocolate.id && (
                    <div className="absolute -inset-2 border-4 border-[#E73A3A] rounded-xl animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Details panel */}
          {selected && (
            <div className="flex-1 lg:sticky lg:top-20 lg:h-fit">
              <div
                className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-[#FFB800] border-opacity-30 transition-all duration-500"
                style={{ animation: "scale-up 0.5s ease-out" }}
              >
                <button
                  onClick={() => {
                    setSelectedId(null)
                    setUnwrapped(null)
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                >
                  ✕
                </button>

                {!isUnwrapped ? (
                  <>
                    <div className="mb-8 flex justify-center">
                      <div
                        className="w-40 h-40 rounded-lg shadow-xl animate-bounce-gentle flex items-center justify-center text-6xl font-bold text-white"
                        style={{ backgroundColor: selected.color }}
                      >
                        {selected.emoji}
                      </div>
                    </div>

                    <button
                      onClick={() => setUnwrapped(selectedId)}
                      className="w-full bg-gradient-to-r from-[#E73A3A] to-[#FFB800] text-white font-bold py-4 rounded-full hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-lg mb-4"
                    >
                      🎁 Unwrap the Magic
                    </button>

                    <p className="text-center text-gray-600 text-sm">Click to reveal what's inside!</p>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-[#4A2511] mb-2">{selected.name}</h3>
                      <p className="text-[#E73A3A] font-semibold">{selected.wrapper}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-gradient-to-r from-[#FFB800]/10 to-[#E73A3A]/10 rounded-lg border border-[#FFB800]/20">
                        <p className="text-sm text-gray-600 font-semibold">Flavor Profile</p>
                        <p className="text-lg text-[#4A2511] font-bold">{selected.flavor}</p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-[#0055D4]/10 to-[#FFB3D9]/10 rounded-lg border border-[#0055D4]/20">
                        <p className="text-sm text-gray-600 font-semibold">Texture</p>
                        <p className="text-lg text-[#4A2511] font-bold">{selected.texture}</p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-[#FFB3D9]/10 to-[#FFB800]/10 rounded-lg border border-[#FFB3D9]/20">
                        <p className="text-sm text-gray-600 font-semibold">Sweetness Level</p>
                        <p className="text-lg text-[#4A2511] font-bold">{selected.sweetness}</p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-[#E73A3A]/10 to-[#0055D4]/10 rounded-lg border border-[#E73A3A]/20">
                        <p className="text-sm text-gray-600 font-semibold">Fun Fact</p>
                        <p className="text-lg text-[#4A2511] font-bold">✨ {selected.fun_fact}</p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-[#FFB800]/10 to-[#FFB3D9]/10 rounded-lg border border-[#FFB800]/20">
                        <p className="text-sm text-gray-600 font-semibold">Perfect For</p>
                        <p className="text-lg text-[#4A2511] font-bold">{selected.perfect_for}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setUnwrapped(null)}
                      className="w-full border-2 border-[#E73A3A] text-[#E73A3A] font-bold py-3 rounded-full hover:bg-[#E73A3A] hover:text-white transition-all"
                    >
                      Wrap It Back
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
