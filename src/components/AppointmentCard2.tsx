import React from 'react';
import { AppointmentType} from '@/types';

const AppointmentCard2: React.FC<{ appointment: AppointmentType}> = ({ appointment }) => {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-white rounded-2xl p-6 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl border-b border-gray-500">
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-green via-neon-pink to-neon-blue rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-2xl font-bold text-white">{appointment.service.charAt(0).toUpperCase()}</span>
                </div>
                <div className="ml-4">
                    <h3 className="text-3xl font-semibold">{appointment.name}</h3>
                    <p className="text-sm text-gray-400">{appointment.email}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="mb-2"><span className="font-semibold">Phone:</span> {appointment.phoneNo}</p>
                <p className="mb-2"><span className="font-semibold">Date:</span> {new Date(appointment.date).toLocaleDateString()}</p>
                <p className="mb-2"><span className="font-semibold">Service:</span> {appointment.service}</p>
                <p className="mb-2"><span className="font-semibold">Status:</span> 
                    <span className={`px-2 py-1 rounded-full text-sm 
                        ${appointment.status === 'completed' ? 'bg-blue-500' : 
                          appointment.status === 'confirmed' ? 'bg-green-500' : 
                          appointment.status === 'canceled' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                        {appointment.status}
                    </span>
                </p>
                {appointment.message && <p className="mb-2"><span className="font-semibold">Message:</span> {appointment.message}</p>}
            </div>
        </div>
    );
};

export default AppointmentCard2;
