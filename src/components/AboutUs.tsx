import React from 'react';
import Image from 'next/image';
import AnimateValue from './ui/AnimateValue';

const AboutUs: React.FC = () => {
    return (
        <section className="abg-gray-900 text-white" id='about'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="flex items-center flex-col justify-between py-8 text-center md:text-left">
                        <p className="text-lg mb-6 text-justify">
                            Welcome to our lawyer appointment app! We are dedicated to providing seamless experiences for clients seeking legal services. Our team of frontend developers is passionate about crafting intuitive web interfaces tailored to meet your needs.
                        </p>

                        <div className="flex flex-col items-center md:flex-row md:justify-start md:gap-4  p-4">
                            <div className="text-center md:text-left">
                                <span className="text-5xl font-bold">
                                <AnimateValue start={1} end={15} duration={1000} />
                                    </span>
                                {/* <span className="text-5xl font-bold">05</span> */}
                                <span className="block">Years of Experience</span>
                            </div>

                            <div className="text-center md:text-left">
                                <span className="text-5xl font-bold flex items-center justify-center"><AnimateValue start={1} end={66} duration={1000} />+</span>
                                <span className="block">Projects completed</span>
                            </div>

                            <div className="text-center md:text-left">
                                <span className="text-5xl font-bold"><AnimateValue start={1} end={11} duration={1000} /></span>
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
                            className=""
                        />
                    </div>
                </div>
            </div>
            <div className='border border-gray-800 mx-8 mt-10 shadow-lg'></div>
        </section>
    );
};

export default AboutUs;
