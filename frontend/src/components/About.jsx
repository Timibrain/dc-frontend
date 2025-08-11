import React from 'react'
import Sidebar from '../components/Sidebar'

const About = ({ user, setUser }) => {
    return (
        <>
            <div className=''>
                {<Sidebar />}


            </div>
            <div className=' px-10  w-full bg-gray-300 text-center font-bold h-150 flex justify-center items-center'>
                <div className='pt-40'>
                    <p className='text-2xl'>About Us -----</p>
                    <h2 className='text-3xl mt-5'> Your Trusted Partner in Social Media Account Trading</h2>
                    <p className='mt-4 text-sm'>At Rocky Socials, we've revolutionized the way digital entrepreneurs acquire and sell established social media accounts. As a leading marketplace in the social media asset space, we connect serious buyers with verified sellers through a secure, transparent platform.</p>
                    <p className='mt-5 text-sm'>Join the thousands of satisfied clients who have chosen Rocky Socials as their preferred platform for social media account trading. Your digital future starts here.</p>
                </div>
                
            </div>
            <section className='mx-5 lg:px-40 '>
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
            <div className='lg:flex justify-center text-center lg:px-40 text-2xl lg:text-3xl text-white bg-indigo-950 lg:space-x-10 py-10'>
                <div className='pt-10'>
                    <h1>12</h1>
                    <p>Team members</p>
                </div>
                <div className='pt-10'>
                    <h1>5M+</h1>
                    <p>In Transaction Value</p>
                </div>
                <div className='pt-10'>
                    <h1>360+</h1>
                    <p>Customers Attended To</p>
                </div>
                <div className='pt-10'>
                    <h1>500+</h1>
                    <p> Accounts Sold</p>
                </div>
            </div>
            <section className='text-center mt-10 mx-10 lg:px-40'>
                <div>
                    <p> ---- Our Features -----</p>
                    <h5 className='text-2xl'>Rocky Social Offer Premium Services</h5>
                    <p className='text-sm'>What sets us apart is our unwavering commitment to security and authenticity. Every account listed undergoes rigorous verification, ensuring that buyers receive exactly what they're investing in. Our escrow service protects both parties during transactions, while our dedicated support team provides round-the-clock assistance to ensure smooth transfers.</p>
                </div>
            </section>
        </>
    )
}

export default About