import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Forgotpass = () => {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/forgot-password`, formData);
            setSuccess(res.data.message || "Check your email for a reset link.");
            setTimeout(() => {
                navigate('/resetpassword');
            }, 2000); // Wait 2 seconds before redirecting
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200'>
                <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Forgot Password</h2>
                {error && <p className='text-red-500 mb-4 text-sm'>{error}</p>}
                {success && <p className='text-green-500 mb-4 text-sm'>{success}</p>}
                <form className='' onSubmit={handleSubmit}>
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
                    <button
                        type="submit"
                        className='w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 font-medium cursor-pointer'
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Forgotpass;