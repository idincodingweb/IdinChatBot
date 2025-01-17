import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { auth } from '../utils/firebase';
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
     const { theme } = useTheme();
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

      const handleResetPassword = async (e) => {
         e.preventDefault();
        setError(null);
        setMessage(null);
          try {
              await sendPasswordResetEmail(auth, email);
              setMessage("Password reset email sent.");
          } catch (error) {
              setError(error.message);
          }
       }


    return (
        <div className={`flex flex-col items-center justify-center h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
             <h2 className="text-3xl font-bold mb-6 text-center">Forgot Password</h2>
              <form onSubmit={handleResetPassword} className="w-full max-w-sm">
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
               <div className="flex items-center justify-between">
                      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500' : ''}`} type="submit">
                        Reset Password
                      </button>
               </div>
             </form>
          </div>
    );
};

export default ForgotPassword;