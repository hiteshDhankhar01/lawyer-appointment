"use client"

import Link from 'next/link';
import Toast from './ui/Toast';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  const notify = () => toast.success("Wow so easy!");
  return (
    <header className="bg-gray-900 text-white border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <h1>LawyerMeet</h1>
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link href="/">
            <div className="hover:underline">Home</div>
          </Link>
          <Link href="/#about">
            <div className="hover:underline">About</div>
          </Link>
          <Link href="/contact">
            <div className="hover:underline">Contact</div>
          </Link>
        </nav>
        <div>
          <button className="px-4 py-2 rounded  bg- border border-white text-white  shadow-lg hover:bg-white hover:text-black transition duration-300  mr-4"   onClick={notify} >Toast</button>
          {showToast && (
            <Toast
              message="hi!"
              onClose={handleCloseToast}
            />
          )}

          <Link href="/login">
            <button className="px-4 py-2 rounded  bg- border border-white text-white  shadow-lg hover:bg-white hover:text-black transition duration-300  ">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
