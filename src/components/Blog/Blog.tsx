"use client";

import { BlogType } from '@/lib/type';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type BlogProps = {
  blogs: BlogType[];
};

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const filteredData = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-between mb-6 text-gray-400 text-sm p-4 sm:p-6 md:p-8 py-6 sm:py-8 md:py-12">
          <div className="flex items-start mb-4">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-all duration-300 font-semibold hover:underline hover:scale-110">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="font-medium text-gray-300">All Blogs</span>
          </div>
          <div className="relative w-full sm:w-3/4 lg:w-1/2 mb-6">
            <input
              type="text"
              placeholder="Search Blogs..."
              className="w-full py-3 px-4 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg shadow-inner placeholder-gray-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {currentRows.length > 0 ? (
            currentRows.map((blog) => (
              <div key={blog._id} className="w-full sm:w-80 bg-gray-800 text-white rounded-md shadow-lg p-4 relative overflow-hidden border border-gray-700" >
                <div className="relative w-full h-48">
                  <Image
                    src={blog.image || '/default-image.jpg'}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="rounded-md object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mt-2">{blog.title}</h3>
                <span className="text-xs sm:text-sm text-gray-400 block mt-2">
                  {new Date(blog.createAt).toLocaleDateString('en-US', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </span>
                <p className="text-gray-300 text-sm sm:text-base mt-2">
                  {blog.excerpt.substring(0, 75)}...
                </p>
                <div className="text-end w-full mt-4">
                  <Link href={`/blog/${blog._id}`} className="inline-block py-2 px-4 sm:px-6 rounded-md border border-gray-100 text-gray-100 shadow-lg hover:bg-gray-700 hover:text-white transition duration-300">
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="mx-auto flex flex-col items-center justify-center w-full text-gray-400">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4">No Results Found</h2>
            </div>
          )}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-300 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg hover:bg-gray-700 hover:border-blue-500 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-300 border border-gray-700 rounded-lg bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg hover:bg-gray-700 hover:border-blue-500 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>

  );
};

export default Blog;