import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogData';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'The Invictus Blog | Fitness Tips and Insights',
    description: 'Explore articles on training, nutrition, wellness, and success stories from the Invictus Fitness community.',
};

const BlogListPage: React.FC = () => {
  return (
    <div className="bg-primary">
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <Image src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Healthy food" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-white">The Invictus Blog</h1>
          <p className="text-xl md:text-2xl text-accent mt-4 font-light tracking-wide">Fuel for Your Fitness Journey</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-secondary rounded-lg shadow-xl overflow-hidden group flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transform group-hover:scale-110 transition-transform duration-300" />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm mb-2">{post.date} &bull; {post.author}</p>
                  <h3 className="mb-3 flex-grow">{post.title}</h3>
                  <p className="mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-accent hover:underline flex items-center self-start mt-auto">
                    Read More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;