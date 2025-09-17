import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { blogPosts } from '@/data/blogData';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-6">
          <h2>Latest from <span className="text-accent">The Blog</span></h2>
          <p className="mt-4">Tips, stories, and insights to fuel your fitness journey.</p>
        </div>
        <div className="flex space-x-8 pb-8 overflow-x-auto scrollbar-hide px-6">
          {blogPosts.slice(0, 4).map((post) => (
            <div key={post.id} className="flex-shrink-0 w-80 bg-primary rounded-lg shadow-xl overflow-hidden group">
              <Link href={`/blog/${post.slug}`} className="block h-48 relative">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </Link>
              <div className="p-6">
                <h3 className="text-xl h-20 overflow-hidden">{post.title}</h3>
                <p className="text-sm h-16 overflow-hidden">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="font-semibold text-accent hover:underline flex items-center mt-4">
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
            <Link href="/blog" className="text-accent font-semibold text-lg hover:underline">
                View All Posts &rarr;
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;