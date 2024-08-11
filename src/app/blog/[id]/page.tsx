"use client";

import { useParams } from 'next/navigation';
import Blog from '@/data/blog.json';
import Image from 'next/image';
import Link from 'next/link';

const BlogPost = () => {
    const { id } = useParams();
    const blog = Blog.find((b) => b.id === parseInt(id as string));

    if (!blog) {
        return <div className="text-white">Blog not found</div>;
    }

    // Get 3 random blog posts
    const getRandomBlogs = (blogs: typeof Blog[], count: number) => {
        const shuffled = blogs.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const randomBlogs = getRandomBlogs(Blog, 3);

    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen pt-6">
            <div className="max-w-4xl mx-auto  p-6 bg-gray-900 text-white rounded-lg shadow-lg ">
                {/* Breadcrumb Navigation */}
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

                {/* Blog Image */}
                <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"
                        // src={blog.imageUrl || "/default-image.jpg"}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                </div>

                {/* Blog Content */}
                <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
                <p className="text-gray-400 mt-2">{blog.excerpt}</p>
                <div className="mt-6 text-gray-200">
                    {blog.paragraph}
                </div>
            </div>

            {/* Random Blog Cards */}
            <div className="max-w-4xl mx-auto p-6 ">
                <h2 className="text-3xl font-bold text-white mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {randomBlogs.map((randomBlog) => (
                        <div key={randomBlog.id} className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-40">
                                <Image
                                    src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"
                                    alt={randomBlog.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-white">{randomBlog.title}</h3>
                                <p className="text-gray-400 mt-1">{randomBlog.excerpt}</p>
                                <Link href={`/blog/${randomBlog.id}`}>
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
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

export default BlogPost;


// "use client";

// import { useParams } from 'next/navigation';
// import Blog from '@/data/blog.json';
// import Image from 'next/image';
// import Link from 'next/link';

// const BlogPost = () => {
//     const { id } = useParams();
//     const blog = Blog.find((b) => b.id === parseInt(id as string));

//     if (!blog) {
//         return <div className="text-white">Blog not found</div>;
//     }

//     return (
//         <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen">
//             <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg pt-4">
//                 {/* Breadcrumb Navigation */}
//                 <div className="flex items-center mb-4">
//                     <Link href="/" className="text-blue-400 hover:text-blue-300 transition duration-300">
//                         Home
//                     </Link>
//                     <span className="text-gray-400 mx-2">/</span>
//                     <span className="text-gray-300">{blog.title}</span>
//                 </div>

//                 {/* Blog Image */}
//                 <div className="relative h-80 rounded-lg overflow-hidden">
//                     <Image
//                         // src={blog.imageUrl || "/default-image.jpg"}
//                          src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"
//                         alt={blog.title}
//                         fill
//                         className="object-cover rounded-lg"
//                     />
//                     <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
//                 </div>

//                 {/* Blog Content */}
//                 <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
//                 <p className="text-gray-400 mt-2">{blog.excerpt}</p>
//                 <div className="mt-6 text-gray-200">
//                     {blog.paragraph}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogPost;
