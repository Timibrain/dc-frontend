import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/dclogo.png'
import SocialMediaDropdown from './SocialMediaDropdown'
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import {jwtDecode} from 'jwt-decode' // fix import

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Try to get email from user prop first
        if (user && user.email) {
            setUserEmail(user.email);
        } else {
            // Or decode from token if user prop not available
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    setUserEmail(decoded.email || '');
                } catch (error) {
                    console.error('Error decoding token:', error);
                    setUserEmail('');
                }
            }
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
        setUserEmail('');
    };

    return (
        <nav className='bg-white mx-auto fixed top-0 left-0 w-full z-50 shadow-md '>
            <div className='border-b-2 p-3 flex justify-between items-center w-full'>
                <div>
                    <Link to='/' className='text-gray-400 text-lg font-bold'>
                        <img src={logo} alt="Logo" className='w-30 h-8 ml-2' />
                    </Link>
                </div>

                <div>
                    {user ? (
                        <button onClick={handleLogout} className='text-black px-4 py-2 rounded hover:bg-red-600 hover:text-black flex items-center gap-2'>Logout
                            <FaSignOutAlt /></button>
                    ) : (
                        <>
                        <span className='flex'>
                                <Link to='/login' className='flex items-center text-gray-900 mx-2 hover:underline'>
                                    <FaSignInAlt className='mr-1' /> Login
                                </Link>
                                <Link to='/register' className='flex items-center text-gray-900 mx-2 hover:underline'>
                                    <FaUserPlus className='mr-1' /> Register
                                </Link>
                        </span>
                        </>
                    )}
                </div>
            </div>

            <div className='flex p-3 justify-between items-center'>
                <div className='p-2 flex items-center w-full justify-end gap-4'>
                    {user ? (
                        <div>
                            {/* Show only the email */}
                            <span className='bg-blue-600 text-white px-2 py-1 rounded'>
                                {userEmail}
                            </span>
                        </div>
                    ) : (
                        <div className='flex items-center gap-4 w-full'>
                            <SocialMediaDropdown />
                            <span>
                                <input type="text" placeholder="Search..." className="border p-2 rounded-3xl outline-none" />
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
