import React from 'react';
import Image from 'next/image';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-gray-900 text-white  ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="flex items-center flex-col justify-between py-8 text-center md:text-left">
                        <p className="text-lg mb-6 text-justify">
                            Welcome to our lawyer appointment app! We are dedicated to providing seamless experiences for clients seeking legal services. Our team of frontend developers is passionate about crafting intuitive web interfaces tailored to meet your needs.
                        </p>

                        <div className="flex flex-col items-center md:flex-row md:justify-start md:gap-4  p-4">
                            <div className="text-center md:text-left">
                                <span className="text-5xl font-bold">05</span>
                                <span className="block">Years of Experience</span>
                            </div>

                            <div className="text-center md:text-left">
                                <span className="text-5xl font-bold">29+</span>
                                <span className="block">Projects completed</span>
                            </div>

                            <div className="text-center md:text-left">
                                <span className="text-5xl font-bold">07</span>
                                <span className="block">Recognitions</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-100">
                        <Image
                            src="/aboutUs.png"
                            alt="About us"
                            height={500}
                            width={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className='border border-gray-800 mx-8 mt-10'></div>
        </section>
    );
};

export default AboutUs;
