import React from 'react';
import Link from 'next/link';

const BookAppointment: React.FC = () => {
    return (
        <div className="relative min-h-screen text-white bg-cover bg-center overflow-scroll" style={{ backgroundImage: 'url(/bg.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative flex items-center justify-center h-full m-4 px-4">
                <div className="flex items-center justify-center backdrop-blur-lg rounded-xl shadow-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                    <div className="p-8 rounded-lg amax-w-2xl mx-auto w-full ">
                        <div className="logo text-center mb-6">
                            <h2 className="text-2xl font-bold tracking-wider text-neon">LawyerMeet</h2>
                        </div>
                        <h2 className="text-center mb-6 text-xl font-semibold">Book an Appointment</h2>
                        <form>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                <div className="col-span-1">
                                    <input
                                        type="text"
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        required
                                    />
                                </div>
                                <div className="col-span-1">
                                    <input
                                        type="email"
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>
                                <div className="col-span-1">
                                    <input
                                        type="text"
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        required
                                    />
                                </div>
                                <div className="col-span-1">
                                    <input
                                        type="date"
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="appointmentDate"
                                        name="appointmentDate"
                                        required
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <select
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="service"
                                        name="service"
                                        required
                                    >
                                        <option value="">Select Service</option>
                                        <option value="family-law">Family Law</option>
                                        <option value="criminal-defense">Criminal Defense</option>
                                        <option value="estate-planning">Estate Planning</option>
                                        <option value="corporate-law">Corporate Law</option>
                                    </select>

                                </div>
                            </div>
                            <div className='mb-6'>
                                <textarea
                                    className="form-control w-full p-3 border border-gray-500 rounded-lg bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                    id="message"
                                    name="message"
                                    placeholder="Enter Your Message"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn w-full py-3 rounded-full border transition duration-300 bg-gray-900 hover:scale-105 hover:shadow-lg"
                            >
                                Book Appointment
                            </button>
                        </form>
                        <p className="text-center mt-6 text-gray-300">
                            Go back to{' '}
                            
                            <Link href="/" className="text-blue-500 border-b border-blue-500 ">
                                Home
                            </Link>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;

