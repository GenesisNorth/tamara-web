import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  
  title: "TamaraPharm LTD - Trusted Partners in Pharmaceutical Importation",
  description:
    "TamaraPharm LTD is your reliable partner for pharmaceutical importation and distribution in Nigeria. Licensed by PCN, NAFDAC, and SON. Quality medications through regulatory compliance.",
  keywords: [
    "TamaraPharm",
    "pharmaceutical importation Nigeria",
    "medical equipment sourcing",
    "NAFDAC licensed",
    "PCN licensed",
    "pharmaceutical distribution",
    "wholesale pharmaceuticals",
    "medical supplies Nigeria",
    "Abuja pharmaceuticals",
  ],
  authors: [{ name: "TamaraPharm LTD" }],
  creator: "TamaraPharm LTD",
  publisher: "TamaraPharm LTD",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tamarapharm.com",
    siteName: "TamaraPharm LTD",
    title: "TamaraPharm LTD - Trusted Partners in Pharmaceutical Importation",
    description:
      "Licensed pharmaceutical importation and distribution company in Nigeria. Fully compliant with PCN, NAFDAC, and SON regulations.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
