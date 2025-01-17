import React from 'react';

const TypingDots = ({ isTyping }) => {
    if (!isTyping) {
      return null;
    }
    return (
      <div className="typing-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    );
};

export default TypingDots;