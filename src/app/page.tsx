import Link from 'next/link'
import AnimatedTitle from '@/components/AnimatedTitle'

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Idioms Explained',
      excerpt: 'An explanation of popular American Phrases and Sayings',
      date: 'Dec 1, 2024',
      category: 'Culture',
      image: '/assets/images/idioms-explained.jpg'
    },
    {
      id: 2,
      title: 'Engrish Misprints',
      excerpt: 'English Titles written using Korean Grammar',
      date: 'Dec 5, 2023',
      category: 'Design',
      image: '/assets/images/engrish-misprints.jpg'
    },
    {
      id: 3,
      title: 'The Konglish Rift',
      excerpt: 'The differences between Korean and English and how to bridge the gap',
      date: 'Dec 10, 2023',
      category: 'Linguistics',
      image: '/assets/images/konglish-rift.jpg'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="flex justify-center items-center py-12 px-4">
        <div className="text-left px-4 w-2/5">
          <AnimatedTitle />
          <p className="text-xl text-gray-600 mb-8 mt-4 px-5">
            Exploring the connection between Korean and English: two languages in one
          </p>
          <Link 
            href="/blog" 
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Read Our Blog
          </Link>
        </div>
        <div className="w-1/4 flex justify-center bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/assets/images/Konglish-BG-part.png')" }}>
          <img 
            src="/assets/images/taeguk.png" 
            alt="Taeguk Symbol" 
            className="w-64 h-64 object-contain animate-spin-slow"
          />
        </div>
      </section>

      {/* Tutoring Services CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 mx-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <img 
              src="/assets/images/tutoring-illustration.png" 
              alt="Tutoring Illustration" 
              className="w-full max-w-sm mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Master English with Expert Tutoring</h2>
            <p className="text-xl text-gray-600 mb-6">
              Break through language barriers with personalized tutoring sessions. 
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>One-on-one personalized lessons</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Flexible scheduling options</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Native speakers for both languages</span>
              </li>
            </ul>
            <Link 
              href="/tutoring"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Start Learning Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <article 
                key={post.id} 
                className="rounded-lg overflow-hidden transition-all hover:scale-[1.02] duration-300 max-w-xs mx-auto w-full"
                style={{ 
                  backgroundColor: "#fff9f1",
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary mb-1.5">{post.category}</p>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-gray-100 p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest tech insights and updates.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>

        </div>
      </section> */}
    </div>
  )
}
