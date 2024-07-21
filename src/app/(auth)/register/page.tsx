
import Link from 'next/link';
import React from 'react';

const  Register: React.FC = () => {
    return (
        <div className="relative h-screen text-white bg-cover bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative flex items-center justify-center h-full">
                <div className="flex items-center justify-center backdrop-blur-lg  rounded-xl shadow-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                    <div className="p-10 rounded-lg">
                        <div className="logo text-center mb-4">
                            <h2 className="text-xl font-bold tracking-wider text-neon">LawyerMeet</h2>
                        </div>
                        <h2 className="text-center mb-4 text-lg">Create Your Account</h2>
                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Your Name"
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
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <select
                                    className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                    id="gender"
                                    name="gender"
                                    required
                                >
                                    <option value="" disabled selected>Select Your Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full mb-4 py-3 rounded-full bg-gray-900 text-white  shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
                            >
                                 Register
                            </button>
                        </form>
                        {/* Login Link */}
                        <p className="text-center mt-6 text-gray-300">
                            Already have an account?{' '}
                            <Link href="/login" className="text-gray-100 hover:text-white transition duration-300">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default  Register;


// import Link from 'next/link';
// import React from 'react';

// const Register: React.FC = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-cover bg-center  bg-gray-900">
//             <div className="wrapper border bg-opacity-50 rounded-lg shadow-lg p-8 w-full max-w-md">
//                 <form className="space-y-4">
//                     <h2 className="text-3xl text-white font-bold">Register</h2>

//                     <div className="input-text relative">
//                         <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
//                         <label className="absolute left-2 top-2 text-white text-sm">Enter your Name</label>
//                     </div>
//                     <div className="input-text relative">
//                         <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
//                         <label className="absolute left-2 top-2 text-white text-sm">Enter your email</label>
//                     </div>

//                     <div className="input-text relative">
//                         <input type="password" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
//                         <label className="absolute left-2 top-2 text-white text-sm">Enter your password</label>
//                     </div>

//                     <div className="flex items-center justify-between">
//                         <label className="flex items-center text-white text-sm">
//                             <input type="checkbox" className="mr-1" />
//                             Remember me
//                         </label>
//                         <a href="#" className="text-white text-sm">Forgot password?</a>
//                     </div>

//                     <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">Log in</button>

//                     <div className="text-center">
//                         <p className="text-white text-sm">Already have a account? <Link href="/login" className="text-blue-300 hover:underline">Login</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;


// import Link from 'next/link';
// import React from 'react';

// const Register: React.FC = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-cover bg-center  bg-gradient-to-r from-sky-500 to-indigo-500">
//             <div className="wrapper bg-blue-900 bg-opacity-50 rounded-lg shadow-lg p-8 w-full max-w-md">
//                 <form className="space-y-4">
//                     <h2 className="text-3xl text-white font-bold">Register</h2>

//                     <div className="input-text relative">
//                         <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
//                         <label className="absolute left-2 top-2 text-white text-sm">Enter your Name</label>
//                     </div>
//                     <div className="input-text relative">
//                         <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
//                         <label className="absolute left-2 top-2 text-white text-sm">Enter your email</label>
//                     </div>

//                     <div className="input-text relative">
//                         <input type="password" className="w-full py-2 pl-10 pr-3 rounded-lg bg-blue-800 text-white outline-none focus:ring focus:ring-blue-300" />
//                         <label className="absolute left-2 top-2 text-white text-sm">Enter your password</label>
//                     </div>

//                     <div className="flex items-center justify-between">
//                         <label className="flex items-center text-white text-sm">
//                             <input type="checkbox" className="mr-1" />
//                             Remember me
//                         </label>
//                         <a href="#" className="text-white text-sm">Forgot password?</a>
//                     </div>

//                     <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">Log in</button>

//                     <div className="text-center">
//                         <p className="text-white text-sm">Already have a account? <Link href="/login" className="text-blue-300 hover:underline">Login</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;
