import React from 'react';
import Hero from '@/components/Hero';
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
            <AboutUs />
            <Services services={servicesData} />
            {/* <Blog /> */}
            <Blog />
            <FAQ />
            <Team />
        </div>
    );
};

export default Home;