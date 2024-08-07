"use client";

import AppointmentCard from '@/components/AppointmentCard';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';

const AppointmentPage = () => {
    const { state } = useAuth();
    const [userId, setUserId] = useState('');
    const [appointments, setAppointments] = useState([]); // Changed to an array

    useEffect(() => {
        if (state.user) {
            setUserId(state.user._id);
        }
    }, [state.user]);

    useEffect(() => {
        if (userId) {
            fetchData();
        }
    }, [userId]);

    const fetchData = async () => {
        console.log("Fetching data...");
        try {
            const response = await fetch(`/api/appointments/${userId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();

            if (!response.ok) {
                alert("Something went wrong");
                return;
            }
            console.log(data);

            setAppointments(data.data); // Accessing the array inside `data`
        } catch (error) {
            console.error("Failed to fetch appointment data:", error);
        }
    };

    return (
        <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <AppointmentCard key={appointment._id} appointment={appointment} />
                ))
            ) : (
                <div className="text-white text-lg">
                    No appointment found for {userId}
                </div>
            )}
        </div>
    );
};

export default AppointmentPage;


// import AppointmentCard from '@/components/AppointmentCard';
// import React, { useEffect, useState } from 'react'
// import { useAuth } from '@/context/authContext';
// import { headers } from 'next/headers';

// const appointment = () => {
//     const { state } = useAuth();
//     const [userId, setUserId] = useState('');
//     const [appointment,setAppoinment] = useState({})

//     // const router = useRouter();
//     useEffect(() => {
//         if (state.user) {
//             setUserId(state.user._id);
//         }
//     }, [state.user]);



//     // const appointment = {
//     //     _id: "66afa2f6540ef91f62d05487",
//     //     userId: "66a0a031c092324802fb43ea",
//     //     name: "kararn",
//     //     email: "kararn@gmail.com",
//     //     phoneNo: 45345345,
//     //     date: "2024-08-15",
//     //     service: "family-law",
//     //     status: "pending",
//     //     message: "hi"
//     // };

//     const fetchData = async () => {
//         try {
//             const responce = await fetch(`/api/appintments/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             })

//             const data = await responce.json()

//             if (!responce.ok) {
//                 console.log("somethisngis wrong")
//             }

//             console.log(data)
//             setAppoinment(data.appintment)
//         } catch (error) {

//         }


//     }


//     return (
//         <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//             <AppointmentCard appointment={appointment} />

//             <div>No apointmentfound </div>
//         </div>
//     );
// }


// export default appointment
