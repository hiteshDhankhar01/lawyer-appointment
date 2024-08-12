import React, { useEffect, useState } from 'react';
import AppointmentCard from '@/components/AppointmentCard2';
import { AppointmentType } from "@/lib/type";

const AppointmentsPage: React.FC = () => {
    const [appointments, setAppointments] = useState<IAppointment[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch('/api/appointments'); // Adjust the endpoint as needed
            const data = await response.json();
            if (response.ok) {
                setAppointments(data.data);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="min-h-screen bg-gray-800 p-8">
            <h1 className="text-4xl font-bold text-white mb-8">Appointments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {appointments.map((appointment) => (
                    <AppointmentCard key={appointment._id} appointment={appointment} />
                ))}
            </div>
        </div>
    );
};

export default AppointmentsPage;
