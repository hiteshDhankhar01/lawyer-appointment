import React from 'react';
import Hero from '@/components/Home/Hero';
import servicesData from '@/data/services.json';
import temData from '@/data/team.json';
import faqData from '@/data/faq.json';
import AboutUs from '@/components/Home/AboutUs';
import Services from '@/components/Home/Services';
import FAQ from '@/components/Home/FAQ';
import Team from '@/components/Home/Team';
import Blog from '@/components/Home/Blog';

const Home = () => {
    return (
        <div className="flex flex-col gap-10 pb-5">
            <Hero />
            <AboutUs />
            <Blog />
            <FAQ faq={faqData} />
            <Services services={servicesData} />
            <Team team={temData} />
        </div>
    );
};

export default Home;