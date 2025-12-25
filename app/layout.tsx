import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Celebrations | Explore the Flavours of Happiness🎉",
  description:
    "Discover the magical world of Celebrations chocolates - a festive assortment of iconic flavours bringing joy to every celebration.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-gradient-to-b from-celebrations-red to-celebrations-cream relative">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
