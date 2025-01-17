// src/components/OurServices.jsx
import React from 'react';
import BottomNav from '../components/BottomNav';
import { useTheme } from '../ThemeContext';

const OurServices = () => {
    const { theme } = useTheme();
    const services = [
        {
            id: 1,
            title: 'Web Development',
             description: 'We provide full-stack web development services, from front-end design to back-end functionality.',
             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-7 9 7m-1.5 2.25h-15" />
           </svg>

        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'We create intuitive and user-friendly interfaces that enhance user engagement and satisfaction.',
             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3m18 9.75a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25V4.5a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25V15"/>
           </svg>
        },
         {
            id: 3,
            title: 'Mobile App Development',
            description: 'We develop cross-platform mobile applications for iOS and Android, with seamless functionality and experience.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.03a3 3 0 003 3.018h3a3 3 0 003-3.018v-1.03M15 11.216l-1.58 1.58a2.25 2.25 0 01-3.182 0l-1.58-1.58m5.16 0h-10.32m4.21 2.2a.75.75 0 01.03-.852c.084-.161.193-.285.32-.36l1.14-.69a.75.75 0 111.04 1.68l-1.14.69a.75.75 0 01-.32.361z"/>
             </svg>
        },
         {
            id: 4,
            title: 'SEO & Digital Marketing',
            description: 'We optimize your web presence with cutting-edge SEO strategies and digital marketing techniques.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V8.44a1.5 1.5 0 00-1.06-.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H13.5" />
          </svg>
         },
        {
          id: 5,
            title: 'Consultation',
            description: 'We offer expert consultation to help you make the best decisions for your web development projects.',
             icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
             <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.49a.563.563 0 01-.48 0l-8.99 5.18a.564.564 0 00-.24 1.037l8.99 5.18a.563.563 0 010 1.03l-8.99 5.18a.563.563 0 00.24 1.037l8.99 5.18a.563.563 0 01.48 0l8.99-5.18a.564.564 0 00.24-1.037l-8.99-5.18a.563.563 0 010-1.03l8.99-5.18a.563.563 0 00-.24-1.037l-8.99-5.18z" />
           </svg>
        }
    ];

  return (
    <div className="py-16 px-8 md:px-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {services.map((service) => (
             <div
                 key={service.id}
                 className={`p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}
             >
               <div className={`mb-4 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                  {service.icon}
               </div>
                <h3 className={`font-bold text-lg text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-2`}>{service.title}</h3>
                <p className={` ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{service.description}</p>
           </div>
         ))}
     </div>
  <BottomNav />
    </div>
  );
};

export default OurServices;