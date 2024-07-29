"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '@/lib/store';
import Image from 'next/image';
import { toast } from 'react-toastify';

const Header = () => {
    const userName = useSelector((state) => state.user.name);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            dispatch(setUser(savedName));
        }
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(clearUser());
        localStorage.removeItem('userName');
        toast.success("Logged out successfully");
    };

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
                <div className='flex items-center'>
                    {userName ? (
                        <>
                            <button className="flex items-center px-2 rounded-lg border border-white text-white shadow-lg hover:bg-white hover:text-black transition duration-300 transform  mr-4  capitalize">
                                <Image
                                    src=""
                                    width={30}
                                    height={30}
                                    alt={userName.name[0].toUpperCase()}
                                    className='m-1 border rounded-full border-gray-400 font-bold mr-2 text-xl'
                                />
                                {userName.name}
                            </button>
                            <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-600 border border-white text-white shadow-lg hover:bg-red-700 transition duration-300">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login">
                            <button className="px-4 py-2 rounded bg-gray-900 border border-white text-white shadow-lg hover:bg-white hover:text-black transition duration-300">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;


// "use client";

// import Link from 'next/link';
// import Toast from './ui/Toast';
// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import Image from 'next/image';
// import { useSelector, useDispatch } from 'react-redux';
// import { clearUser } from '@/lib/store';

// const Header = () => {

//   const notify = () => toast.success("hi " + process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
//   return (
//     <header className="bg-gray-900 text-white border-b border-gray-800">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="text-xl font-bold">
//           <Link href="/">
//             <h1>LawyerMeet</h1>
//           </Link>
//         </div>
//         <nav className="flex space-x-6">
//           <Link href="/">
//             <div className="hover:underline">Home</div>
//           </Link>
//           <Link href="/#about">
//             <div className="hover:underline">About</div>
//           </Link>
//           <Link href="/contact">
//             <div className="hover:underline">Contact</div>
//           </Link>
//         </nav>
//         <div className='flex'>
//           <button className="flex items-center px-2  rounded-lg border border-white text-white shadow-lg hover:bg-white hover:text-black transition duration-300 transform  mr-4">
//             <Image
//               src=""
//               width={30}
//               height={30}
//               alt="H"
//               className='border rounded-full border-gray-400 font-bold mr-2 text-xl'
//             />
//             Hitesh
//           </button>
//           <Link href="/login">
//             <button className="px-4 py-2 rounded  bg- border border-white text-white  shadow-lg hover:bg-white hover:text-black transition duration-300  ">Login</button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
