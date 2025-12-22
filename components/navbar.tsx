"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Journey", id: "journey" },
    { label: "Chocolates", id: "chocolates" },
    { label: "Surprises", id: "surprises" },
    { label: "Contact", id: "footer" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 blink-dots pointer-events-none" />

      {/* CONTENT */}
      <div
        className="relative"
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 28%, rgba(255,255,255,0.25) 2.5px, transparent 3.2px),
            radial-gradient(circle at 78% 22%, rgba(255,255,255,0.22) 2.2px, transparent 3px),
            radial-gradient(circle at 42% 72%, rgba(255,255,255,0.23) 2.4px, transparent 3.2px),
            radial-gradient(circle at 88% 64%, rgba(255,255,255,0.21) 2.3px, transparent 3px),
            radial-gradient(circle at 25% 90%, rgba(255,255,255,0.20) 2.2px, transparent 3px),
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.24) 2.3px, transparent 3.2px),
            linear-gradient(135deg, #E73A3A, #F15555, #E73A3A)
          `,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#FFD36A] rounded-full flex items-center justify-center font-bold text-[#E73A3A] bg-[rgba(255,255,255,1)] group-hover:scale-110 transition-transform duration-300 shadow-lg text-xs sm:text-base">
                C
              </div>
              <span className="text-white font-bold text-base sm:text-lg md:text-xl hidden sm:inline group-hover:text-[#FFD36A] transition-colors duration-300 truncate">
                Celebrations
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#FFD36A] transition-colors duration-300 font-medium text-sm lg:text-base relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD36A] to-[#FFB800] group-hover:w-full transition-all duration-500 rounded-full" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD36A] group-hover:w-full transition-all duration-500 rounded-full opacity-50 blur-sm" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-[#FFD36A] transition-colors p-2 hover:scale-110 duration-300 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fade-down">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-white hover:bg-white/10 hover:text-[#FFD36A] transition-all duration-300 font-medium rounded-lg text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BLINK KEYFRAMES */}
      <style jsx>{`
        .blink-dots {
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.40) 2.2px, transparent 3px),
            radial-gradient(circle at 60% 70%, rgba(255,255,255,0.35) 2.1px, transparent 3px),
            radial-gradient(circle at 82% 44%, rgba(255,255,255,0.38) 2.2px, transparent 3px),
            radial-gradient(circle at 35% 50%, rgba(255,255,255,0.32) 2px, transparent 3px);
          background-size: 100% 100%;
          animation: blink-pulse 3s ease-in-out infinite;
        }

        @keyframes blink-pulse {
          0% { opacity: 0.2; }
          25% { opacity: 0.5; }
          50% { opacity: 0.8; }
          75% { opacity: 0.5; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </nav>
  )
}
