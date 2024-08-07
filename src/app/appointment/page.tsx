"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import AppointmentCard from '@/components/AppointmentCard';
import { IAppointment } from '@/models';

const AppointmentPage = () => {
    const { state } = useAuth();
    const [userId, setUserId] = useState<string>('');
    const [appointments, setAppointments] = useState<IAppointment[] | null>(null);
    const [selectedAppointment, setSelectedAppointment] = useState<IAppointment | null>(null);
    const [formData, setFormData] = useState<Partial<IAppointment>>({});

    useEffect(() => {
        if (state.user) {
            setUserId(state.user._id);
        }
    }, [state.user]);

    useEffect(() => {
        if (userId) {
            fetchAppointments();
        }
    }, [userId]);

    const fetchAppointments = async () => {
        try {
            const response = await fetch(`/api/appointments/${userId}`);
            const data = await response.json();

            if (!response.ok) {
                console.error("Error fetching appointments:", data.message || "Unknown error");
                return;
            }
            setAppointments(data.data);
        } catch (error) {
            console.error("Failed to fetch appointments:", error);
        }
    };

    const handleUpdateAppointment = async () => {
        try {
            const response = await fetch(`/api/appointments/${selectedAppointment?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("Error updating appointment:", data.message || "Unknown error");
                alert("Failed to update appointment.");
                return;
            }

            // Update the local state with the updated appointment
            setAppointments((prev) => prev?.map((app) =>
                app._id === selectedAppointment?._id ? data.data : app
            ) || null);
            alert("Appointment updated successfully!");
        } catch (error) {
            console.error("Failed to update appointment:", error);
            alert("An error occurred while updating the appointment.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5">
            {appointments ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appointments.map((appointment) => (
                        <div key={appointment._id} onClick={() => setSelectedAppointment(appointment)}>
                            <AppointmentCard appointment={appointment} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-white text-lg">No appointments found</div>
            )}

            {selectedAppointment && (
                <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-4">Update Appointment</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleUpdateAppointment(); }}>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || selectedAppointment.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email || selectedAppointment.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNo"
                                value={formData.phoneNo || selectedAppointment.phoneNo}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date || new Date(selectedAppointment.date).toISOString().substring(0, 10)}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2">Service</label>
                            <input
                                type="text"
                                name="service"
                                value={formData.service || selectedAppointment.service}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-white mb-2">Status</label>
                            <select
                                name="status"
                                value={formData.status || selectedAppointment.status}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            >
                                <option value="pending">pending</option>
                                <option value="approved">confirmed</option>
                                <option value="completed">  completed</option>
                                <option value="rejected">canceled</option>
                            </select>
                        </div> */}
                        <div className="mb-4">
                            <label className="block text-white mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message || selectedAppointment.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                            />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Update Appointment
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AppointmentPage;





// const AppointmentPage = () => {
//     const { state } = useAuth();
//     const [userId, setUserId] = useState<string>('');
//     const [appointments, setAppointments] = useState<IAppointment[] | null>(null);
//     const [selectedAppointment, setSelectedAppointment] = useState<IAppointment | null>(null);
//     const [formData, setFormData] = useState<Partial<IAppointment>>({});

//     useEffect(() => {
//         if (state.user) {
//             setUserId(state.user._id);
//         }
//     }, [state.user]);

//     useEffect(() => {
//         if (userId) {
//             fetchAppointments();
//         }
//     }, [userId]);

//     const fetchAppointments = async () => {
//         try {
//             const response = await fetch(`/api/appointments/${userId}`);
//             const data = await response.json();
//             if (response.ok) {
//                 setAppointments(data.data);
//             } else {
//                 console.error("Error fetching appointments:", data.message);
//             }
//         } catch (error) {
//             console.error("Failed to fetch appointments:", error);
//         }
//     };

//     const handleUpdateAppointment = async () => {
//         try {

//             console.log("run1")
//             console.log(formData)
//             const response = await fetch(`/api/appointments/${selectedAppointment?._id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();
//             console.log(data)
//             if (response.ok) {
//                 // Update the local state with the updated appointment
//                 setAppointments((prev) => prev?.map((app) =>
//                     app._id === selectedAppointment?._id ? data.data : app
//                 ) || null);
//                 alert("Appointment updated successfully!");
//             } else {
//                 console.error("Error updating appointment:", data.message);
//                 alert("Failed to update appointment.");
//             }
//         } catch (error) {
//             console.error("Failed to update appointment:", error);
//             alert(error);
//         }
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//         <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5">
//             {appointments ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {appointments.map((appointment) => (
//                         <div key={appointment._id} onClick={() => setSelectedAppointment(appointment)}>
//                             <AppointmentCard appointment={appointment} />
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <div className="text-white text-lg">No appointments found</div>
//             )}

//             {selectedAppointment && (
//                 <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
//                     <h2 className="text-2xl font-semibold text-white mb-4">Update Appointment</h2>
//                     <form onSubmit={(e) => { e.preventDefault(); handleUpdateAppointment(); }}>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name || selectedAppointment.name}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email || selectedAppointment.email}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Phone Number</label>
//                             <input
//                                 type="text"
//                                 name="phoneNo"
//                                 value={formData.phoneNo || selectedAppointment.phoneNo}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Date</label>
//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={formData.date || new Date(selectedAppointment.date).toISOString().substring(0, 10)}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Service</label>
//                             <input
//                                 type="text"
//                                 name="service"
//                                 value={formData.service || selectedAppointment.service}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Status</label>
//                             <select
//                                 name="status"
//                                 value={formData.status || selectedAppointment.status}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             >
//                                 <option value="pending">Pending</option>
//                                 <option value="approved">Approved</option>
//                                 <option value="rejected">Rejected</option>
//                                 <option value="completed">Completed</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-white mb-2">Message</label>
//                             <textarea
//                                 name="message"
//                                 value={formData.message || selectedAppointment.message}
//                                 onChange={handleChange}
//                                 className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
//                             />
//                         </div>
//                         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
//                             Update Appointment
//                         </button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppointmentPage;



// import AppointmentCard from '@/components/AppointmentCard';
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '@/context/authContext';

// const AppointmentPage = () => {
//     const { state } = useAuth();
//     const [userId, setUserId] = useState('');
//     const [appointments, setAppointments] = useState([]); // Changed to an array

//     useEffect(() => {
//         if (state.user) {
//             setUserId(state.user._id);
//         }
//     }, [state.user]);

//     useEffect(() => {
//         if (userId) {
//             fetchData();
//         }
//     }, [userId]);

//     const fetchData = async () => {
//         console.log("Fetching data...");
//         try {
//             const response = await fetch(`/api/appointments/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 alert("Something went wrong");
//                 return;
//             }
//             console.log(data);

//             setAppointments(data.data); // Accessing the array inside `data`
//         } catch (error) {
//             console.error("Failed to fetch appointment data:", error);
//         }
//     };

//     return (
//         <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//             {appointments.length > 0 ? (
//                 appointments.map((appointment) => (
//                     <AppointmentCard key={appointment._id} appointment={appointment} />
//                 ))
//             ) : (
//                 <div className="text-white text-lg">
//                     No appointment found for {userId}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppointmentPage;


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
