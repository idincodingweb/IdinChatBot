import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Register = () => {
     const { theme } = useTheme();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
     const [message, setMessage] = useState(null);
       const navigate = useNavigate();

      const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
          setMessage(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Registration successful. Redirecting to login...");
             setTimeout(() => {
              navigate("/login");
            }, 2000);
         } catch (error) {
             setError(error.message);
         }
      }
    return (
        <div className={`flex flex-col items-center justify-center h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
         <form onSubmit={handleRegister} className="w-full max-w-sm">
             {error && <p className="text-red-500 mb-4">{error}</p>}
                {message && <p className="text-green-500 mb-4">{message}</p>}
         <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
             Email
            </label>
            <input type="email"
            value={email}
                onChange={e => setEmail(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
              placeholder="Email" />
         </div>
         <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
             </label>
             <input type="password"
             value={password}
              onChange={e => setPassword(e.target.value)}
                className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
          <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500' : ''}`} type="submit">
              Register
          </button>
        </div>
     </form>
                <div className="mt-4">
                   <p className="text-gray-500 text-sm text-center">
                        Do you have a forgot password ? <button onClick={() => navigate("/forgot-password")} className={`text-blue-500 hover:text-blue-700 focus:outline-none font-semibold ${theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : ''}`}>
                            Reset Password
                          </button>
                   </p>
                 </div>
      </div>
    );
};

export default Register;