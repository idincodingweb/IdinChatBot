import React from 'react';
import { useTheme } from '../ThemeContext';
import BottomNav from '../components/BottomNav';
import { Image } from 'lucide-react'

const Gallery = () => {
    const { theme } = useTheme();

    const photos = [
        {
            id: 1,
            url: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/idincuy.jpg',
            alt: 'Idin Iskandar',
        },
        {
            id: 2,
            url: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_.sulqime._-20241230-0001.jpg',
            alt: 'Sulqime',
        },
        {
            id: 3,
            url: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/_prissqnq.q-20241230-0001.jpg',
            alt: 'Friska Inky',
        },
        {
            id: 4,
            url: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/fiqqbtt-20241230-0002.jpg',
            alt: 'Fika Iskandar',
        },
         {
            id: 5,
            url: 'https://raw.githubusercontent.com/idincodingweb/packgambar/main/pink_nurulrr-27-05-2024-0001.jpg',
            alt: 'Reny Aulia',
        },
    ];

    return (
        <div className={`flex flex-col items-center justify-start  w-full p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
         <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Our Gallery
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {photos.map(photo => (
                    <div key={photo.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col h-64 w-64 hover:shadow-xl transition duration-200 transform hover:scale-105">
                      <img
                        src={photo.url}
                         alt={photo.alt}
                           className="object-cover w-full h-48"
                         />
                       <div className="p-4 flex-grow flex items-center justify-center">
                          <p className="text-gray-700 text-center"> {photo.alt} </p>
                       </div>
                     </div>
                ))}
            </div>
      <BottomNav />
        </div>
    );
};

export default Gallery;