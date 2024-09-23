'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useAuth } from "@/context/authContext";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isGuest, setIsGuest] = useState<boolean>(false);
    const router = useRouter();
    const { dispatch } = useAuth();

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        dispatch({ type: "LOGIN_START" });

        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'login',
                email: isGuest ? 'johndoe@gmail.com' : email,
                password: isGuest ? 'guestpassword' : password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
            const user = JSON.stringify(data.user);
            const token = data.token;
            localStorage.setItem('user', user);
            localStorage.setItem('token', token);
            dispatch({ type: "LOGIN_SUCCESS", payload: { user: data.user, token } });
            router.push('/');
        } else {
            toast.error(data.message);
        }
    };

    useEffect(() => {
        if (isGuest) {
            handleSubmit(); 
        }
    }, [isGuest]);

    return (
        <div className="relative flex items-center justify-center h-full">
            <div className="flex items-center justify-center backdrop-blur-lg rounded-xl shadow-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <div className="p-10 rounded-lg">
                    <div className="logo text-center mb-4">
                        <h2 className="text-xl font-bold tracking-wider text-neon">LawyerMeet</h2>
                    </div>
                    <h2 className="text-center mb-4 text-lg">Sign Into Your Account</h2>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2 flex justify-between items-center">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                />
                                <label
                                    className="form-check-label ml-2"
                                    htmlFor="rememberMe"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link href="forget-3.html" className="text-decoration-none text-gray-300 hover:text-gray-100 transition duration-300">
                                Forget Password
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="btn w-full mb-4 py-3 rounded-full bordser transition duration-300 bg-gray-900 hover:scale-105 hover:shadow-lg"
                        >
                            Login
                        </button>
                    </form>
                    <button
                        onClick={() => setIsGuest(true)}
                        className="btn w-full mb-4 py-3 rounded-full transition duration-300 bg-gray-800 hover:scale-105 hover:shadow-lg"
                    >
                        Login as Guest
                    </button>
                    <p className="text-center mt-4 text-gray-300">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="text-blue-500 border-b border-blue-500 transition duration-300">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
