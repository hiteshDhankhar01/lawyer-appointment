import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="bg-green-500 text-white py-4 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">
            Lawyer Appointment App
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:underline" href="/" >
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/login" >
                Login
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/register" >
                Rigster
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
