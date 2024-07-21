import React from 'react';
import Hero from '@/components/Hero';
import Review from '@/components/Review';
import reviewsData from '@/data/reviews.json';
import servicesData from '@/data/services.json';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Blog from '@/components/Blog';


const Home = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col gap-10 pb-5">
            <Hero />
            {/* <div className='relative'>
                <div className="absolute -top-[130px] min-h-[6rem] bg-gradient-to-t to-transparent from-gray-900 text-white w-full"></div>
            </div> */}

           
            <AboutUs />
            <Services services={servicesData} />
            <Team />
            <Review reviews={reviewsData} />
            <FAQ />
            <Blog />
        </div>
    );
};

export default Home;


// import React from 'react'
// import Hero from '@/components/Hero';
// import Review from '@/components/Review';
// import reviewsData from '@/data/reviews.json';
// const Home = () => {
//     return (
//         <div className='bg-gray-900 flex flex-col gap-10 pb-5'>
//             <Hero />
//             <Review reviews={reviewsData} />
//         </div>
//     )
// }

// export default Home