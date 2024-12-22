import Link from 'next/link'
import AnimatedTitle from '@/components/AnimatedTitle'

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Idioms Explained',
      excerpt: 'An explanation of popular American Phrases and Sayings',
      date: 'Dec 1, 2024',
      category: 'Culture'
    },
    {
      id: 2,
      title: 'Engrish Misprints',
      excerpt: 'English Titles written using Korean Grammar',
      date: 'Dec 5, 2023',
      category: 'Design'
    },
    {
      id: 3,
      title: 'The Konglish Rift',
      excerpt: 'The differences between Korean and English and how to bridge the gap',
      date: 'Dec 10, 2023',
      category: 'Linguistics'
    }
  ]

  return (
    <div className="space-y-12 bg-[url('/beige-bg.jpg')] bg-cover bg-center bg-repeat">
      {/* Hero Section */}
      <section className="text-center py-12">
        <AnimatedTitle />
        <p className="text-xl text-gray-600 mb-8">
          Exploring the connection between Korean and English: two languages in one
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
          </form>
        </div>
      </section> */}
    </div>
  )
}
