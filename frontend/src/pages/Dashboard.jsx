import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { FaWallet, FaMoneyCheckAlt, FaShoppingCart, FaTicketAlt } from 'react-icons/fa';
import people from '../assets/people.jpg'
import social from '../assets/Social.jpg'
import woman from '../assets/woman.jpg'


const FundIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 9V7a4 4 0 00-8 0v2M5 10h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z"
        />
    </svg>
);




const images = [
    people,
    social,
    woman
]

const Dashboard = ({ user, error }) => {
    const [index, setIndex] = useState(0)

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <>
            <div className='flex'>
                <Sidebar />

            </div>

            {/* Carousel */}
            <div className=' px-10  w-full bg-white text-center font-bold h-120 flex justify-center items-center'>
                <div className="w-full flex justify-center mt-30 px-2">
                    <div className="relative w-full max-w-3xl h-[220px] overflow-hidden rounded-lg shadow-lg">
                        <AnimatePresence initial={false}>
                            <motion.img
                                key={index}
                                src={images[index]}
                                alt={`slide-${index}`}
                                className="absolute bg-white w-full h-full object-cover"
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </div>

                </div>

            </div>

            {/* Payment Cards with Icons */}
            <div className="w-full flex flex-wrap justify-center gap-6 mt-8 px-4 mb-4">
                {/* Balance Card */}
                <div className="flex-1 min-w-[220px] max-w-xs bg-white rounded-2xl shadow-lg/90 p-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <FaWallet className="text-blue-600 text-2xl" />
                        <span className="text-gray-500 text-sm">Balance</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-700 mb-4">$2,500.00</span>

                    {/* ✅ Fund Your Account Button */}
                    <Link to="/fund">
                    <button className="flex items-center bg-indigo-600 text-white px-4 py-2 text-sm rounded-md hover:bg-indigo-700 transition">
                        <FundIcon />
                        Fund Your Account
                    </button>
                    </Link>
                </div>

                {/* Total Spent Card */}
                <div className="flex-1 min-w-[220px] max-w-xs bg-white rounded-2xl shadow-lg/90 p-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <FaMoneyCheckAlt className="text-green-600 text-2xl" />
                        <span className="text-gray-500 text-sm">Total Spent</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">$1,200.00</span>
                </div>
                {/* Purchase Account Card */}
                <div className="flex-1 min-w-[220px] max-w-xs bg-white rounded-2xl shadow-lg/90 p-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <FaShoppingCart className="text-indigo-600 text-2xl" />
                        <span className="text-gray-500 text-sm">Purchase Account</span>
                    </div>
                    <span className="text-2xl font-bold text-indigo-600">8</span>
                </div>
                {/* Tickets Card */}
                <div className="flex-1 min-w-[220px] max-w-xs bg-white rounded-2xl shadow-lg/90 p-6 flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <FaTicketAlt className="text-yellow-500 text-2xl" />
                        <span className="text-gray-500 text-sm">Tickets</span>
                    </div>
                    <span className="text-2xl font-bold text-yellow-500">3</span>
                </div>
            </div>
            {/* ...rest of your code if any... adding amother footer here adding more latest payment her for payment history */}
        </>
    )
}

export default Dashboard