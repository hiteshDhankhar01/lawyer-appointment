// components/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 border-t border-gray-800">
            <div className="container mx-auto flex flex-col items-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Lawyer Appointment App. All rights reserved.</p>
                <div className="flex gap-4 mt-2">
                    <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</Link>
                    <span className="text-gray-400"> | </span>
                    <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</Link>
                    <span className="text-gray-400"> | </span>
                    <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
