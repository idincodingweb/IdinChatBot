import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { sendMessage } from '../utils/api';
import { Send } from 'lucide-react';

const InputArea = ({ onSendMessage }) => {
    const { theme } = useTheme();
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        if (message.trim() === '') return;


        try {
            const aiResponse = await sendMessage(message);
            onSendMessage(message, aiResponse);
        } catch (error) {
            console.error("Failed to send message", error);
        }

        setMessage('');
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={`p-3 flex  ${theme === 'dark' ? 'bg-gray-800 border-t border-gray-700' : 'bg-gray-100 border-t border-gray-200'}`}>
            <input
                type="text"
                placeholder="Ask me anything.."
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className={`flex-grow p-2 rounded border focus:outline-none focus:border-blue-500  ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
            />
            <button onClick={handleSendMessage} className={`p-2 ml-2 rounded-full focus:outline-none ${theme === 'dark' ? 'bg-green-600 hover:bg-green-500' : 'bg-green-500 hover:bg-green-600'}`}>
                  <Send className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default InputArea;