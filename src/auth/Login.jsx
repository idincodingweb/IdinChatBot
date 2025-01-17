import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { theme } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        setError(null);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/home");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleEmailLogin} className="w-full max-w-sm">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                        placeholder="******************"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500' : ''}`} type="submit">
                        Login
                    </button>
                </div>
            </form>
            <div className="mt-6">
                <button onClick={handleGoogleLogin} className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  ${theme === 'dark' ? 'bg-red-600 hover:bg-red-500' : ''}`}>
                    Login with Google
                </button>
            </div>
                <div className="mt-4">
                   <p className="text-gray-500 text-sm text-center">
                        Don't have an account? <button onClick={() => navigate("/register")} className={`text-blue-500 hover:text-blue-700 focus:outline-none font-semibold ${theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : ''}`}>
                            Register
                          </button>
                   </p>
                 </div>
        </div>
    );
};

export default Login;