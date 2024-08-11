"use client";

import Blog from '@/data/blog.json';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen py-16 px-4">
            <div className="container mx-auto">
                {/* Breadcrumb Navigation */}
                <div className="flex items-center mb-6 text-gray-400 text-sm">
                    <Link href="/" className="text-blue-400 hover:text-blue-300 transition duration-300">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="font-medium">All Blogs</span>
                </div>

                {/* Page Title */}
                <h1 className="text-4xl font-extrabold text-white mb-12 text-center">Our Blog</h1>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Blog.map((blog) => (
                        <div key={blog.id} className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <div className="relative h-60">
                                <Image
                                    src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"
                                    alt={blog.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                            </div>
                            <div className="p-6 flex flex-col justify-between h-full">
                                <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                                <p className="text-gray-300 mb-4 flex-1">{blog.excerpt}</p>
                                <Link href={`/blog/${blog.id}`}>
                                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
