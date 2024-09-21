"use client"

import Link from 'next/link';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/authContext'; // Adjust path if necessary
import { useState } from 'react';

const Header: React.FC = () => {
    const { state, dispatch } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
        toast.success("Logged out successfully");
    };
    

    return (
        <header className="bg-gray-900 text-white border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
                <Link href="/">
                    <h1>LawyerMeet</h1>
                </Link>
            </div>
            <div className="block md:hidden">
                <button onClick={handleMenuToggle} className="focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <nav className="hidden md:flex space-x-6">
                <Link href="/">
                    <div className="hover:underline">Home</div>
                </Link>
                <Link href="/#about">
                    <div className="hover:underline">About</div>
                </Link>
                <Link href="/blog">
                    <div className="hover:underline">Blog</div>
                </Link>
            </nav>
            <div className='hidden md:flex items-center'>
                {state.user ? (
                    <>
                        <div className="flex items-center px-2 rounded-lg border border-white text-white shadow-lg mr-4 capitalize cursor-default">
                            <div className='m-1 border rounded-full border-gray-400 font-bold mr-2 text-xl px-2'>
                                {state.user.name[0].toUpperCase()}
                            </div>
                            {state.user.name}
                        </div>
                        <button onClick={handleLogout} className="px-4 py-2 rounded border border-red-500 text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                            Logout
                        </button>
                    </>
                ) : (
                    <button className="px-4 py-2 rounded bg-gray-900 border border-white text-white shadow-lg hover:bg-white hover:text-black transition duration-300">
                        <Link href="/login">
                            Login
                        </Link>
                    </button>
                )}
            </div>
        </div>
        {menuOpen && (
            <div className="md:hidden" >
                <nav className="flex flex-col space-y-4 px-6 py-4">
                    <Link href="/">
                        <div className="hover:underline">Home</div>
                    </Link>
                    <Link href="/#about">
                        <div className="hover:underline">About</div>
                    </Link>
                    <Link href="/blog">
                        <div className="hover:underline">Blog</div>
                    </Link>
                    <div className="flex items-center">
                        {state.user ? (
                            <>
                                <button className="flex items-center px-2 rounded-lg border border-white text-white shadow-lg hover:bg-white hover:text-black transition duration-300 transform mr-4 capitalize">
                                    <span className='m-1 border rounded-full border-gray-400 font-bold mr-2 text-xl px-2'>
                                        {state.user.name[0].toUpperCase()}
                                    </span>
                                    {state.user.name}
                                </button>
                                <button onClick={handleLogout} className="px-4 py-2 rounded border border-red-500 text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button className="px-4 py-2 rounded bg-gray-900 border border-white text-white shadow-lg hover:bg-white hover:text-black transition duration-300">
                                <Link href="/login">
                                    Login
                                </Link>
                            </button>
                        )}
                    </div>
                </nav>
            </div>
        )}
    </header>
    );
};

export default Header;
