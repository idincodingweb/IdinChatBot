import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from './ThemeContext';
import LandingPage from './pages/LandingPage';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword'
import { AuthProvider } from './utils/AuthChecker.jsx';
import AboutPage from './pages/AboutPage';
import Services from './pages/Services';
import Gallery from './pages/Gallery'; 


const App = () => {
  return (
    <Router>
        <ThemeProvider>
             <AuthProvider>
                  <div className="full-width-container">
                     <Routes>
                         <Route path="/" element={<LandingPage />} />
                       <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                       <Route path="/forgot-password" element={<ForgotPassword />} />
                       <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/gallery" element={<Gallery />} /> 
                      </Routes>
                   </div>
             </AuthProvider>
         </ThemeProvider>
    </Router>
  );
};

export default App;