"use client";

import React from 'react';
import Blogs from '@/data/blog.json';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';

const Blog = () => {
    return (
        <div className='text-white' id='blog'>
            <h2 className="text-3xl font-extrabold mb-6 text-center neon-text">Latest Blog Posts</h2>
            <div className="flex flex-col md:flex-row gap-8 p-6">
                {/* Left Side: Swiper Slider */}
                <div className="w-full md:w-2/3 relative">
                    <Swiper
                        spaceBetween={30}
                        autoplay={{ delay: 5000}}
                        className="mySwiper h-full"
                    >
                        {Blogs.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative min-h-[35rem] p-6 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black" style={{ backgroundImage: 'url(/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
                                    <div className="relative z-10 text-center">
                                        <h3 className="text-3xl font-bold text-white mb-4">{blog.title}</h3>
                                        <p className="text-gray-300 text-sm mb-6">{blog.excerpt}</p>
                                        <Link href={`/blog/${blog.id}`} className='inline-block py-2 px-6 rounded-full  hover:shadow-xl border border-blue-500 text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 backdrop-blur-lg'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right Side: Blog Cards */}
                <div className="w-full md:w-1/3 flex flex-col my-auto gap-3">
                    {Blogs.slice(0, 3).map((blog) => (
                        <div key={blog.id} className="relative flex bg-gray-900 rounded-lg shadow-lg min-h-40 ">
                            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 flex items-center justify-center w-1/3 rounded-l-lg">
                                <Image
                                    src="https://img.freepik.com/premium-photo/family-book-judge-s-gavel-made-paper-generative-ai-family-law_28914-29000.jpg"
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
                                    {blog.excerpt}
                                </h3>
                                <Link href={`/blog/${blog.id}`} className="mt-1 border border-blue-500 text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 w-fit px-4 rounded-full text-md p-1 ">
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
