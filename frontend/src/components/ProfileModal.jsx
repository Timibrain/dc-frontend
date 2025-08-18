import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/30 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className=" p-6 rounded shadow-lg text-black w-[300px]"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()} // prevent close on inner click
                    >
                        <h2 className="text-lg font-bold mb-4">Profile</h2>
                        <p>Email: user email</p>
                        <p>Full Name: dc users</p>

                        <div className="mt-4">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;
