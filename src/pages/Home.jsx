import React, { useState, useEffect } from 'react';
import ChatArea from '../components/ChatArea';
import InputArea from '../components/InputArea';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuth } from '../utils/AuthChecker.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);

    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        const storedConversations = localStorage.getItem('conversations');
        if (storedConversations) {
            setConversations(JSON.parse(storedConversations));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('conversations', JSON.stringify(conversations));
    }, [conversations]);

    useEffect(() => {
      console.log("activeConversation in useEffect:", activeConversation);
      if (activeConversation) {
        setMessages(activeConversation.messages || []);
      } else {
        setMessages([]);
      }
    }, [activeConversation]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleSendMessage = (userMessage, aiResponse) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", content: userMessage },
            { sender: "ai", content: aiResponse },
        ]);
    };


    const handleCreateNewChat = (newConversation) => {
         console.log("newConversation before setActiveConversation:", newConversation);
        setConversations(prevConversations => [...prevConversations, newConversation]);
         setActiveConversation(() => newConversation);
        setMessages([]); // kosongkan chat area ketika new chat
        console.log("newConversation after setActiveConversation:", newConversation);
    };

    console.log("Home component rendered");
    console.log("activeConversation before return:", activeConversation);
    return (
        <div className="relative min-h-screen flex flex-col bg-gray-50">
            <Header onToggleSidebar={toggleSidebar} />
            <div className="flex-1 flex">
                <ChatArea messages={messages} />
            </div>
            <InputArea onSendMessage={handleSendMessage} />
             <Sidebar
                 isOpen={isSidebarOpen}
                 onClose={closeSidebar}
                 onCreateNewChat={handleCreateNewChat}
            />
        </div>
    );
}

export default Home;