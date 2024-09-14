"use client";

import React from 'react';
import { AppointmentType } from "@/lib/type";

interface AppointmentsTablePropsType {
    data: AppointmentType[];
}

const AppointmentsTable: React.FC<AppointmentsTablePropsType> = ({ data }) => {
    const appointments = data;

    return (
        <div className="overflow-x-auto mt-[15rem] container mx-auto">
            <div className="w-full shadow-lg rounded-lg bg-graay-900 p-4">
                <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
                    <thead>
                        <tr className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white">
                            <th className="py-4 px-6 border-b border-gray-600">Name / Email</th>
                            <th className="py-4 px-6 border-b border-gray-600">Date</th>
                            <th className="py-4 px-6 border-b border-gray-600">Service</th>
                            <th className="py-4 px-6 border-b border-gray-600">Status</th>
                            <th className="py-4 px-6 border-b border-gray-600">Message</th>
                            <th className="py-4 px-6 border-b border-gray-600">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment._id} className="hover:bg-gray-700 transition duration-200">
                                <td className="py-3 px-6 border-b border-gray-600 text-gray-200">
                                    <span className="block">{appointment.name}</span>
                                    <span className="block text-sm text-gray-400">{appointment.email}</span>
                                </td>
                                <td className="py-3 px-6 border-b border-gray-600 text-gray-200">
                                    {new Date(appointment.appointmentDate).toLocaleString()}
                                </td>
                                <td className="py-3 px-6 border-b border-gray-600 text-gray-200">
                                    {appointment.service}
                                </td>
                                <td className="py-3 px-6 border-b border-gray-600">
                                    <span
                                        className={`inline-block px-3 py-1 text-sm rounded-full font-semibold text-white
                                        ${appointment.status === 'Complete' ? 'bg-blue-500':
                                            appointment.status === 'Cancle' ? 'bg-red-500' : 'bg-yellow-500'}
                                        transition-colors duration-300`}
                                    >
                                        {appointment.status}
                                    </span>
                                </td>
                                <td className="py-3 px-6 border-b border-gray-600 text-gray-300">
                                    {appointment?.message || 'N/A'}
                                </td>
                                <td className="py-3 px-6 border-b border-gray-600 text-gray-300">
                                    {appointment?.notes || 'N/A'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentsTable
