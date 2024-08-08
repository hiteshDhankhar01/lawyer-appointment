"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import AppointmentCard2 from '@/components/AppointmentCard2';
import { IAppointment } from '@/models';
import { Link } from 'lucide-react';

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

            setAppointment(data.data);
        } catch (error) {
            console.error("Failed to fetch appointment:", error);
        }
    };



    const handleUpdateAppointment = async () => {
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
                alert("Failed to update appointment.");
                return;
            }

            // Update the local state with the updated appointment
            setAppointment(data.data);
            alert("Appointment updated successfully!");
        } catch (error) {
            console.error("Failed to update appointment:", error);
            alert("An error occurred while updating the appointment.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 min-h-screen">
            <h1 className="text-4xl font-extrabold text-white mb-6">Your Appointment</h1>
            {appointment ? (
                <div className="flex flex-col items-center">
                    <AppointmentCard2 appointment={appointment} />
                </div>
            ) : (
                <div className="text-white text-lg">No appointment found</div>
            )}

            {appointment && (
                <div className="mt-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-white mb-4">Update Appointment</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleUpdateAppointment(); }}>
                        {['name', 'email', 'phoneNo', 'date', 'service', 'message'].map(field => (
                            <div className="mb-6" key={field}>
                                <label className="block text-white text-lg mb-2 capitalize">{field}</label>
                                {field === 'message' ? (
                                    <textarea
                                        name={field}
                                        value={formData[field] || appointment[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                ) : (
                                    <input
                                        type={field === 'date' ? 'date' : 'text'}
                                        name={field}
                                        value={formData[field] || appointment[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Update Appointment
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AppointmentPage;

export const AppointmentStatus = () => {
    return (
        <div className="relative bg-gradient-to-r from-transparent px-10 via-gray-950 to-transparent  text-white mt-10 p-4  shadow-lg">
            <p className="mb-2 text-lg">
                <span className="font-semibold">

                    You have scheduled an appointment for
                    {/* pending */}

                    {/* You have secured an appointment for */}
                    {/* approved */}

                    {/* Unfortunately, your appointment has been canceled for */}
                    {/* rejected  */}

                </span>
                 Monday, 5 October 2025
            </p>
            <p className="mb-2 text-lg">
                <span className="font-semibold">Status:</span>
                <span className="inline-block ml-2 px-3 py-1 rounded-full text-sm bg-yellow-500 animate-pulse">
                    pending
                </span>
            </p>
            <Link href='/appointment' className="inline-block mt-4 px-4 py-2  text-white rounded-full shadow-md hover:bg-gray-200 bg-transparent border-[.1px] border-white k hover:text-black transition duration-500 backdrop-blur-sm">
                More Details
            </Link>

        </div>
    )
}