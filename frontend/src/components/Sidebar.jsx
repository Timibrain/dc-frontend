import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { menuItems } from '../data';
import { Navitem } from '../components/Navitem'
import { Tooltip } from 'react-tooltip';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isopne, setIsopne] = useState(window.innerWidth >= 640);

  // Auto open on large screens, close on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsopne(true);
      } else {
        setIsopne(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* FaBars button: always visible on small screens, outside sidebar */}
      <button
        className='fixed top-20 left-4  z-50 text-xl block '
        onClick={() => setIsopne(prev => !prev)} // Toggle instead of always open
        style={{ borderRadius: '50%', padding: '0.5rem' }}
      >
        <FaBars />
      </button>

      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isopne ? 240 : 60 }}
        transition={{ duration: 0.5 }}
        className={`fixed bg-white-900 h-screen text-white  flex flex-col gap-6 left-0 z-40 lg:top-15
          ${!isopne && 'hidden sm:flex'}`}
      >
        <nav className='flex bg-white flex-col pt-10 gap-10 h-full overflow-y-auto mt-32 lg:mt-20 '>
          {menuItems.map((item, index) => (
            <Navitem key={index} to={item.to} icon={item.icon} text={item.text} isopne={isopne} setIsopne={setIsopne} />
          ))}
        </nav>
      </motion.div>
      {!isopne && <Tooltip id='sidebar-tooltip' offset={40} />}
    </div>
  )
}

export default Sidebar