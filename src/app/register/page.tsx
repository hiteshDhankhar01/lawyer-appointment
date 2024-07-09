import Link from 'next/link';
import React from 'react';

const Register: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center  bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="wrapper bg-blue-900 bg-opacity-50 rounded-lg shadow-lg p-8 w-full max-w-md">
                <form className="space-y-4">
                    <h2 className="text-3xl text-white font-bold">Register</h2>

                    <div className="input-text relative">
                        <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your Name</label>
                    </div>
                    <div className="input-text relative">
                        <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your email</label>
                    </div>

                    <div className="input-text relative">
                        <input type="password" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your password</label>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-white text-sm">
                            <input type="checkbox" className="mr-1" />
                            Remember me
                        </label>
                        <a href="#" className="text-white text-sm">Forgot password?</a>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">Log in</button>

                    <div className="text-center">
                        <p className="text-white text-sm">Already have a account? <Link href="/login" className="text-blue-300 hover:underline">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
