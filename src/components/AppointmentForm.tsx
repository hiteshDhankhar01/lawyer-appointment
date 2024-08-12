import React from 'react';
import { AppointmentType } from "@/lib/type";

interface AppointmentFormProps {
    appointment: IAppointment;
    formData: Partial<IAppointment>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCancel: () => void;
    handleUpdateAppointment: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
    appointment,
    formData,
    handleChange,
    handleCancel,
    handleUpdateAppointment,
}) => (
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email || appointment.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone No.</label>
                <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo || appointment.phoneNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date || appointment.date.split('T')[0]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                />
            </div>
            <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1">Service</label>
                <input
                    type="text"
                    name="service"
                    value={formData.service || appointment.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                />
            </div>
            <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                    name="message"
                    value={formData.message || appointment.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 "
                />
            </div>
        </div>
        <div className="mt-6 flex justify-between">
            <button
                onClick={handleCancel}
                className="px-4 py-2 rounded border border-red-500 text-red-500 shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
                Cancel Booking
            </button>
            <button
                onClick={handleUpdateAppointment}
                className="px-4 py-2 rounded border border-blue-500 text-blue-500 shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
                Update Appointment
            </button>
        </div>
    </div>
);

export default AppointmentForm;
