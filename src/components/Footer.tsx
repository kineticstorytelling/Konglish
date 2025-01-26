import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col space-y-8">
        {/* Logo and Menu Links */}
        <div className="flex flex-col items-center space-y-6">
          <Link href="/" className="flex items-center rounded-full p-2" style={{ backgroundImage: "url('/assets/images/Konglish-BG-3.png')" }}>
            <img src="/assets/logos/konglish-logo.png" alt="Konglish Logo" className="h-16 w-auto" />
          </Link>
          
          <div className="flex space-x-8 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
            <Link href="/tutoring" className="text-gray-300 hover:text-white transition-colors">Tutoring</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="w-full">
          <div className="border-t border-gray-300/50"></div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="w-full flex justify-between items-center">
          <p className="text-gray-300">&copy; 2024 Konglish. All rights reserved.</p>
          
          <div className="flex space-x-6 text-base">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-pink-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-blue-300 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
