'use client';

import React from 'react';
import Image from 'next/image';
import { teamMemberType } from '@/lib/type';


interface teamPropsType {
    team: teamMemberType[];
}


const Team:React.FC<teamPropsType> = ({team}) => {
    return (
        <section className="text-white px-4 py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div 
                            key={index} 
                            className="relative bg-gray-800 border border-gray-700 shadow-lg flex flex-col justify-center items-center p-6 rounded-xl transition-transform duration-300 hover:scale-105 transform hover:bg-gray-700"
                        >
                            <div className="w-[50%] h-1 bg-gray-500 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg"></div>
                            <div className="w-full flex justify-center items-center mb-4">
                                <div className="relative w-24 h-24">
                                    <Image
                                        src={member.image}
                                        alt={member.image}
                                        width={200}
                                        height={200}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <strong className="text-white text-xl font-semibold">{member.name}</strong>
                            <p className="text-gray-400 mt-2 text-sm">{member.role}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
