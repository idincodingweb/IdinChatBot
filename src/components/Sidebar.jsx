import React from 'react';
import { useTheme } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { LogOut } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const Sidebar = ({ isOpen, onClose, onCreateNewChat }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreateNewChat = () => {
        const newConversation = {
            id: uuidv4(),
            title: 'New Chat',
            messages: []
        };
        onCreateNewChat(newConversation);
    };


    return (
        <div
            className={`fixed top-0 left-0 h-full  w-64 z-50 transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
            <div className="p-4 flex justify-between items-center">
                <h2
                    className={`text-xl font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                >
                    Menu
                </h2>
                <button
                    onClick={onClose}
                    className={`text-gray-400 hover:text-gray-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                    }`}
                >
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <nav className="mt-4">
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={handleCreateNewChat}
                            className={`block w-full p-3 hover:bg-gray-700 transition duration-200 text-left ${
                                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                            }`}
                        >
                            Create New Chat
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="absolute bottom-0 w-full p-4">
                <button
                    onClick={handleLogout}
                    className={`flex justify-start items-center  w-full p-2  rounded transition duration-200 ${
                        theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    <LogOut
                        className={`w-5 h-5 mr-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-700'
                        }`}
                    />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;