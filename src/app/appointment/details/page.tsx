"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { AppointmentType } from "@/lib/type";
import Link from 'next/link';
import AppointmentsTable from '@/components/Appointment/AppointmentsTable';
import UpdateAppointment from '@/components/Appointment/UpdateAppointment';

const AppointmentPage = () => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const { state } = useAuth();
    const userId = state.user?._id;
    const token = state.token;
    const [appointment, setAppointment] = useState<AppointmentType | null>(null);
    const [previousAppointments, setPreviousAppointments] = useState<AppointmentType[]>([]);

    const fetchAppointment = async () => {
        if (!userId || !token) return;

        try {
            const response = await fetch(`/api/appointments/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();

            if (!response.ok) {
                console.error("Error fetching appointment:", data.message || "Unknown error");
                return;
            }

            const formattedAppointment = {
                ...data.upcomingAppointment,
            };
            setAppointment(formattedAppointment);
            setPreviousAppointments(data.pastAppointments);
        } catch (error) {
            console.error("Failed to fetch appointment:", error);
        }
    };

    useEffect(() => {
        if (userId && token) {
            fetchAppointment();
            const intervalId = setInterval(() => {
                fetchAppointment();
            }, 5 * 60 * 1000);
            return () => clearInterval(intervalId);
        }
    }, [userId, token]);

    const handleUpdateSuccess = () => {
        if (userId) {
            fetchAppointment();
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
                    <h2 className='text-4xl text-white mb-4'>
                        DETAILS OF <span>APPOINTMENT</span>
                    </h2>
                    {appointment ? (
                        <>
                            <p className='text-gray-400 mb-8'>
                                Here are the details of your appointment. Please take a moment to verify the information and make sure everything is accurate. If there are any adjustments needed or questions you have, don&apos;t hesitate to reach out. We are here to assist you at every step.
                            </p>
                            <div className="text-sm font-medium px-3 py-1 rounded-full text-white mb-6">
                                <span>Status:</span>
                                <span className={`inline-block ml-2 px-3 py-1 rounded-full text-sm ${appointment?.status === 'Complete' ? 'bg-blue-600' :
                                    appointment?.status === 'Schedule' ? 'bg-green-600' :
                                        appointment?.status === 'Cancel' ? 'bg-red-600' :
                                            'bg-yellow-600'
                                    }`}>
                                    {appointment?.status ? appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1) : 'Unknown'}
                                </span>
                            </div>
                        </>
                    ) : (
                        <p className='text-gray-400 mb-8'>Loading appointment details...</p>
                    )}
                </div>
                {appointment && (
                    <UpdateAppointment appointment={appointment} onUpdateSuccess={handleUpdateSuccess} />
                )}
            </div>
            {previousAppointments.length > 0 ? (
                <AppointmentsTable data={previousAppointments} />
            ) : (
                <p className='text-gray-300 text-sm text-center mt-[15rem]'>No past appointments</p>
            )}
        </div>
    );
};

export default AppointmentPage;
