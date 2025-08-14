import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            return setMessage("Passwords do not match.");
        }

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/reset-password`,
                { token, newPassword }
            );
            setMessage("Password reset successfully. Redirecting to login...");
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setMessage(err.response?.data?.message || "Error resetting password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleReset}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                {message && <p className="text-red-500 mb-4 text-sm">{message}</p>}

                <input
                    type="text"
                    placeholder="Enter reset token (code from email)"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="w-full mb-3 p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full mb-3 p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full mb-3 p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
