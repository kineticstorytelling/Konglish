import Link from 'next/link'
import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <nav className="bg-opacity-15 bg-amber-200 text-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link href="/" className="py-2 flex flex-col items-center">
            <img src="/assets/logos/konglish-logo.png" alt="Konglish Logo" className="h-20 w-auto" />
            {/* <div className="text-4xl">
              <span className="font-bold font-ryukosei text-5xl">Ko</span>
              <span className={`${alegreya.className} font-bold`}>nglish</span>
            </div> */}
          </Link>

          <div className={`${alegreya.className} flex space-x-8 py-4 text-3xl`}>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
