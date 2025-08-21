import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // ✅ Import toast
import 'react-toastify/dist/ReactToastify.css'; // ✅ Toastify styles


const Login = ({ setIsloading, setUser }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, formData);
            console.log(res);
            
            localStorage.setItem("token", res.data.token);
            setUser(res.data);
            toast.success("Login successful!"); // ✅ Success toast
            navigate('/dashboard');
        } catch (error) {
            const message = error.response?.data?.message || "Login failed";
            toast.error(message); // ✅ Error toast
        } finally {
            setIsloading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200'>
                <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-600 text-sm font-medium mb-1'>
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete='off'
                            placeholder='Enter your email'
                            className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400'
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-1'>
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                            placeholder='Enter your password'
                            className='w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400'
                        />
                    </div>

                    <button
                        className='w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 font-medium cursor-pointer'
                    >
                        Login
                    </button>

                    <div className="mt-4 text-center">
                        <a href="/forgot-password" className="text-blue-500 hover:underline text-sm">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
