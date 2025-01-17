import React from 'react';
import LocationMap from '../components/LocationMap';
import { useTheme } from '../ThemeContext';

const AboutPage = () => {
  const { theme } = useTheme();
    return (
        <div className="py-16 px-8 md:px-16">
             <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                 About IdinCode A.I
              </h2>
              <div className="max-w-4xl mx-auto">
                 <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  IdinCode A.I is a simple chat AI project built to explore and demonstrate the power of artificial intelligence.
                  This project is a playground to experiment with different natural language processing techniques and to create an interactive experience for users.
                </p>
                 <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                   This project was developed by <span className="font-bold">Idin Iskandar</span>.
                   I'm excited to see how this project evolves and how people use it to explore the potential of AI.
                 </p>
                  <LocationMap />
              </div>
        </div>
    );
};

export default AboutPage;