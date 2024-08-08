import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <section id='blog' className="container mx-auto px-4 py-12 text-white">
            <h2 className="text-4xl font-extrabold mb-8 text-center neon-text">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {blogPosts.map((post) => (
                    <div key={post.id} className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                        {post.imageUrl && (
                            <Image src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg" alt={post.title} height={500} width={500} className="w-full h-60 object-cover blur-[2px] hover:blur-none" />
                        )}
                        <div className="absolute inset-0 bg-black opacity-80 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-4">
                            <h3 className="text-lg px-1 font-bold transform transition-transform duration-500 text-gray-100 group-hover:translate-y-0 translate-y-16 border-b w-fit">{post.title}</h3>
                            <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{post.excerpt}</p>
                            <Link href="#" className="self-start border border-gray-900  bg-gray-900 text-white py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:border-white ">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;


// import React from 'react';
// import Image from 'next/image';

// type BlogPost = {
//     id: number;
//     title: string;
//     excerpt: string;
//     imageUrl?: string;
// };

// const blogPosts: BlogPost[] = [
//     {
//         id: 1,
//         title: 'Understanding Family Law',
//         excerpt: 'Learn about the intricacies of family law and how it can affect your life.',
//         imageUrl: '/images/blog-post-1.jpg',
//     },
//     {
//         id: 2,
//         title: 'Tips for Hiring a Criminal Defense Lawyer',
//         excerpt: 'Key factors to consider when hiring a criminal defense lawyer for your case.',
//         imageUrl: '/images/blog-post-2.jpg',
//     },
//     {
//         id: 3,
//         title: 'Understanding Family Law',
//         excerpt: 'Learn about the intricacies of family law and how it can affect your life.',
//         imageUrl: '/images/blog-post-1.jpg',
//     },
//     {
//         id: 4,
//         title: 'Tips for Hiring a Criminal Defense Lawyer',
//         excerpt: 'Key factors to consider when hiring a criminal defense lawyer for your case.',
//         imageUrl: '/images/blog-post-2.jpg',
//     },
//     {
//         id: 5,
//         title: 'Understanding Family Law',
//         excerpt: 'Learn about the intricacies of family law and how it can affect your life.',
//         imageUrl: '/images/blog-post-1.jpg',
//     },
//     {
//         id: 6,
//         title: 'Tips for Hiring a Criminal Defense Lawyer',
//         excerpt: 'Key factors to consider when hiring a criminal defense lawyer for your case.',
//         imageUrl: '/images/blog-post-2.jpg',
//     },
// ];

// const Blog: React.FC = () => {
//     return (
//         <section className="container mx-auto px-4 py-8 text-white">
//             <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {blogPosts.map((post) => (
//                     <div key={post.id} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//                         {post.imageUrl && (
//                             <Image src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"  alt={post.title} height={500} width={500} className="w-full h-45 object-cover" />
//                         )}
//                             <h3 className="h-full text-lg  absolute -bottom-[150px] text-center abg-slate-400 w-full flex justify-center items-center  abackdrop-blur-md transition duration-1000 hover:bottom-0"  style={{ backgroundColor: "rgba(0,0,0,.5)" }}>{post.title}</h3>
//                         {/* <div className="p-4 absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
//                             <p className="text-gray-300">{post.excerpt}</p>
//                             <a href="#" className="block mt-2 text-blue-500 hover:underline">Read more</a>
//                         </div> */}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Blog;
