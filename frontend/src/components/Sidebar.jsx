import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { menuItems } from "../data";
import { Navitem } from "../components/Navitem";
import { Tooltip } from "react-tooltip";
import ProfileModal from "./ProfileModal";

const Sidebar = () => {
  const [isopne, setIsopne] = useState(window.innerWidth >= 640);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsopne(true);
      } else {
        setIsopne(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <button
        className="fixed top-20 left-4  z-50 text-xl block "
        onClick={() => setIsopne((prev) => !prev)}
        style={{ borderRadius: "50%", padding: "0.5rem" }}
      >
        <FaBars />
      </button>

      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isopne ? 240 : 60 }}
        transition={{ duration: 0.5 }}
        className={`fixed bg-white-900 h-screen text-white flex flex-col gap-6 left-0 z-40 lg:top-15
          ${!isopne && "hidden sm:flex"}`}
      >
        <nav className="flex bg-white flex-col pt-10 gap-10 h-full overflow-y-auto mt-32 lg:mt-20">
          {menuItems.map((item, index) => (
            <Navitem
              key={index}
              to={item.to}
              icon={item.icon}
              text={item.text}
              isopne={isopne}
              setIsopne={setIsopne}
              onClick={
                item.text === "Profile"
                  ? () => setProfileModalOpen(true)
                  : undefined
              }
            />
          ))}
        </nav>
      </motion.div>

      {!isopne && <Tooltip id="sidebar-tooltip" offset={40} />}

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
