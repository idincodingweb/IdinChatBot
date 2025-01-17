import React from 'react';
import logo from '../assets/logo.svg';
import { useTheme } from '../ThemeContext';


const WelcomeScreen = ({ onStartChat }) => {
    const { theme } = useTheme();
    return (
        <div className={`flex-1 flex items-center justify-center flex-col p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <img src={logo} alt="ChattyAI Logo" className="h-16 mb-4" />
            <h2 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Capabilities</h2>
            <div className="space-y-2 w-full max-w-md">
                <button
                  onClick={onStartChat}
                    className={`bg-gray-100 shadow rounded p-4 w-full text-left hover:bg-gray-200 transition-colors duration-200 focus:outline-none ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-gray-600'}`}
                >
                    Answer all your questions.
                    <span className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>(Just ask me anything you like!)</span>
                </button>
                <button
                    onClick={onStartChat}
                   className={`bg-gray-100 shadow rounded p-4 w-full text-left hover:bg-gray-200 transition-colors duration-200 focus:outline-none ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-gray-600'}`}
                >
                    Generate all the text you want.
                    <span className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>(essays, articles, reports, stories, & more)</span>
                </button>
                <button
                    onClick={onStartChat}
                   className={`bg-gray-100 shadow rounded p-4 w-full text-left hover:bg-gray-200 transition-colors duration-200 focus:outline-none ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'text-gray-600'}`}
                >
                    Conversational AI.
                    <span className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>(I can talk to you like a natural human)</span>
                </button>
            </div>
            <p className={`text-sm mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>These are just a few examples of what I can do.</p>
        </div>
    );
};

export default WelcomeScreen;