"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { IAppointment } from '@/models/Appointment';
import { toast } from 'react-toastify';
import Link from 'next/link';
import AppointmentsTable from '@/components/AppointmentsTable';

// Utility function to format ISO date to YYYY-MM-DD
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};

const AppointmentPage = () => {
    const { state } = useAuth();
    const [userId, setUserId] = useState<string>('');
    const [appointment, setAppointment] = useState<IAppointment | null>(null);
    const [formData, setFormData] = useState<Partial<IAppointment>>({});

    useEffect(() => {
        if (state.user) {
            setUserId(state.user._id);
        }
    }, [state.user]);

    useEffect(() => {
        if (userId) {
            fetchAppointment();
        }
    }, [userId]);

    const fetchAppointment = async () => {
        try {
            const response = await fetch(`/api/appointments/${userId}`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Error fetching appointment:", data.message || "Unknown error");
                return;
            }

            // Convert date to YYYY-MM-DD format
            const formattedAppointment = {
                ...data.data,
                date: formatDate(data.data.date),
            };

            setAppointment(formattedAppointment);
            console.log(formattedAppointment);
        } catch (error) {
            console.error("Failed to fetch appointment:", error);
        }
    };

    const handleUpdateAppointment = async () => {
        if (!appointment) return;

        try {
            const response = await fetch(`/api/appointments/${appointment._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Error updating appointment:", data.message || "Unknown error");
                throw new Error("Failed to update appointment.");
            }

            // Update the local state with the updated appointment
            setAppointment(data.data);
            toast.success("Appointment updated successfully!");
        } catch (error) {
            console.error("Failed to update appointment:", error);
            toast.error("An error occurred while updating the appointment.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = async () => {
        if (!appointment) return;
        try {
            const response = await fetch(`/api/appointments/${appointment._id}`, {
                method: 'DELETE',
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Error canceling appointment:", data.message || "Unknown error");
                toast.error(data.message || "Failed to cancel appointment.");
                return;
            }

            setAppointment(null);
            toast.success("Appointment canceled successfully!");
        } catch (error) {
            console.error("Failed to cancel appointment:", error);
            toast.error("An error occurred while canceling the appointment.");
        }
    };

    return (
        <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 min-h-screen'>
            <div className='container mx-auto flex relative bg-gray-900 rounded-lg'>
                <div className='w-1/2 p-4 pr-6'>
                    <div className='flex items-center mb-2'>
                        <Link href="/" className='text-blue-400 hover:text-blue-300 transition duration-300'>
                            Home
                        </Link>
                        <span className='text-gray-400 mx-2'>/</span>
                        <span className='text-gray-300'>Appointment</span>
                    </div>
                    <h2 className='text-4xl  text-white mb-4'>
                        DETAILS OF <span>APPOINTMENT</span>
                    </h2>
                    {appointment ? (
                        <>
                            <p className='text-gray-400 mb-8'>
                                Here are the details of your appointment. Please take a moment to verify the information and make sure everything is accurate. If there are any adjustments needed or questions you have, don't hesitate to reach out. We are here to assist you at every step.
                            </p>
                            <div className="text-sm font-medium px-3 py-1 rounded-full text-white mb-6">
                                <span>Status:</span>
                                <span className={`inline-block ml-2 px-3 py-1 rounded-full text-sm ${appointment.status === 'completed' ? 'bg-blue-600' :
                                    appointment.status === 'confirmed' ? 'bg-green-600' :
                                        appointment.status === 'canceled' ? 'bg-red-600' :
                                            'bg-yellow-600'
                                    }`}>
                                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                                </span>
                            </div>
                        </>
                    ) : (
                        <p className='text-gray-400 mb-8'>Loading appointment details...</p>
                    )}
                </div>

                {appointment && (
                    <div className='max-w-[30rem] bg-gray-800 rounded-lg shadow-xl p-6 absolute right-0 m-4'>
                        <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                            Appointment Update
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name || appointment.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email || appointment.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Phone No.</label>
                                <input
                                    type="text"
                                    name="phoneNo"
                                    value={formData.phoneNo || appointment.phoneNo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date || formatDate(appointment.date)}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Service</label>
                                <input
                                    type="text"
                                    name="service"
                                    value={formData.service || appointment.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message || appointment.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 rounded border border-red-500 text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                                Cancel Booking
                            </button>
                            <button
                                onClick={handleUpdateAppointment}
                                className="px-4 py-2 rounded border border-blue-500 text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
                                Update Appointment
                            </button>
                        </div>
                    </div>
                )}
            </div>
            < AppointmentsTable/>
        </div>
    );
}

export default AppointmentPage;