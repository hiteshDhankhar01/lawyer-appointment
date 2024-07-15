import React from 'react';

const BookAppointment: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="wrapper bg-black bg-opacity-75 rounded-lg shadow-lg p-8 w-full max-w-md">
                <form className="space-y-4">
                    <h2 className="text-3xl text-white font-bold">Book Appointment</h2>

                    {/* Name Input */}
                    <div className="input-text relative">
                        <input type="text" className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-900 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your name</label>
                    </div>

                    {/* Email Input */}
                    <div className="input-text relative">
                        <input type="email" className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-900 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your email</label>
                    </div>

                    {/* Phone Input */}
                    <div className="input-text relative">
                        <input type="tel" className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-900 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your phone number</label>
                    </div>

                    {/* Appointment Date Input */}
                    <div className="input-text relative">
                        <input type="date" className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-900 text-white outline-none focus:ring focus:ring-blue-300" />
                        <label className="absolute left-2 top-2 text-white text-sm">Select appointment date</label>
                    </div>

                    {/* Message Input */}
                    <div className="input-text relative">
                        <textarea className="w-full py-2 px-3 rounded-lg bg-gray-900 text-white outline-none focus:ring focus:ring-blue-300" rows={4}></textarea>
                        <label className="absolute left-2 top-2 text-white text-sm">Enter your message (optional)</label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;
