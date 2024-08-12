"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';f
import { useAuth } from "@/context/authContext"
import { RegisterFormDataType } from '@/lib/type';

const Register: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormDataType>({
        name: '',
        email: '',
        password: '',
        gender: ''
    });
    const router = useRouter();
    const { dispatch } = useAuth();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action: 'register', ...formData }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                console.log(data);
                const user = JSON.stringify(data.newUser);
                const token = data.token;
                localStorage.setItem('user', user);
                localStorage.setItem('token', token);
                dispatch({ type: "LOGIN_SUCCESS", payload: { user: data.user, token } });
                router.push('/');
            } else {
                console.error('Error message:', data.error);
                toast.error(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Server error:', error);
            toast.error('Server error. Please try again later.');
        }
    };
    return (
        <div className="relative flex items-center justify-center h-full">
            <div className="flex items-center justify-center backdrop-blur-lg rounded-xl shadow-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <div className="p-10 rounded-lg">
                    <div className="logo text-center mb-4">
                        <h2 className="text-xl font-bold tracking-wider text-neon">LawyerMeet</h2>
                    </div>
                    <h2 className="text-center mb-4 text-lg">Create Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                id="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <select
                                className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option className='bg-gray-900' value="" disabled>Select Your Gender</option>
                                <option className='bg-gray-900' value="male">Male</option>
                                <option className='bg-gray-900' value="female">Female</option>
                                <option className='bg-gray-900' value="other">Other</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="btn w-full mb-4 py-3 rounded-full bg-gray-900 text-white shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center mt-6 text-gray-300">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 border-b border-blue-500 transition duration-300">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;