import React from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { Home, Image, UserCircle, Settings } from 'lucide-react'; // Import Home Icon

const BottomNav = () => {
    const { theme } = useTheme();

    return (
      <div className={`fixed bottom-0 left-0 w-full bg-gray-100 p-4  border-t border-gray-200 flex justify-around items-center ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}`}>
            <Link to="/" className="focus:outline-none">
               <Home className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} />
            </Link>
            <Link to="/gallery" className="focus:outline-none">
              <Image className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}/>
            </Link>
           <Link to="/about" className="focus:outline-none">
             <UserCircle className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} />
           </Link>
           <Link to="/services" className="focus:outline-none">
               <Settings className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} />
          </Link>
        </div>
    );
};

export default BottomNav;