import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';
import logo from '../assets/dclogo.png'


const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    }
    return (
        <nav className='bg-white mx-auto fixed top-0 left-0 w-full z-50 shadow-md '>
            <div className=' border-b-2 bo p-3 flex  justify-between items-center w-full'>
                <Link to='/' className='text-gray-400 text-lg font-bold'>
                    <img src={logo} alt="Logo" className='w-30 h-8 ml-2' />
                </Link>


                <div>
                    {user ? (
                        <button onClick={handleLogout} className='text-black px-4 py-2 rounded hover:bg-red-600 hover:text-black'>Logout</button>
                    ) : (
                        <>
                            <Link to='/login' className='text-gray-4-0 mx-2 hover:underline'>Login</Link>
                            <Link to='/register' className='text-gray-4-0 mx-2 hover:underline'>Register</Link>

                        </>
                    )}
                </div>
            </div>

            <div className='  flex p-3 justify-between items-center '>


                <div className='  p-2 flex items-center w-full justify-end gap-4  '>
                    {user ? (
                        <button className='text-white bg-black px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-black hover:border'>Payment</button>
                    ) : (
                        <>

                            <div className='flex items-center gap-4 w-full'>

                                <div className="mr-auto">
                                        <select name="Category" id="" className="border rounded-1 p-2 outline-none bg-black text-white
                                        px-3 hover:bg-white hover:text-zinc-950">
                                        <option value="">Select Social Media</option>
                                        <option value="facebook">Facebook</option>
                                        <option value="instagram">Instagram</option>
                                        <option value="twitter">Twitter / X</option>
                                        <option value="tiktok">TikTok</option>
                                        <option value="snapchat">Snapchat</option>
                                        <option value="linkedin">LinkedIn</option>
                                        <option value="youtube">YouTube</option>
                                        <option value="whatsapp">WhatsApp</option>
                                        <option value="telegram">Telegram</option>
                                        <option value="reddit">Reddit</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="text" placeholder="Search..." className="border p-2 rounded-3xl outline-none " />
                                </div>


                            </div>

                        </>
                    )}
                </div>
            </div>





        </nav>
    )
}

export default Navbar