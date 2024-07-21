import Link from 'next/link';
import React from 'react';

const Custom404: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Square */}
            <div className="relative flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-[10vw] bg-gray-800 rounded-2xl text-white transform rotate-[-21deg] shadow-2xl flex justify-center items-center p-6 aspect-square">
                    404
                </h1>
            </div>
            {/* Texts */}
            <div className="z-50 p-4 md:w-1/2 text-center md:text-left">
                <h4 className="text-3xl mb-4">Oops! Page not found</h4>
                <p className="mb-6 text-gray-300">The page you are looking for does not exist. Go back to the main page or search.</p>
                <Link href="/" className="inline-block btn bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition-transform transform border hover:scale-105">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Custom404;
