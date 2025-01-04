import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { Alegreya } from 'next/font/google'
const alegreya = Alegreya({ subsets: ['latin'] })
export default function Blog() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-baseline mb-8">
          <h1 className="text-8xl font-bold font-ryukosei">Bl</h1>
          <h1 className={`${alegreya.className} text-7xl font-bold`}>og</h1>
        </div>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold hover:text-blue-600">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="text-sm text-gray-500">
                  {post.readTime}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500">{post.date}</time>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
