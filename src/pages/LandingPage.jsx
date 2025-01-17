import React from 'react';
import logo from '../assets/images/avatar1.jpg';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthChecker';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav'; // Import BottomNav

const LandingPage = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const { currentUser } = useAuth();


    const handleStartChat = () => {
        if (currentUser) {
            navigate("/home");
        } else {
            navigate("/login");
        }
    };
    return (
      <>
       <Header />
        <div className={`flex flex-col items-center justify-center h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            <img src={logo} alt="IdinCode A.I Logo" className="logo h-24 mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-center">
                Welcome to
                <span className="text-green-500"> IdinCode A.I </span>
                <span className="ml-2">👋</span>
            </h1>
            <p className="text-gray-600 mb-8 text-center">Start chatting with IdinCode A.I now. You can ask me anything.</p>
            <button
                onClick={handleStartChat}
                className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 focus:outline-none ${theme === 'dark' ? 'bg-green-600 hover:bg-green-500' : ''}`}
            >
                Start Chat
            </button>
            <BottomNav /> 
        </div>
      </>
    );
};

export default LandingPage;