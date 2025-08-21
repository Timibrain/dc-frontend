import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCopy, FaUniversity, FaMicrochip } from "react-icons/fa";
import people from '../assets/people.jpg'
import social from '../assets/Social.jpg'
import woman from '../assets/woman.jpg'
import Sidebar from "./Sidebar";


const Fund = () => {
  const [copied, setCopied] = useState(false);
  const [index, setIndex] = useState(0)

  const accountInfo = {
    accountNumber: "1234 5678 9012",
    accountName: "Dc Store Ltd.",
    bankName: "PaymentPoint Bank",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountInfo.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const images = [
      people,
      social,
      woman
  ]
  
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center  py-12">
      {/* Carousel */}
      <div className=' px-1  w-full bg-white text-center font-bold h-100 flex justify-center items-center'>
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
      <h1 className="text-4xl font-bold mb-4 mt-2 text-gray-900">Fund Your Account</h1>

      {/* Virtual ATM Card */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-lg w-full max-w-md p-6 text-white font-sans">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold flex items-center gap-2">
            <FaUniversity className="text-white text-xl" />
            <span>{accountInfo.bankName}</span>
          </div>
          {/* Replaced image with FaMicrochip icon */}
          <FaMicrochip className="text-gray-600 text-3xl" />
        </div>

        <div className="text-sm uppercase tracking-widest mb-2 opacity-75">
          Account Number
        </div>

        <div className="flex items-center justify-between text-2xl font-mono tracking-widest mb-4 select-all">
          <span>{accountInfo.accountNumber}</span>
          <button
            onClick={copyToClipboard}
            className="ml-4 bg-gray-600 bg-opacity-20 hover:bg-opacity-30 transition rounded px-2 py-1 text-sm flex items-center gap-1"
          >
            <FaCopy className="h-5 w-5" />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="text-sm uppercase tracking-widest opacity-75 mb-1">
          Account Name
        </div>
        <div className="mb-4">{accountInfo.accountName}</div>
      </div>

      {/* Instructions */}
      <div className="max-w-xl text-gray-700 mt-12 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">How to Fund Your Account</h2>
        <p className="mb-2">
          Please transfer the amount you want to add to your Dc Store balance
          using the account details shown above.
        </p>
        <p className="mb-2">
          Use PaymentPoint to complete your transaction securely and instantly.
          You can copy the account number by clicking the "Copy" button.
        </p>
        <p>
          Once the payment is confirmed, your account balance will be updated promptly.
          For assistance, contact our support team.
        </p>
      </div>
    </div>
    </>
  );
};

export default Fund;
