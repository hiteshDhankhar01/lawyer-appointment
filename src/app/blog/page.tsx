"use client"


import Blog from "@/components/Blog/Blog";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/blog', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                 
                    setBlogs(data.blogs)
                    setLoading(false)
                }
                else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllBlogs()
    }, [])
    return loading ? (<div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen pb-16">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between mb-6 text-gray-400 text-sm p-8 py-12">
                <div className="flex items-start mb-4">
                    <div className="h-6 bg-gray-600 rounded w-16 animate-pulse"></div>
                    <span className="mx-2 text-gray-500">/</span>
                    <div className="h-6 bg-gray-600 rounded w-20 animate-pulse"></div>
                </div>
                <div className="relative w-3/4">
                    <div className="w-full py-3 px-4 bg-gray-700 border border-gray-600 rounded-lg shadow-inner animate-pulse"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-3 top-3 h-6 w-6 text-gray-400 transition-transform duration-300 ease-in-out"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243-1.415 1.415-4.242-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="w-80 bg-gray-800 text-white rounded-md shadow-lg p-2 relative overflow-hidden border border-gray-700 animate-pulse">
                        <div className="relative w-full h-40 bg-gray-600 rounded-md"></div>
    
                        <div className="mt-4">
                            <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
                            <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-600 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-600 rounded w-5/6 mb-2"></div>
                            <div className="h-4 bg-gray-600 rounded w-4/6 mb-6"></div>
    
                            <div className="absolute bottom-2 right-2 h-8 bg-gray-600 rounded-md w-1/3"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    ) : (
        <Blog blogs={blogs} />
    )
}

export default BlogPage;


// const BlogPage = async () => {
//     try {
//         const response = await fetch('http://localhost:3000/api/blog', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log(data);

//         return (
//                 <Blog blogs={data.blogs} />
//         );
//     } catch (error) {
//         console.error('Failed to fetch blogs:', error);
//         return <div>Error loading blog posts</div>;
//     }
// };