import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogData';
import { notFound } from 'next/navigation';

type Props = {
    params: { slug: string }
}

// NEXT.JS DYNAMIC METADATA
// This function generates SEO tags for each blog post dynamically.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: `${post.title} | Invictus Fitness Blog`,
        description: post.excerpt,
    }
}

const BlogPostPage = ({ params }: Props) => {
    const { slug } = params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound(); // NEXT.JS CHANGE: This special function renders the not-found page.
    }

    return (
        <div className="bg-secondary py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="md:text-6xl">{post.title}</h1>
                    <p className="mt-4">{post.date} by <span className="text-accent font-semibold">{post.author}</span></p>
                </div>
                <div className="mb-12 rounded-lg overflow-hidden shadow-2xl relative aspect-video">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <article className="max-w-none">
                    {post.content.map((paragraph, index) => (
                        <p key={index} className="mb-6 text-text-primary">
                            {paragraph}
                        </p>
                    ))}
                </article>
                <div className="mt-16 text-center">
                    <Link href="/blog" className="text-accent text-lg font-semibold hover:underline">
                        &larr; Back to All Posts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;