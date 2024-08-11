"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of legal services including family law, corporate law, and criminal law.' },
    { question: 'How can I schedule an appointment?', answer: 'You can schedule an appointment by contacting us through our website or calling our office.' },
    { question: 'What are your office hours?', answer: 'Our office hours are Monday to Friday, 9 AM to 5 PM.' },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className=" text-white px-4 py-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={` bg-gray-800 p-4 rounded-lg custom-shadow ashadow-lg ui-accordion-header ${activeIndex === index ? 'ui-active' : ''}`}
                            onClick={() => toggleAccordion(index)}>
                            <div className="flex items-center justify-between cursor-pointer">
                                <h3 className="text-lg">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 transform transition-transform duration-300 text-gray-500 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className={`ui-accordion-body ${activeIndex === index ? 'block' : 'hidden'}`}>
                                <p className="mt-2 text-gray-400">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;


// "use client"

// import React from 'react';

// const faqs = [
//     { question: 'What services do you offer?', answer: 'We offer a wide range of legal services including family law, corporate law, and criminal law.' },
//     { question: 'How can I schedule an appointment?', answer: 'You can schedule an appointment by contacting us through our website or calling our office.' },
//     { question: 'What are your office hours?', answer: 'Our office hours are Monday to Friday, 9 AM to 5 PM.' },
// ];

// const FAQ = () => {
//     return (
//         <section className="bg-gray-800 text-white px-4 py-8">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
//                 <div className="space-y-4">
//                     {faqs.map((faq, index) => (
//                         <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
//                             <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
//                             <p>{faq.answer}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FAQ;
