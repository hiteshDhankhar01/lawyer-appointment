import React from 'react'
import Link from "next/link"
import { AppointmentType } from '@/lib/type';

type AppointmentProps = {
    appointment: AppointmentType;
};

const AppointmentCard: React.FC<AppointmentProps> = ({ appointment }) => {
    return (
        <div className="relative bg-gradient-to-r from-transparent px-10 via-gray-950 to-transparent text-white mt-10 p-4 shadow-lg">
            <p className="mb-2 text-lg">
                You have scheduled an appointment for
                <span className="font-semibold ml-2">
                    {new Date(appointment.appointmentDate).toLocaleDateString('en-US', {
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                    })}
                </span>
            </p>
            <p className="mb-2 text-lg">
                Status:
                <span className={`inline-block ml-2 px-3 py-1 rounded-full text-sm ${appointment?.status === 'Complete' ? 'bg-blue-600' : appointment?.status === 'Schedule' ? 'bg-green-600' : appointment?.status === 'Cancel' ? 'bg-red-600' : 'bg-yellow-600'}`}>
                    {appointment.status}
                </span>
            </p>
            <Link href='/appointment/details' className="inline-block mt-4 px-4 py-2 text-white rounded-full shadow-md hover:bg-gray-200 bg-transparent border-[.1px] border-white hover:text-black transition duration-500 backdrop-blur-sm">
                More Details
            </Link>
        </div>
    );
};

export default AppointmentCard;
