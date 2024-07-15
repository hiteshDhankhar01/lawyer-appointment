'use client';

import React from 'react';

const teamMembers = [
    { name: 'John Doe', role: 'Senior Lawyer', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'Associate Lawyer', image: 'https://via.placeholder.com/150' },
    { name: 'Samuel Green', role: 'Paralegal', image: 'https://via.placeholder.com/150' },
    { name: 'John Doe', role: 'Senior Lawyer', image: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'Associate Lawyer', image: 'https://via.placeholder.com/150' },
    { name: 'Samuel Green', role: 'Paralegal', image: 'https://via.placeholder.com/150' },
];

const Team = () => {
    return (
        <section className=" text-white px-4 py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center  hover:scale-110 border border-gray-900 transition duration-300 ">
                            <img src="https://img.freepik.com/premium-photo/young-indian-girl-as-lawyer-court-room_437792-171.jpg" alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
