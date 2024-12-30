import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const ryujinAttack = localFont({ 
  src: './fonts/ryujin-attack.regular.ttf',
  variable: '--font-ryujin-attack'
})
const gingsul = localFont({ 
  src: './fonts/gingsul-demo.regular.ttf',
  variable: '--font-gingsul'
})
const ryukosei = localFont({ 
  src: '../../public/assets/fonts/ryukosei.otf',
  variable: '--font-ryukosei'
})

export const metadata: Metadata = {
  title: 'Konglish',
  description: 'Learn about Korean-English language fusion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ryukosei.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* <h1 className="font-gingsul text-4xl mb-4">Welcome to Konglish</h1> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
