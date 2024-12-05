import Link from 'next/link'

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js',
      date: 'Dec 1, 2023',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Tips and tricks for building beautiful interfaces with Tailwind',
      date: 'Dec 5, 2023',
      category: 'Design'
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends in web development',
      date: 'Dec 10, 2023',
      category: 'Technology'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to my Blog</h1>
        <p className="text-xl text-gray-600 mb-8">
          Exploring the latest in technology, development, and innovation
        </p>
        <Link 
          href="/blog" 
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Read Our Blog
        </Link>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map(post => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{post.category}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-primary hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 p-8 rounded-lg">
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
          </form>
        </div>
      </section>
    </div>
  )
}
