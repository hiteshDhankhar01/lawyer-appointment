import React from 'react';
import Image from 'next/image';

type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    imageUrl?: string;
};

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Understanding Family Law',
        excerpt: 'Learn about the intricacies of family law and how it can affect your life.',
        imageUrl: '/images/blog-post-1.jpg',
    },
    {
        id: 2,
        title: 'Tips for Hiring a Criminal Defense Lawyer',
        excerpt: 'Key factors to consider when hiring a criminal defense lawyer for your case.',
        imageUrl: '/images/blog-post-2.jpg',
    },
    {
        id: 3,
        title: 'Understanding Family Law',
        excerpt: 'Learn about the intricacies of family law and how it can affect your life.',
        imageUrl: '/images/blog-post-1.jpg',
    },
    {
        id: 4,
        title: 'Tips for Hiring a Criminal Defense Lawyer',
        excerpt: 'Key factors to consider when hiring a criminal defense lawyer for your case.',
        imageUrl: '/images/blog-post-2.jpg',
    },
    {
        id: 5,
        title: 'Understanding Family Law',
        excerpt: 'Learn about the intricacies of family law and how it can affect your life.',
        imageUrl: '/images/blog-post-1.jpg',
    },
    {
        id: 6,
        title: 'Tips for Hiring a Criminal Defense Lawyer',
        excerpt: 'Key factors to consider when hiring a criminal defense lawyer for your case.',
        imageUrl: '/images/blog-post-2.jpg',
    },
];

const Blog: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        {post.imageUrl && (
                            <Image src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"  alt={post.title} height={500} width={500} className="w-full h-45 object-cover" />
                        )}
                            <h3 className="h-1/4 text-lg  absolute bottom-0 text-center bg-slate-400 w-full flex justify-center items-center"  style={{ backgroundColor: "rgba(0,0,0,.5)" }}>{post.title}</h3>
                        {/* <div className="p-4 absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-gray-300">{post.excerpt}</p>
                            <a href="#" className="block mt-2 text-blue-500 hover:underline">Read more</a>
                        </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
