import React from 'react';
import { useTheme } from '../ThemeContext';
import Message from './Message';

const ChatArea = ({ messages }) => {
    const { theme } = useTheme();
    console.log("ChatArea props:", messages);

    return (
        <div
            className={`flex-1 p-4 overflow-y-auto flex flex-col ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            }`}
        >
            {messages?.map((message, index) => (
                <Message key={index} sender={message.sender} content={message.content} />
            ))}
        </div>
    );
};

export default ChatArea;