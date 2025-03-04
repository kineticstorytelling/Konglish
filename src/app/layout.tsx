import './globals.css'
import type { Metadata } from 'next'
import { Alegreya } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const alegreya = Alegreya({ 
  subsets: ['latin'],
  variable: '--font-alegreya'
})

// Local fonts
const ryujinAttack = localFont({ 
  src: './fonts/ryujin-attack.regular.ttf',
  variable: '--font-ryujin-attack'
})
// const gingsul = localFont({ 
//   src: './fonts/gingsul.ttf',
//   variable: '--font-gingsul'
// })
const ryukosei = localFont({ 
  src: './fonts/Ryukosei.otf',
  variable: '--font-ryukosei'
})

export const metadata: Metadata = {
  title: 'Konglish',
  description: 'Exploring the connection between Korean and English',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${alegreya.variable} ${ryukosei.variable}`}>
      <body className={alegreya.className}>
        <Navbar />
        <main className="flex-grow">
          {/* <h1 className="font-gingsul text-4xl mb-4">Welcome to Konglish</h1> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
