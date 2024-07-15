'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import  { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

type Review = {
    user: string;
    star: number;
    comment: string;
};

type Props = {
    reviews: Review[];
};

// Initialize Swiper modules
SwiperCore.use([ Autoplay]);

const Review: React.FC<Props> = ({ reviews }) => {
    return (
        <div className="space-y-4 p-4" >
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
               
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="border p-6 rounded-lg shadow-lg bg-gray-800 text-white hover:bg-gray-700 hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <h3 className="font-bold text-lg">{review.user}</h3>
                                <div className="ml-4 flex">
                                    {Array(review.star).fill(0).map((_, i) => (
                                        <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.883 1.446 8.308L12 18.902l-7.382 3.898 1.446-8.308-6.064-5.883 8.332-1.151z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-2 text-gray-400">{review.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;

// 'use client';

// import React from 'react';

// type Review = {
//     user: string;
//     star: number;
//     comment: string;
// };

// type Props = {
//     reviews: Review[];
// };

// const Review: React.FC<Props> = ({ reviews }) => {
//     return (
//         <div className="space-y-4 grid grid-cols-3">
//             {reviews.map((review, index) => (
//                 <div key={index} className="border p-4 rounded-lg shadow-lg">
//                     <div className="flex items-center">
//                         <h3 className="font-bold text-lg">{review.user}</h3>
//                         <div className="ml-4 flex">
//                             {Array(review.star).fill(0).map((_, i) => (
//                                 <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M12 .587l3.668 7.571 8.332 1.151-6.064 5.883 1.446 8.308L12 18.902l-7.382 3.898 1.446-8.308-6.064-5.883 8.332-1.151z" />
//                                 </svg>
//                             ))}
//                         </div>
//                     </div>
//                     <p className="mt-2 text-gray-700">{review.comment}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Review;
