'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { IAppointment } from '@/models/Appointment';

const AppointmentsTable: React.FC = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);
    const { state } = useAuth(); 
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        if (state.user) {
            setUserId(state.user._id);
        }
    }, [state.user]);

    useEffect(() => {
        const fetchAppointments = async () => {
            if (userId) {
                try {
                    const response = await fetch(`/api/appointments/${userId}/allExceptUpcoming`, {
                        method: 'GET',
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setAppointments(data.data);
                    } else {
                        console.error('Failed to fetch appointments');
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        };

        fetchAppointments();
    }, [userId]);

    return (
        <div className="overflow-x-auto mt-[12rem] container">
            {appointments.length > 0 ? (
                <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-md">
                    <thead className="bg-gray-900">
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Name</th>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Email</th>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Phone No</th>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Date</th>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Service</th>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Status</th>
                            <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment._id} className="hover:bg-gray-700">
                                <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.name}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.email}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.phoneNo}</td>
                                <td className="py-2 px-4 border-b border-gray-700 text-gray-300">
                                    {new Date(appointment.date).toLocaleString()}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.service}</td>
                                <td className={`py-2 px-4 border-b border-gray-700 ${getStatusClass(appointment.status)}`}>
                                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.message || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center text-gray-400">No appointments in the past</div>
            )}
        </div>
    );
};

// Helper function to add color coding to the status column
const getStatusClass = (status: string) => {
    switch (status) {
        case 'pending':
            return 'text-yellow-400';
        case 'confirmed':
            return 'text-blue-400';
        case 'completed':
            return 'text-green-400';
        case 'canceled':
            return 'text-red-400';
        default:
            return '';
    }
};

export default AppointmentsTable;

// import React from 'react';
// import appointments from '@/data/appointment.json';

// interface Appointment {
//     _id: string;
//     name: string;
//     email: string;
//     phoneNo: number;
//     date: string;
//     service: string;
//     status: string;
//     message?: string;
// }

// const AppointmentsTable: React.FC = () => {
//     return (
//         <div className="overflow-x-auto mt-[12rem] container">
//             <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-md">
//                 <thead className="bg-gray-900">
//                     <tr>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Name</th>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Email</th>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Phone No</th>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Date</th>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Service</th>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Status</th>
//                         <th className="py-2 px-4 border-b border-gray-700 text-gray-200">Message</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {appointments.map((appointment: Appointment) => (
//                         <tr key={appointment._id} className="hover:bg-gray-700">
//                             <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.name}</td>
//                             <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.email}</td>
//                             <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.phoneNo}</td>
//                             <td className="py-2 px-4 border-b border-gray-700 text-gray-300">
//                                 {new Date(appointment.date).toLocaleString()}
//                             </td>
//                             <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.service}</td>
//                             <td className={`py-2 px-4 border-b border-gray-700 ${getStatusClass(appointment.status)}`}>
//                                 {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
//                             </td>
//                             <td className="py-2 px-4 border-b border-gray-700 text-gray-300">{appointment.message || 'N/A'}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// // Helper function to add color coding to the status column
// const getStatusClass = (status: string) => {
//     switch (status) {
//         case 'pending':
//             return 'text-yellow-400';
//         case 'confirmed':
//             return 'text-blue-400';
//         case 'completed':
//             return 'text-green-400';
//         case 'canceled':
//             return 'text-red-400';
//         default:
//             return '';
//     }
// };

// export default AppointmentsTable;
