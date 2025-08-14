import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const options = [
    'Facebook',
    'Instagram',
    'Twitter / X',
    'TikTok',
    'Snapchat',
    'LinkedIn',
    'YouTube',
    'WhatsApp',
    'Telegram',
    'Reddit',
];

const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

const SocialMediaDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Category');

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full sm:w-60">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full bg-black text-white p-2 border border-gray-600 rounded-md hover:bg-white hover:text-black transition flex justify-between items-center"
            >
                {selected}
                {/* react-icons ChevronDown with rotation */}
                <motion.span
                    className="ml-2"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }} // needed for rotate animation
                >
                    <FaChevronDown />
                </motion.span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-2 z-20 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto"
                    >
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SocialMediaDropdown;
