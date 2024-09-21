import { BlogType } from '@/lib/type'
import Link from 'next/link'; 
import Image from 'next/image'
import React from 'react'

interface BlogDetailsPropsType {
    blog?: BlogType; 
}

const BlogDetails: React.FC<BlogDetailsPropsType> = ({ blog }) => {
    if (!blog) {
        return <p>Blog not found</p>; 
    }
    return (
        <div>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen py-6">
                <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <Link href="/" className="text-blue-400 hover:text-blue-300 transition duration-300">
                            Home
                        </Link>
                        <span className="text-gray-400 mx-2">/</span>
                        <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition duration-300">
                            Blogs
                        </Link>
                        <span className="text-gray-400 mx-2">/</span>
                        <span className="text-gray-300">{blog.title}</span>
                    </div>

                    <div className="relative h-80 rounded-lg overflow-hidden">
                        <Image
                            src={blog.image || '/default-image.jpg'}
                            alt={blog.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    </div>

                    <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
                    <p className="text-gray-400 mt-2">{blog.excerpt}</p>
                    <div className="mt-6 text-gray-200 text-justify">
                        {blog.paragraph}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails