import AppointmentCard from '@/components/AppointmentCard';
import React from 'react';

const page34 = () => {
    const appointment = {
        _id: "66afa2f6540ef91f62d05487",
        userId: "66a0a031c092324802fb43ea",
        name: "kararn",
        email: "kararn@gmail.com",
        phoneNo: 45345345,
        date: "2024-08-15",
        service: "family-law",
        status: "pending",
        message: "hi"
    };
    const appointment2 = {
        _id: "66afa2f6540ef91f62d05487",
        userId: "66a0a031c092324802fb43ea",
        name: "kararn",
        email: "kararn@gmail.com",
        phoneNo: 45345345,
        date: "2024-08-15",
        service: "family-law",
        status: "pendittng",
        message: "hi"
    };
    const appointment3 = {
        _id: "66afa2f6540ef91f62d05487",
        userId: "66a0a031c092324802fb43ea",
        name: "kararn",
        email: "kararn@gmail.com",
        phoneNo: 45345345,
        date: "2024-08-15",
        service: "family-law",
        status: "approved",
        message: "hi"
    };

    return (
        <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <AppointmentCard appointment={appointment} />
            <AppointmentCard appointment={appointment2} />
            <AppointmentCard appointment={appointment3} />
            <AppointmentCard appointment={appointment} />
        </div>
    );
}

export default page34;
