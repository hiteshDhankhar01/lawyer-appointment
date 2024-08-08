import React from 'react'
import { IAppointment } from '@/models/Appointment'
import Link from "next/link"

const AppointmentCard: React.FC<{ appointment: IAppointment }> = ({ appointment }) => {

    return (
        <div className="relative bg-gradient-to-r from-transparent px-10 via-gray-950 to-transparent text-white mt-10 p-4 shadow-lg">
            <p className="mb-2 text-lg">
                <span className="mr-1">
                    You have scheduled an appointment for
                </span>
                <span className="font-semibold ">{new Date(appointment.date).toLocaleDateString('en-US', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                })}</span>

            </p>
            <p className="mb-2 text-lg">
                <span>Status:</span>
                <span className={`inline-block ml-2 px-3 py-1 rounded-full text-sm
                        ${appointment.status === 'completed' ? 'bg-blue-500' :
                        appointment.status === 'confirmed' ? 'bg-green-500' :
                            appointment.status === 'canceled' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                    {appointment.status}
                </span>
            </p>
            <Link href='/appointment' className="inline-block mt-4 px-4 py-2 text-white rounded-full shadow-md hover:bg-gray-200 bg-transparent border-[.1px] border-white hover:text-black transition duration-500 backdrop-blur-sm">
                More Details
            </Link>
        </div>
    )
}

export default AppointmentCard;
