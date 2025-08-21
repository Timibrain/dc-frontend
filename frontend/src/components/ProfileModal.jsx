import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ProfileModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        email: "",
        phonenumber: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Reset form and error/success when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({
                firstname: "",
                lastname: "",
                address: "",
                city: "",
                state: "",
                zipcode: "",
                email: "",
                phonenumber: "",
            });
            setError(null);
            setSuccess(null);
        }
    }, [isOpen]);

    // ESC to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(null);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("User not authenticated.");
                return;
            }

            const decoded = jwtDecode(token);
            const loggedInEmail = decoded?.email;

            if (formData.email !== loggedInEmail) {
                setError("Email does not match the signed-in user.");
                return;
            }
            console.log("Submitting formData:", formData);

            // Submit form if email matches
            await axios.post(`${import.meta.env.VITE_API_URL}/user/profile`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setSuccess("Profile updated successfully!");
            setTimeout(onClose, 1500);
        } catch (err) {
            console.error("Profile update error:", err);
            setError(err?.response?.data?.message || "Failed to update profile.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white p-6 rounded shadow-lg text-black w-[90%] max-w-md"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                    className="border p-2 rounded"
                                />
                            </div>

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded w-full"
                            />

                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                    className="border p-2 rounded"
                                />
                            </div>

                            <input
                                type="text"
                                name="zipcode"
                                placeholder="Zip Code"
                                value={formData.zipcode}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded w-full"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email (must match signed-in account)"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded w-full"
                            />

                            <input
                                type="tel"
                                name="phonenumber"
                                placeholder="Phone Number"
                                value={formData.phonenumber}
                                onChange={handleChange}
                                required
                                className="border p-2 rounded w-full"
                            />

                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            {success && <p className="text-green-600 text-sm">{success}</p>}

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-300 text-black rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    {isSubmitting ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;
