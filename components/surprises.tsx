"use client"

import { useState, useEffect } from "react"
import Confetti from "react-confetti"

interface Surprise {
  id: number
  title: string
  emoji: string
  description: string
  fact?: string
  color: string
}

interface QuizOption {
  text: string
  chocolate: string
}

const surprises: Surprise[] = [
  {
    id: 1,
    title: "Sweet Facts",
    emoji: "📚",
    description: "Did you know? Celebrations chocolates have been bringing joy for generations!",
    fact: "Over 400 million people worldwide love Celebrations, and a new box is opened every 3 seconds!",
    color: "from-[#E73A3A] to-[#CC2F2F]",
  },
  {
    id: 2,
    title: "Flavor Quest",
    emoji: "🎯",
    description: "Test your chocolate knowledge and discover your perfect match!",
    fact: "Each chocolate in Celebrations is carefully crafted with unique flavors and textures.",
    color: "from-[#0055d4] to-[#003aa3]",
  },
  {
    id: 3,
    title: "Celebration Ideas",
    emoji: "🎊",
    description: "Get creative ideas on how to celebrate with your loved ones.",
    fact: "Celebrations bring people together - share the joy with friends and family!",
    color: "from-[#FFB800] to-[#FF8C00]",
  },
  {
    id: 4,
    title: "Mystery Box",
    emoji: "🎁",
    description: "Explore unlimited combinations of flavors and create your own magic.",
    fact: "Every combination creates a unique tasting experience!",
    color: "from-[#ff69b4] to-[#ff1493]",
  },
]

export default function Surprises() {
  const [openedBoxes, setOpenedBoxes] = useState<number[]>([])
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [confettiDimensions, setConfettiDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setConfettiDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  const quizQuestions = [
    {
      question: "You love nougat and caramel - which is your chocolate?",
      options: [
        { text: "Crispy and crunchy", chocolate: "Snickers" },
        { text: "Light and fluffy", chocolate: "Mars" },
        { text: "Smooth and melting", chocolate: "Galaxy" },
        { text: "Coconut paradise", chocolate: "Bounty" },
      ],
    },
    {
      question: "Which texture appeals to you most?",
      options: [
        { text: "Crispy biscuit", chocolate: "Twix" },
        { text: "Airy nougat", chocolate: "Milky Way" },
        { text: "Silky smooth", chocolate: "Galaxy" },
        { text: "Malty crispiness", chocolate: "Maltesers" },
      ],
    },
    {
      question: "What's your ideal sweetness level?",
      options: [
        { text: "Very sweet", chocolate: "Galaxy Caramel" },
        { text: "Moderately sweet", chocolate: "Mars" },
        { text: "Lightly sweet", chocolate: "Maltesers" },
        { text: "Exotic and sweet", chocolate: "Bounty" },
      ],
    },
  ]

  const toggleBox = (id: number) => {
    setOpenedBoxes((prev) => (prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]))
    if (!openedBoxes.includes(id)) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const handleQuizAnswer = (answer: QuizOption) => {
    const newAnswers = [...quizAnswers, answer.chocolate]
    setQuizAnswers(newAnswers)

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 4000)
    }
  }

  const getQuizResult = () => {
    const chocolateCount: Record<string, number> = {}
    quizAnswers.forEach((choc) => {
      chocolateCount[choc] = (chocolateCount[choc] || 0) + 1
    })
    return Object.keys(chocolateCount).reduce((a, b) => (chocolateCount[a] > chocolateCount[b] ? a : b))
  }

  return (
    <section id="surprises" className="relative w-full py-12 sm:py-20 md:py-32 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5E6] via-[#FFE8D6] to-[#FFD4C0] pointer-events-none" />

      {showConfetti && confettiDimensions.width > 0 && (
        <Confetti
          width={confettiDimensions.width}
          height={confettiDimensions.height}
          recycle={false}
          numberOfPieces={350}
          gravity={0.35}
        />
      )}

      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-200 rounded-full blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200 rounded-full blur-2xl"
          style={{ animation: "float 10s ease-in-out infinite 4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-yellow-200 rounded-full blur-2xl"
          style={{ animation: "float 9s ease-in-out infinite 1s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A2511] mb-2 sm:mb-4 text-balance leading-tight">
            A Box Full of Surprises
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 px-2">
            Tap, unwrap, and discover the magic inside
          </p>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] mx-auto rounded-full shadow-md" />
        </div>

        {showQuiz && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-[#FFB800] to-[#FF8C00] rounded-2xl sm:rounded-3xl shadow-2xl max-w-xl sm:max-w-2xl w-full transform transition-all animate-scale-up p-6 sm:p-8 md:p-12 border-4 border-white/30 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => {
                  setShowQuiz(false)
                  setQuizStep(0)
                  setQuizAnswers([])
                }}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all hover:scale-110 text-xl sm:text-2xl"
              >
                ✕
              </button>

              {quizStep < quizQuestions.length ? (
                <>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-balance">
                    Question {quizStep + 1}/{quizQuestions.length}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 font-semibold">
                    {quizQuestions[quizStep].question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {quizQuestions[quizStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(option)}
                        className="p-2.5 sm:p-3 md:p-4 bg-white/30 hover:bg-white/50 text-white font-bold rounded-lg sm:rounded-xl transition-all transform hover:scale-105 backdrop-blur-sm border-2 border-white/20 active:scale-95 text-xs sm:text-sm md:text-base"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-8 w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all"
                      style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
                    Your Perfect Chocolate
                  </h3>
                  <p className="text-4xl sm:text-5xl md:text-6xl text-white text-center font-bold mb-4 sm:mb-6 md:mb-8 animate-bounce-gentle">
                    🍫
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-bold mb-4 sm:mb-6 md:mb-8">
                    {getQuizResult()}
                  </p>
                  <p className="text-white text-center mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                    Based on your preferences, you're a {getQuizResult()} lover!
                  </p>
                  <button
                    onClick={() => {
                      setShowQuiz(false)
                      setQuizStep(0)
                      setQuizAnswers([])
                    }}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#FF8C00] font-bold rounded-lg sm:rounded-xl hover:shadow-lg transition-all active:scale-95 border-2 border-white/30 text-sm sm:text-base"
                  >
                    Back to Surprises
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {surprises.map((surprise) => (
            <div
              key={surprise.id}
              className="relative group h-56 sm:h-64 md:h-72 cursor-pointer perspective"
              onClick={() => toggleBox(surprise.id)}
            >
              <div
                className="relative w-full h-full rounded-2xl sm:rounded-3xl transition-all duration-700 transform-gpu hover:scale-110 group-hover:animate-jiggle shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl"
                style={{
                  transform: openedBoxes.includes(surprise.id) ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Box front - Closed mysterious box */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${surprise.color} rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center gap-3 sm:gap-4 group-hover:shadow-xl sm:group-hover:shadow-2xl transition-all border-4 border-white/30 backdrop-blur-sm`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl animate-bounce-gentle group-hover:animate-bounce">
                    {surprise.emoji}
                  </div>
                  <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-50" />
                  <p className="text-center text-white font-bold text-xs sm:text-sm">Click to reveal</p>
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-4 border-white/40 rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                </div>

                {/* Box inside - Opened box content */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${surprise.color} rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 border-4 border-white/30 backdrop-blur-sm`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce-gentle">{surprise.emoji}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white text-center">{surprise.title}</h3>
                  <p className="text-white text-xs sm:text-sm md:text-base text-center leading-relaxed line-clamp-3">
                    {surprise.description}
                  </p>
                  {surprise.fact && (
                    <p className="text-white/90 text-xs sm:text-sm md:text-base text-center italic border-t border-white/30 pt-2 mt-2">
                      "{surprise.fact}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz button */}
        <div className="text-center mb-8 sm:mb-12">
          <button
            onClick={() => setShowQuiz(true)}
            className="px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-[#E73A3A] to-[#FFB800] text-white font-bold text-sm sm:text-base md:text-lg rounded-full hover:shadow-lg transition-all active:scale-95 hover:scale-105 border-2 border-yellow-300 inline-block"
          >
            🎯 Take the Flavor Quiz
          </button>
        </div>

        {/* Did You Know section */}
        <div className="bg-gradient-to-r from-[#E73A3A]/15 to-[#FFB800]/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 border-2 border-[#FFB800] border-opacity-40 hover:border-opacity-70 transition-all hover:shadow-lg sm:hover:shadow-xl hover:bg-gradient-to-r hover:from-[#E73A3A]/20 hover:to-[#FFB800]/20">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start md:items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0 animate-bounce-gentle">💡</div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4A2511] mb-2 sm:mb-3">Did You Know?</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
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
