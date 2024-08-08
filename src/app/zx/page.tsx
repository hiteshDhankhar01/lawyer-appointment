"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import { IAppointment } from '@/models';
import { toast } from 'react-toastify';
import { error } from 'console';

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

            if (!response.ok) {
                const data = await response.json();
                console.error("Error canceling appointment:", data.message || "Unknown error");
                alert("Failed to cancel appointment.");
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
            <div className='max-w-4xl mx-auto flex relative bg-gray-900 rounded-lg'>
                <div className='w-1/2 p-4 pr-12'>
                    <h2 className='text-4xl font-semibold text-white mb-4'>
                        DETAILS OF <span className='font-bold'>APPOINTMENT</span>
                    </h2>
                    {appointment ? (
                        <>
                            <p className='text-gray-400 mb-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta animi sunt incidunt ipsum. Aspernatur, exercitationem ratione? Alias minima dolorum, debitis corrupti ed ad sit facere cum aspernatur ullam atque. In, at atque?
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
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email || appointment.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Phone No.</label>
                                <input
                                    type="text"
                                    name="phoneNo"
                                    value={formData.phoneNo || appointment.phoneNo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date || appointment.date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Service</label>
                                <input
                                    type="text"
                                    name="service"
                                    value={formData.service || appointment.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message || appointment.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={handleCancel}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                                Cancel Booking
                            </button>
                            <button
                                onClick={handleUpdateAppointment}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Update Appointment
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AppointmentPage;


// "use client";

// import React, { useState } from 'react';
// import { IAppointment } from '@/models';
// import Link from "next/link";

// const AppointmentCard: React.FC = () => {
//     const [appointment, setAppointment] = useState<IAppointment>({
//         _id: "66afa2f6540ef91f62d05487",
//         userId: "66a0a031c092324802fb43ea",
//         name: "kararn",
//         email: "kararn@gmail.com",
//         phoneNo: 45345345,
//         date: "2024-08-15",
//         service: "family-law",
//         status: "pending",
//         message: "hi"
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setAppointment(prev => ({ ...prev, [name]: value }));
//     };

//     const handleCancel = () => {
//         // Logic to cancel the appointment
//         console.log("Appointment canceled");
//     };

//     return (
//         <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 min-h-screen'>
//             <div className='max-w-4xl mx-auto flex relative bg-gray-900 rounded-lg'>
//                 <div className='w-1/2 p-4 pr-12'>
//                     <h2 className='text-4xl font-semibold text-white mb-4'>
//                         DETAILS OF <span className='font-bold'>APPOINTMENT</span>
//                     </h2>
//                     <p className='text-gray-400 mb-8'>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta animi sunt incidunt ipsum. Aspernatur, exercitationem ratione? Alias minima dolorum, debitis corrupti ed ad sit facere cum aspernatur ullam atque. In, at atque?
//                     </p>
//                     <div className="text-sm font-medium px-3 py-1 rounded-full text-white mb-6">
//                         <span>Status:</span>
//                         <span className={`inline-block ml-2 px-3 py-1 rounded-full text-sm ${appointment.status === 'completed' ? 'bg-blue-600' :
//                             appointment.status === 'confirmed' ? 'bg-green-600' :
//                                 appointment.status === 'canceled' ? 'bg-red-600' :
//                                     'bg-yellow-600'
//                             }`}>
//                             {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
//                         </span>
//                     </div>
//                 </div>

//                 <div className='max-w-[30rem] bg-gray-800 rounded-lg shadow-xl p-6 absolute right-0 m-4'>
//                     <h3 className="text-2xl font-semibold text-white mb-4 text-center">
//                         Appointment Update
//                     </h3>
//                     <div className="grid grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={appointment.name}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={appointment.email}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300 mb-1">Phone No.</label>
//                             <input
//                                 type="text"
//                                 name="phoneNo"
//                                 value={appointment.phoneNo}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={appointment.date}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <label className="block text-sm font-medium text-gray-300 mb-1">Service</label>
//                             <input
//                                 type="text"
//                                 name="service"
//                                 value={appointment.service}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div className="col-span-2">
//                             <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
//                             <textarea
//                                 name="message"
//                                 value={appointment.message}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     </div>
//                     <div className="mt-6 flex justify-between">
//                         <button
//                             onClick={handleCancel}
//                             className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
//                             Cancel Booking
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                             Update Appointment
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AppointmentCard;



// import AppointmentCard from '@/components/AppointmentCard2';
// import React from 'react';

// const page34 = () => {
//     const appointment = {
//         _id: "66afa2f6540ef91f62d05487",
//         userId: "66a0a031c092324802fb43ea",
//         name: "kararn",
//         email: "kararn@gmail.com",
//         phoneNo: 45345345,
//         date: "2024-08-15",
//         service: "family-law",
//         status: "pending",
//         message: "hi"
//     };
//     const appointment2 = {
//         _id: "66afa2f6540ef91f62d05487",
//         userId: "66a0a031c092324802fb43ea",
//         name: "kararn",
//         email: "kararn@gmail.com",
//         phoneNo: 45345345,
//         date: "2024-08-15",
//         service: "family-law",
//         status: "pendittng",
//         message: "hi"
//     };
//     const appointment3 = {
//         _id: "66afa2f6540ef91f62d05487",
//         userId: "66a0a031c092324802fb43ea",
//         name: "kararn",
//         email: "kararn@gmail.com",
//         phoneNo: 45345345,
//         date: "2024-08-15",
//         service: "family-law",
//         status: "approved",
//         message: "hi"
//     };

//     return (
//         <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//             <AppointmentCard appointment={appointment} />
//             <AppointmentCard appointment={appointment2} />
//             <AppointmentCard appointment={appointment3} />
//             <AppointmentCard appointment={appointment} />
//         </div>
//     );
// }

// export default page34;
