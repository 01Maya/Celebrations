"use client"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface Chocolate {
  id: number
  name: string
  primaryColor: string
  accentColor: string
  bgGradient: string
  cardBg: string
  image: string
  unwrappedImage: string
  flavor: string
  texture: string
  sweetness: number
  perfectFor: string
  funFact: string
  titleColor: string
}

const chocolates: Chocolate[] = [
  {
    id: 1,
    name: "Snickers",
    primaryColor: "#0055d4",
    accentColor: "#FFB800",
    bgGradient: "from-blue-100 via-blue-50 to-cream-100",
    cardBg: "from-blue-500 via-blue-600 to-blue-700",
    image: "/images/snickers.png",
    unwrappedImage: "/images/snickers-removebg-preview.png",
    flavor: "Peanuts & Caramel",
    texture: "Crunchy with smooth caramel",
    sweetness: 7,
    perfectFor: "Hunger satisfaction",
    funFact: "The best-selling chocolate bar worldwide!",
    titleColor: "#0055d4",
  },
  {
    id: 2,
    name: "Twix",
    primaryColor: "#FFB800",
    accentColor: "#FF8C00",
    bgGradient: "from-amber-100 via-yellow-50 to-cream-100",
    cardBg: "from-amber-500 via-amber-600 to-orange-700",
    image: "/images/twix.png",
    unwrappedImage: "/images/twix-removebg-preview.png",
    flavor: "Caramel & Chocolate",
    texture: "Crispy biscuit with liquid caramel",
    sweetness: 8,
    perfectFor: "Caramel lovers",
    funFact: "Twix means 'two sticks' - perfect for sharing!",
    titleColor: "#FFB800",
  },
  {
    id: 3,
    name: "Mars",
    primaryColor: "#8B0000",
    accentColor: "#DC143C",
    bgGradient: "from-red-100 via-rose-50 to-cream-100",
    cardBg: "from-red-600 via-red-700 to-red-800",
    image: "/images/mars.png",
    unwrappedImage: "/images/mars-removebg-preview.png",
    flavor: "Nougat & Caramel",
    texture: "Light fluffy nougat with smooth caramel",
    sweetness: 8,
    perfectFor: "Energy boost",
    funFact: "Mars has been a favorite since 1932!",
    titleColor: "#8B0000",
  },
  {
    id: 4,
    name: "Milky Way",
    primaryColor: "#654321",
    accentColor: "#8B4513",
    bgGradient: "from-orange-100 via-amber-50 to-cream-100",
    cardBg: "from-orange-500 via-orange-600 to-orange-700",
    image: "/images/milkyway.png",
    unwrappedImage: "/images/milky-way-removebg-preview.png",
    flavor: "Smooth Nougat",
    texture: "Airy and light nougat",
    sweetness: 7,
    perfectFor: "Light cravings",
    funFact: "The lightest chocolate in the Celebrations range!",
    titleColor: "#654321",
  },
  {
    id: 5,
    name: "Galaxy",
    primaryColor: "#4B0082",
    accentColor: "#6A0DAD",
    bgGradient: "from-purple-100 via-violet-50 to-cream-100",
    cardBg: "from-purple-600 via-purple-700 to-purple-800",
    image: "/images/galaxy.png",
    unwrappedImage: "/images/galaxy-removebg-preview.png",
    flavor: "Smooth Milk Chocolate",
    texture: "Silky smooth and melting",
    sweetness: 6,
    perfectFor: "Chocolate purists",
    funFact: "Galaxy is known for its signature 'melts on your tongue' smoothness!",
    titleColor: "#4B0082",
  },
  {
    id: 6,
    name: "Galaxy Caramel",
    primaryColor: "#FF8C00",
    accentColor: "#FFD700",
    bgGradient: "from-orange-100 via-yellow-50 to-cream-100",
    cardBg: "from-yellow-500 via-yellow-600 to-yellow-700",
    image: "/images/galaxy-caramel.png",
    unwrappedImage: "/images/galaxy-smooth-removebg-preview.png",
    flavor: "Caramel Chocolate",
    texture: "Smooth with caramel swirl",
    sweetness: 8,
    perfectFor: "Caramel & chocolate lovers",
    funFact: "Galaxy Caramel combines two heavenly flavors!",
    titleColor: "#FF8C00",
  },
  {
    id: 7,
    name: "Bounty",
    primaryColor: "#006400",
    accentColor: "#228B22",
    bgGradient: "from-green-100 via-emerald-50 to-cream-100",
    cardBg: "from-green-500 via-green-600 to-green-700",
    image: "/images/bounty.png",
    unwrappedImage: "/images/bounty-removebg-preview.png",
    flavor: "Coconut",
    texture: "Soft coconut filling with chocolate",
    sweetness: 7,
    perfectFor: "Tropical escape",
    funFact: "Bounty brings tropical paradise to your celebrations!",
    titleColor: "#006400",
  },
  {
    id: 8,
    name: "Maltesers",
    primaryColor: "#DC143C",
    accentColor: "#FF6347",
    bgGradient: "from-red-100 via-pink-50 to-cream-100",
    cardBg: "from-pink-500 via-pink-600 to-pink-700",
    image: "/images/maltesers.png",
    unwrappedImage: "/images/malteres-removebg-preview.png",
    flavor: "Chocolate Malt",
    texture: "Light crispy malt center",
    sweetness: 6,
    perfectFor: "Texture lovers",
    funFact: "The lighter way to enjoy chocolate - 40% less fat!",
    titleColor: "#DC143C",
  },
]

export default function InteractiveChocolates() {
  const [selectedChocolate, setSelectedChocolate] = useState<Chocolate | null>(null)
  const [unwrapped, setUnwrapped] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)
  const [activeChocolates, setActiveChocolates] = useState<number[]>([])
  const [bgColor, setBgColor] = useState("from-[#FFD9B3] to-[#FFF5E6]")
  const [windowWidth, setWindowWidth] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    chocolates.forEach((_, index) => {
      setTimeout(() => {
        setActiveChocolates((prev) => [...prev, index + 1])
      }, index * 100)
    })
  }, [isClient])

  useEffect(() => {
    if (selectedChocolate) {
      document.querySelector("nav")?.classList.add("hidden")
      document.body.style.overflow = "hidden"
    } else {
      document.querySelector("nav")?.classList.remove("hidden")
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedChocolate])

  const handleChocolateClick = (chocolate: Chocolate) => {
    setSelectedChocolate(chocolate)
    setUnwrapped(false)
    setBgColor(chocolate.bgGradient)
  }

  const handleUnwrap = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setUnwrapped(true)
      setIsFlipping(false)
    }, 200)
  }

  const handleRewrap = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setUnwrapped(false)
      setIsFlipping(false)
    }, 200)
  }

  const handleClose = () => {
    setSelectedChocolate(null)
    setUnwrapped(false)
    setIsFlipping(false)
    setBgColor("from-[#FFD9B3] to-[#FFF5E6]")
  }

  const getOctagonPosition = (index: number) => {
    const angle = (index * 360) / 8 - 90
    let radius = 100

    if (windowWidth < 640) {
      radius = 100
    } else if (windowWidth < 1024) {
      radius = 150
    } else {
      radius = 280
    }

    const x = Math.cos((angle * Math.PI) / 180) * radius
    const y = Math.sin((angle * Math.PI) / 180) * radius
    return { x, y }
  }

  if (!isClient) {
    return (
      <section
        id="chocolates"
        className={`relative w-full py-12 sm:py-20 md:py-32 lg:py-40 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFD9B3] to-[#FFF5E6] overflow-hidden`}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2511] mb-2 sm:mb-3 md:mb-4 text-balance leading-tight">
              Meet the Flavours of Happiness
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E73A3A] font-semibold mb-2 px-2">
              Tap, unwrap, and discover the magic inside.
            </p>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] mx-auto rounded-full shadow-md sm:shadow-xl" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="chocolates"
      className={`relative w-full py-12 sm:py-20 md:py-32 lg:py-40 px-3 sm:px-6 lg:px-8 bg-gradient-to-b ${bgColor} overflow-hidden transition-all duration-700`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-amber-200 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-orange-200 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite 3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2511] mb-2 sm:mb-3 md:mb-4 text-balance leading-tight">
            Meet the Flavours of Happiness
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#E73A3A] font-semibold mb-2 px-2">
            Tap, unwrap, and discover the magic inside.
          </p>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] mx-auto rounded-full shadow-md sm:shadow-xl" />
        </div>

        {/* Center circle */}
        <div className="flex justify-center items-center mb-8 sm:mb-16 md:mb-24 lg:mb-32 px-2">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl aspect-square flex items-center justify-center">
            <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[#FFE8D6] to-[#FFD9B3] shadow-lg sm:shadow-xl opacity-30" />

            {chocolates.map((chocolate, index) => {
              const pos = getOctagonPosition(index)
              const isActive = activeChocolates.includes(chocolate.id)
              const isSelected = selectedChocolate?.id === chocolate.id

              return (
                <div
                  key={chocolate.id}
                  className="absolute transform transition-all duration-500"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    opacity: isActive ? 1 : 0,
                    transform: `translate(-50%, -50%) ${isSelected ? "scale(1.15)" : "scale(1)"}`,
                    visibility: isActive ? "visible" : "hidden",
                  }}
                >
                  <button
                    onClick={() => handleChocolateClick(chocolate)}
                    className={`relative group w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-28 lg:w-32 lg:h-40 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-md sm:shadow-lg ${
                      isSelected
                        ? "ring-2 sm:ring-4 ring-[#FFB800] shadow-lg sm:shadow-2xl"
                        : "hover:shadow-lg sm:hover:shadow-xl"
                    }`}
                  >
                    {/* Individual chocolate image */}
                    <Image
                      src={chocolate.image || "/placeholder.svg"}
                      alt={chocolate.name}
                      fill
                      className={`object-cover transition-all duration-500 ${isSelected ? "scale-110 animate-smooth-flip" : "scale-100 group-hover:brightness-110"}`}
                      sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, (max-width: 1280px) 80px, 128px"
                    />

                    {/* Overlay on hover with enhanced effect */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all rounded-lg group-hover:shadow-xl" />

                    {/* Label */}
                    <div className="absolute inset-0 flex items-end justify-center pb-1 sm:pb-2 md:pb-3 lg:pb-4 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
                      <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm lg:text-lg text-center drop-shadow-lg line-clamp-1">
                        {chocolate.name}
                      </span>
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {selectedChocolate && (
          <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md w-full transform transition-all animate-scale-up max-h-[85vh] overflow-hidden flex flex-col">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors z-50"
              >
                <X size={16} className="text-gray-600 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </button>

              <div
                className={`bg-gradient-to-br ${selectedChocolate.cardBg} p-4 sm:p-5 md:p-6 rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl`}
              >
                <h3
                  style={{ color: selectedChocolate.titleColor }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 drop-shadow-md"
                >
                  {selectedChocolate.name}
                </h3>

                <div
                  className={`flex justify-center mb-4 sm:mb-5 md:mb-6 transition-transform duration-200 ${
                    isFlipping ? "animate-smooth-flip" : ""
                  }`}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="relative w-24 sm:w-28 md:w-32 h-32 sm:h-36 md:h-40 rounded-lg sm:rounded-xl overflow-hidden shadow-lg bg-white/20 backdrop-blur-sm">
                    {!unwrapped ? (
                      <Image
                        src={selectedChocolate.image || "/placeholder.svg"}
                        alt={`${selectedChocolate.name} wrapped`}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={selectedChocolate.unwrappedImage || "/placeholder.svg"}
                        alt={`${selectedChocolate.name} unwrapped`}
                        fill
                        className="object-contain p-2 sm:p-3"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                {!unwrapped ? (
                  <>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-4 mb-4 sm:mb-5 md:mb-6">
                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">Flavor Profile</p>
                        <p className="text-xs sm:text-sm text-gray-800 font-medium">{selectedChocolate.flavor}</p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">Texture</p>
                        <p className="text-xs sm:text-sm text-gray-800 font-medium">{selectedChocolate.texture}</p>
                      </div>

                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                          Sweetness Level
                        </p>
                        <div className="flex gap-1 justify-center">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className="h-1 sm:h-1.5 w-1.5 sm:w-2 rounded-full transition-all"
                              style={{
                                backgroundColor:
                                  i < selectedChocolate.sweetness ? selectedChocolate.accentColor : "#d1d5db",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest">Perfect For</p>
                        <p className="text-xs sm:text-sm text-gray-800 font-medium">{selectedChocolate.perfectFor}</p>
                      </div>
                    </div>

                    <button
                      onClick={handleUnwrap}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r ${selectedChocolate.cardBg} text-white font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-lg transition-all active:scale-95 hover:scale-105 ${
                        isFlipping ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isFlipping}
                    >
                      🎁 Unwrap & Discover
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-center bg-gradient-to-br from-[#E73A3A]/10 to-[#FFB800]/10 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border-2 border-[#FFB800] border-opacity-40 mb-4 sm:mb-5 md:mb-6">
                      <p className="text-xs font-semibold text-[#E73A3A] uppercase tracking-widest mb-1.5">
                        ✨ Fun Fact
                      </p>
                      <p className="text-xs sm:text-sm text-gray-800 italic font-medium">{selectedChocolate.funFact}</p>
                    </div>

                    <button
                      onClick={handleRewrap}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 font-bold text-sm sm:text-base rounded-lg sm:rounded-xl hover:from-gray-300 hover:to-gray-400 transition-all active:scale-95 ${
                        isFlipping ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isFlipping}
                    >
                      🎀 Rewrap Chocolate
                    </button>
                  </>
                )}

                <button
                  onClick={handleClose}
                  className="w-full mt-2.5 sm:mt-3 px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-gray-300 text-gray-800 font-bold text-xs sm:text-sm rounded-lg sm:rounded-xl hover:border-[#E73A3A] hover:text-[#E73A3A] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {!selectedChocolate && (
          <div className="text-center text-xs sm:text-sm md:text-base text-gray-700 animate-fade-up px-2">
            <p>Click on any chocolate to select it and discover its magic!</p>
          </div>
        )}
      </div>
    </section>
  )
}
