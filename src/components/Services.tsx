'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ServiceType } from '@/lib/type';
interface ServicesProps {
    services: ServiceType[];
}
SwiperCore.use([Pagination, Autoplay]);

const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <div className="space-y-4 p-4 text-white" >
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <Swiper
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div key={index} className="bg-gray-800 p-4 rounded-lg  custom-shadow ashadow-lg mb-4">
                            <h3 className="text-md ">{service.title}</h3>
                            <p className='text-gray-400 text-sm '>{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Services;