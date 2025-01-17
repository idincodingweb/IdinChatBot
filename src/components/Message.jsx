import React from 'react';
import { useTheme } from '../ThemeContext';

const Message = ({ sender, content }) => {
     const { theme } = useTheme();

    return (
    <div className={`mb-2 p-3 rounded-lg max-w-xs ${sender === 'user' ? 'bg-blue-100 text-blue-800 self-end' : 'bg-gray-100 text-gray-800 self-start'}
    ${theme === 'dark' ? (sender === 'user' ? 'bg-blue-700 text-white' : 'bg-gray-700 text-white') : ''}`}
    >
        {content}
    </div>
  );
};
export default Message;