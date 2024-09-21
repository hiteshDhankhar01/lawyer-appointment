"use client";

import { useAuth } from '@/context/authContext';
import { AppointmentType } from '@/lib/type';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface AppointmentFormProps {
    appointment: AppointmentType;
    onUpdateSuccess: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ appointment, onUpdateSuccess }) => {
    const { state } = useAuth();
    const token = state.token
    const [formData, setFormData] = useState<Partial<AppointmentType>>({});
    const router = useRouter();

    useEffect(() => {
        const formatAppointmentDate = new Date(appointment.appointmentDate)
            .toISOString()
            .slice(0, 16);

        setFormData({
            _id: appointment._id,
            name: appointment.name,
            email: appointment.email,
            appointmentDate: formatAppointmentDate,
            service: appointment.service,
            message: appointment.message,
        });
    }, [appointment]);


    const handleUpdateAppointment = async () => {
        if (!formData._id) return;

        try {
            const response = await fetch(`/api/appointments/${formData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Error updating appointment:", data.message || "Unknown error");
                throw new Error(data.message || "Failed to update appointment.");
            }

            toast.success("Appointment updated successfully!");
            onUpdateSuccess();
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
        if (!formData._id) return;

        try {
            const response = await fetch(`/api/appointments/${formData._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Error canceling appointment:", data.message || "Unknown error");
                toast.error(data.message || "Failed to cancel appointment.");
                return;
            }
            toast.success("Appointment canceled successfully!");
            router.push("/");
        } catch (error) {
            console.error("Failed to cancel appointment:", error);
            toast.error("An error occurred while canceling the appointment.");
        }
    };

    return (
        <div className="max-w-[30rem] bg-gray-800 rounded-lg shadow-xl p-6 absolute right-0 m-4">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                Appointment Update
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        className="cursor-not-allowed w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2"
                        disabled
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        className="cursor-not-allowed w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2"
                        disabled
                    />
                </div>
                <div className='col-span-2'>
                    <label className="block text-sm font-medium text-gray-300 mb-1 ">Date</label>
                    <input
                        type="datetime-local"
                        name="appointmentDate"
                        value={formData.appointmentDate || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Service</label>
                    <input
                        type="text"
                        name="service"
                        value={formData.service || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                        name="message"
                        value={formData.message || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2"
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-between">
                <button
                    onClick={handleCancel}
                    className="px-4 py-2 rounded border border-red-500 text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                    Cancel Appointment
                </button>
                <button
                    onClick={handleUpdateAppointment}
                    className="px-4 py-2 rounded border border-blue-500 text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
                    Update Appointment
                </button>
            </div>
        </div>
    );
}

export default AppointmentForm;
