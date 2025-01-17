// src/components/LocationMap.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';

const LocationMap = () => {
   const { theme } = useTheme();
    return (
       <div className="py-16 px-8 md:px-16">
         <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
             Our Location
         </h2>
            <div className="flex justify-center">
                 <iframe
                       title="Cipondoh Map"
                       width="800"
                        height="400"
                     src="https://maps.google.com/maps?q=Rumah%Hj%Idin%Iskandar,%20tirtamulya,%20karawang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                     className="rounded-lg shadow-lg border-0"
                 >
                </iframe>
            </div>
         </div>
    );
  };
  
  export default LocationMap;