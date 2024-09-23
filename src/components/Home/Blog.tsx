"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import { BlogType } from '@/lib/type';

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const response = await fetch('/api/blog', {
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

    return loading ? (
        <div>
            
        </div>
    ) : (
        <div className='text-white' id='blog'>
            <h2 className="text-3xl font-extrabold mb-6 text-center neon-text">Latest Blog Posts</h2>
            <div className="flex flex-col md:flex-row gap-8 p-6">
                <div className="w-full md:w-2/3 relative">
                    <Swiper
                        spaceBetween={30}
                        autoplay={{ delay: 5000 }}
                        className="mySwiper h-full"
                    >
                        {blogs.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative min-h-[35rem] p-6 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
                                    <div className="relative z-10 text-center">
                                        <h3 className="text-3xl font-bold text-white mb-4">{blog.title}</h3>
                                        <p className="text-gray-300 text-sm mb-6">{blog.excerpt}</p>
                                        <Link href={`/blog/${blog._id}`} className='inline-block py-2 px-6 rounded-full  hover:shadow-xl border border-gray-100 text-gray-100 shadow-lg hover:bg-gray-100 hover:text-black transition duration-300  backdrop-blur-lg'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="w-full md:w-1/3 flex flex-col my-auto gap-3">
                    {blogs.slice(0, 3).map((blog) => (
                        <div key={blog._id} className="relative flex bg-gray-900 rounded-lg shadow-lg min-h-40 ">
                            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 flex items-center justify-center w-1/3 rounded-l-lg">
                                <Image
                                    src={blog.image}
                                    height={500}
                                    width={500}
                                    alt={blog.title}
                                    className="object-cover rounded-lg h-[7rem]"
                                />
                                <div className="absolute inset-0 bg-black opacity-50 rounded-l-lg"></div>
                            </div>
                            <div className="absolute  w-2/3 right-0  flex-1 p-4 flex flex-col justify-between h-fit">
                                <h2 className="text-md font-semibold text-white">{blog.title}</h2>
                                <h3 className='text-sm text-gray-500'>
                                    {blog.excerpt.substring(0, 60)}...
                                </h3>
                                <Link href={`/blog/${blog._id}`} className="mt-2 border border-gray-100 text-gray-100 shadow-lg hover:bg-gray-100 hover:text-black transition duration-300 w-fit px-4 rounded-full text-md p-1 ">
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                    <Link href='/blog' className='text-blue-400  texwt-gray-400 mx-2 text-md text-right mt-2 hover:text-blue-600'>View More Blogs</Link>
                </div>
            </div >
        </div>
    );
};

export default Blog;


