"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/authContext';
import servicesData from '@/data/services.json';

const CreateAppointment: React.FC = () => {
    const { state } = useAuth();
    const userId = state.user?._id
    const token = state.token
    const [formData, setFormData] = useState({
        name: state.user?.name,
        email: state.user?.email,
        phoneNo: '',
        appointmentDate: '',
        service: '',
        message: ''
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (new Date(formData.appointmentDate) < new Date()) {
            toast.error('Appointment date cannot be in the past.');
            return;
        }
    
        try {
            const response = await fetch(`/api/appointments/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ ...formData })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success('Appointment booked successfully!');
                router.push('/');
            } else {
                toast.error(data.message || 'Failed to book appointment.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Internal error');
        }
    };
    

    return (
        <div className="relative min-h-screen text-white bg-cover bg-center overflow-scroll" style={{ backgroundImage: 'url(/bg.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative flex items-center justify-center h-full m-4 px-4">
                <div className="flex items-center justify-center backdrop-blur-lg rounded-xl shadow-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                    <div className="p-8 rounded-lg max-w-2xl mx-auto w-full">
                        <div className="logo text-center mb-6">
                            <h2 className="text-2xl font-bold tracking-wider text-neon">LawyerMeet</h2>
                        </div>
                        <h2 className="text-center mb-6 text-xl font-semibold">Book an Appointment</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                                <div className="col-span-1">
                                    <input
                                        type="text"
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled
                                    />
                                </div>
                                <div className="col-span-1">
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
                                <div className="col-span-2">
                                    <input
                                        type="datetime-local"
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="appointmentDate"
                                        name="appointmentDate"
                                        value={formData.appointmentDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <select
                                        className="form-control w-full p-3 border border-gray-500 rounded-full bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option className='bg-gray-900' value="">Select Service</option>
                                        {servicesData.map((service,index)=>(
                                            <option  className='bg-gray-900' key={index} value={service.title}>{service.title}</option>
                                        ))}
                                        
                                        <option className='bg-gray-900' value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-6'>
                                <textarea
                                    className="form-control w-full p-3 border border-gray-500 rounded-lg bg-transparent focus:outline-none focus:border-gray-300 transition duration-300"
                                    id="message"
                                    name="message"
                                    placeholder="Enter Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
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
                            <Link href="/" className="text-blue-500 border-b border-blue-500">
                                Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CreateAppointment;
