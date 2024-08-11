'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

type Service = {
    title: string;
    description: string;
};

type Props = {
    services: Service[];
};

SwiperCore.use([Pagination, Autoplay]);

const Review: React.FC<Props> = ({ services }) => {
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

export default Review;

// "use client"

// import React from 'react';

// const services = [
//     { title: 'Family Law', description: 'Expert advice on family-related legal issues.' },
//     { title: 'Corporate Law', description: 'Comprehensive corporate legal services.' },
//     { title: 'Criminal Law', description: 'Defending your rights in criminal matters.' },
//     { title: 'Personal Injury Law', description: 'Legal assistance for personal injury claims.' },
//     { title: 'Employment Law', description: 'Protecting your rights in the workplace.' },
//     { title: 'Real Estate Law', description: 'Handling all real estate legal matters.' },
//     { title: 'Immigration Law', description: 'Guidance on immigration and citizenship issues.' },
//     { title: 'Intellectual Property Law', description: 'Protecting your intellectual property rights.' },
//     { title: 'Tax Law', description: 'Expertise in tax-related legal matters.' },
//     { title: 'Bankruptcy Law', description: 'Helping you navigate bankruptcy proceedings.' },
//     { title: 'Environmental Law', description: 'Legal services related to environmental regulations.' },
//     { title: 'Wills and Estates', description: 'Assistance with wills, trusts, and estate planning.' },
//     { title: 'Commercial Law', description: 'Legal support for commercial transactions.' },
//     { title: 'Civil Litigation', description: 'Representation in civil lawsuits.' },
//     { title: 'Construction Law', description: 'Legal advice for construction projects and disputes.' },
//     { title: 'Healthcare Law', description: 'Legal services for healthcare providers and patients.' },
//     { title: 'Consumer Protection Law', description: 'Protecting consumer rights.' },
//     { title: 'Human Rights Law', description: 'Advocacy for human rights issues.' },
//     { title: 'Education Law', description: 'Legal support for education institutions and issues.' },
//     { title: 'Entertainment Law', description: 'Legal services for the entertainment industry.' },
//     { title: 'Sports Law', description: 'Legal support for athletes and sports organizations.' },
//     { title: 'Insurance Law', description: 'Handling insurance claims and disputes.' },
//     { title: 'Military Law', description: 'Legal representation for military personnel.' },
//     { title: 'Social Security Law', description: 'Assistance with social security claims and issues.' }
// ];


// const Services = () => {
//     return (
//         <section className="text-white px-4 py-8">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {services.map((service, index) => (
// <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//     <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//     <p>{service.description}</p>
// </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;
