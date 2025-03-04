'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="text-blue-500 hover:text-blue-600 mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-gray-500 mb-8">
            <time>{post.date}</time>
            <span>By {post.author}</span>
          </div>
          <div className="markdown-content [&_img]:max-w-[300px] [&_img]:w-auto [&_img]:h-auto">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
