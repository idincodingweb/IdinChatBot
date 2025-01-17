import React from 'react';
import { useTheme } from '../ThemeContext';

const Header = ({ onToggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`bg-gray-100 border-b border-gray-200 p-3 flex items-center justify-between ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : ''}`}>
      <button onClick={onToggleSidebar} className={`text-gray-700 focus:outline-none ${theme === 'dark' ? 'text-white' : ''}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : ''}`}>IdinCode Chatbot</h1>
      <button onClick={toggleTheme} className={`focus:outline-none  ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
            <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m3.684-10.727l1.591 1.591M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
           </svg>
      </button>
    </div>
  );
};

export default Header;