import React from 'react'
import Sidebar from '../components/Sidebar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Typewriter from "typewriter-effect"
import people from '../assets/people.jpg'
import social from '../assets/Social.jpg'
import woman from '../assets/woman.jpg'
import laptop from '../assets/laptop.jpg'
import { FaClipboardList, FaLock, FaExchangeAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'




const Userhome = ({user, setUser}) => {
    const navigate = useNavigate();

    const handleLog = () => {
        if(!user) {
            navigate('/login');
        } else {
            navigate('/dashboard');
        }
    }
    return (
        <>
            <div className=''>
                {user&& <Sidebar /> }
               

            </div>
            <div className=' px-10  w-full bg-gray-300 text-center font-bold h-150 flex justify-center items-center'>
                <div>
                    <div className=' lg:mx-50 text-3xl '>
                        {/* <h1 className=' '>Buy Social Media Accounts At Affordable Rates</h1> */}
                        <Typewriter options={{
                            strings: ["Buy Social Media Accounts At Affordable Rates","Dc Store Is The Best Platform That Does it Better.", "Buy Old Facebook", "Old Instagram Account", "Register With Us To See More Of Our Product.", "Thanks In Advance."],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 80,
                            pauseFor: 1000,
                        }} />
                    </div>
                    <div className='  lg:mx-50 lg:text-sm'>
                        <p className=''>Buy and sell verified social media accounts safely with DC Store — your trusted marketplace.</p>
                    </div>
                    <div className='pt-5'> <p className=' lg:mx-50 text-sm mx-1'>Instagram
                        | Tiktok
                        | Country Facebook USA <br />
                        |⁠Other Countries Facebook
                        |⁠Twitter / X
                        | Texting Number
                        |⁠Other Socials</p>
                    </div>
                    <div className='  text-sm space-x-2 mt-6'>
                        <button className='border text-white rounded-xl px-9 py-4 bg-black '>Dive In</button>
                        <button onClick={handleLog} className='border text-black rounded-xl px-9 py-4 hover:bg-black hover:text-white p-3 bg-gray-300 '>Login</button>
                    </div>
                </div>
            </div>
            <section className=' lg:px-40'>
                <div className='flex justify-center '>
                    <div>
                    <img className='rounded-2xl' src={people} alt="" />
                        <p className=' flex justify-center text-2xl mt-2 '>-----About Us -----</p>
                        <h2 className=' text-gray-900 text-5xl mt-5'>Empowering Secure Social Media Account Trades with Trust</h2>
                        <p className='mt-4 text-sm'>DC Store has redefined the marketplace for digital entrepreneurs to acquire and sell established social media accounts. As a leading platform in the social media asset space, we bring together verified sellers and committed buyers in a safe, transparent environment.</p>
                        <p className='mt-5 text-sm'>Become part of the thousands who have made Rocky Socials their preferred choice for social media account trading. Your digital journey begins here.</p>
                    </div>
                </div>
                <div className='flex space-x-4 mt-4' >
                    <ul className='list-inside list-disc'>
                        <li>Dedicated Account Manager</li>
                        <li>Real-Time Market Analytics</li>
                        <li>Guaranteed Safe Transfer</li>
                    </ul>
                    <ul className='list-inside list-disc'>
                        <li>Instant Account Verification</li>
                        <li>24/7 Customer Support</li>
                        <li>Secure Escrow Payment Protection</li>
                    </ul>
                </div>
            </section>
            <section className='mt-10 bg-gray-200 py-12 lg:px-40 '>
                <div className='text-center'>
                    <p>------ How To Buy Social Media Accounts ------</p>
                    <h2 className='text-5xl text-gray-900 '>Simple, Secure, and Straightforward</h2>
                    <p>We’ve simplified the process to provide you with a safe and efficient way to buy social media accounts. Simply complete these three straightforward steps to find your perfect account.</p>
                </div>
                <div className='lg:flex mt-5  justify-center text-center '>
                    <div className='rounded-xl mx-3  h-50 sm:w-full mt-4 pt-10 bg-indigo-300'>
                        <FaClipboardList className='flex justify-center mx-auto text-4xl text-indigo-800' />
                        <h5 className='text-2xl'>Choose Your Account</h5>
                        <p>Browse through our verified accounts and pick the one that suits your goals. Each listing comes with comprehensive metrics and audience data.</p>
                    </div>
                    <div className='rounded-xl mx-3 h-50 sm:w-full mt-4 pt-10 bg-gray-400'>
                        <FaLock className='flex justify-center mx-auto text-4xl text-gray-800' />
                        <h5 className='text-2xl'>Secure Payment</h5>
                        <p>Complete your payment via our secure escrow system, keeping your funds protected until the transfer is finalized.</p>
                    </div>
                    <div className='rounded-xl mx-3 h-50 sm:w-full mt-4 pt-10 bg-violet-300'>
                        <FaExchangeAlt className='flex justify-center mx-auto text-4xl text-violet-800' />
                        <h5 className='text-2xl'>Account Transfer</h5>
                        <p>Once payment is confirmed, we'll guide you through our secure transfer process, with our support team available at every step.</p>
                    </div>
                </div>
            </section>
            <div className='lg:flex justify-center text-center lg:px-40 text-2xl lg:text-3xl text-white bg-gray-900 lg:space-x-10 py-10'>
                <div className='pt-10'>
                    <h1 className='text-4xl text-bold'>10</h1>
                    <p>Team members</p>
               </div> 
               <div className='pt-10'>
                    <h1 className='text-4xl text-bold'>6M+</h1>
                    <p>In Transaction Value</p>
               </div>
                <div className='pt-10'>
                    <h1 className='text-4xl text-bold'>350+</h1>
                    <p>Customers Attended To</p>
               </div>
                <div className='pt-10'>
                    <h1 className='text-4xl text-bold'>600+</h1>
                    <p> Accounts Sold</p>
               </div>
            </div>
            <section className='text-center mt-10 mx-10 lg:px-40'>
                <div>
                    <p> ---- Our Features -----</p>
                    <h5 className='text-2xl'>Dc store Offer Premium Services</h5>
                    <p className='text-sm'>What distinguishes us is our steadfast dedication to security and authenticity. Each account listed is thoroughly verified, guaranteeing buyers get exactly what they pay for. Our escrow service safeguards both buyers and sellers throughout the transaction, and our committed support team is available 24/7 to ensure seamless transfers.</p> 
                </div>
            </section>
            <section className="text-center mt-10 bg-gray-300 lg:px-40 py-10">
                <div>
                    <p className="text-gray-600 text-2xl">------Articles------</p>
                    <h1 className="text-4xl font-semibold">Our Latest Article</h1>
                </div>

                <div className="lg:flex mt-10 text-start justify-center gap-6 flex-wrap space-y-6">
                    {/* Card 1 */}
                    <div className="rounded-xl w-full sm:w-[400px] bg-white overflow-hidden shadow-md">
                        <div className="h-48 w-full  overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={social} // <-- replace with your actual image path or import
                                alt="Article 1"
                            />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-bold mb-2">How to Buy Account Logs</h1>
                            <p className="text-gray-600">Coming soon</p>
                            <p className="text-blue-500 mt-2 cursor-pointer">Read More</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl w-full sm:w-[400px] bg-white overflow-hidden shadow-md">
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={woman} // <-- replace with your actual image path or import
                                alt="Article 2"
                            />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-bold mb-2">
                                The Ultimate Guide to Buying and Selling Digital Accounts
                            </h1>
                            <p className="text-gray-600">Introduction: The world of digital account...</p>
                            <p className="text-blue-500 mt-2 cursor-pointer">Read More</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl w-full sm:w-[400px] bg-white overflow-hidden shadow-md">
                        <div className="h-40 w-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={laptop} // <-- replace with your actual image path or import
                                alt="Article 3"
                            />
                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-bold mb-2">Top Digital Accounts to Buy and Sell in 2025</h1>
                            <p className="text-gray-600">Introduction: The digital account market is...</p>
                            <p className="text-blue-500 mt-2 cursor-pointer">Read More</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Userhome