"use client"

export default function MadeWithLove() {
  return (
    <section className="relative w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FFE8D6] via-[#FFB3D9]/20 to-[#FFE8D6]">
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-9xl animate-float">❤️</div>
        <div
          className="absolute bottom-1/3 right-1/3 text-9xl"
          style={{ animation: "float 8s ease-in-out infinite 2s" }}
        >
          ❤️
        </div>
        <div className="absolute top-2/3 right-1/4 text-9xl" style={{ animation: "float 8s ease-in-out infinite 4s" }}>
          💝
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A2511] mb-6 leading-tight text-balance">
              Made With Love, Shared With Joy
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              Crafted with joy and shared in celebrations, our chocolates bring happiness to every occasion. From
              intimate moments to grand festivities, Celebrations adds a touch of magic to every celebration.
            </p>
            <div className="space-y-4">
              {[
                {
                  emoji: "💝",
                  title: "Crafted with Care",
                  desc: "Every piece is made with attention to detail and love.",
                },
                {
                  emoji: "🎉",
                  title: "Shared with Everyone",
                  desc: "Perfect for bringing people together in celebration.",
                },
                { emoji: "✨", title: "Pure Happiness", desc: "Creating joyful moments since the beginning." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/30 transition-colors">
                  <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-xl text-[#4A2511] mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-sm h-80 sm:h-96 md:h-full md:aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl md:text-[10rem] opacity-20 animate-bounce-gentle">❤️</div>
              </div>

              <div className="w-full h-full bg-gradient-to-br from-[#E73A3A] to-[#FFB800] rounded-2xl flex items-center justify-center text-7xl font-bold text-white shadow-2xl relative z-10">
                🍫❤️
              </div>

              <div className="absolute inset-0 rounded-2xl border-4 border-[#FFB3D9] opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
