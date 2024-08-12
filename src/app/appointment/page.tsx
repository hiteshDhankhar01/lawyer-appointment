"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { AppointmentType } from "@/lib/type";
import Link from 'next/link';
import AppointmentsTable from '@/components/AppointmentsTable';
import AppointmentForm from '@/components/AppointmentForm';

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};

const AppointmentPage = () => {
    const { state } = useAuth();
    const [appointment, setAppointment] = useState<AppointmentType | null>(null);
    const userId: string | null = state.user ? state.user._id : null;

    useEffect(() => {
        if (userId) {
            fetchAppointment();
        }
    }, []);

    const handleUpdateSuccess = () => {
        fetchAppointment();
    };

    const fetchAppointment = async () => {
        try {
            const response = await fetch(`/api/appointments/${userId}`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Error fetching appointment:", data.message || "Unknown error");
                return;
            }

            const formattedAppointment = {
                ...data.data,
                date: formatDate(data.data.date),
            };

            setAppointment(formattedAppointment);
        } catch (error) {
            console.error("Failed to fetch appointment:", error);
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
                                Here are the details of your appointment. Please take a moment to verify the information and make sure everything is accurate. If there are any adjustments needed or questions you have, don&apos;t hesitate to reach out. We are here to assist you at every step.
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
                    <AppointmentForm appointment={appointment} onUpdateSuccess={handleUpdateSuccess} />
                )}
            </div>
            < AppointmentsTable />
        </div>
    );
}

export default AppointmentPage;