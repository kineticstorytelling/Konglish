import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-light-gray text-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="">
            <img src="/assets/logos/my-logo-black-removebg.png" alt=" Konglish Logo" className="h-16 ml-2" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
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
