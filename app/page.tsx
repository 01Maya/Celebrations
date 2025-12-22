"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Journey from "@/components/journey"
import InteractiveChocolates from "@/components/interactive-chocolates"
import Surprises from "@/components/surprises"
import Footer from "@/components/footer"
import BouncyBackground from "@/components/bouncy-background"

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-celebrations-red via-celebrations-cream to-celebrations-chocolate">
      <BouncyBackground />
      <Navbar />
      <Hero />
      <Journey />
      <InteractiveChocolates />
      <Surprises />
      <Footer />
    </main>
  )
}
