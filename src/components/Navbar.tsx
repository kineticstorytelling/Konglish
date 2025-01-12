import Link from 'next/link'
import { Alegreya } from 'next/font/google'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const alegreya = Alegreya({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <nav className="text-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/assets/logos/konglish-logo.png" alt="Konglish Logo" className="h-16 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className={`${alegreya.className} flex space-x-8 text-2xl`}>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-gray-600 transition-colors hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-600 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-gray-600 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
