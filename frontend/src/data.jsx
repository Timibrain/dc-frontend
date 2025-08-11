import {
  FaHome,
  FaTachometerAlt,
  FaInfoCircle,
  FaFileAlt,
  FaPhoneAlt,
  FaShoppingCart,
  FaMoneyBillWave,
} from 'react-icons/fa';

export const menuItems = [
  { icon: <FaHome />, text: "Home", to: "/home" },
  { icon: <FaTachometerAlt />, text: "Dashboard", to: "/dashboard" },
  { icon: <FaInfoCircle />, text: "About", to: "/about" },
  { icon: <FaFileAlt />, text: "Buy Logs", to: "/howtobuy" },
  { icon: <FaPhoneAlt />, text: "Numbers", to: "/numbers" },
  { icon: <FaShoppingCart />, text: "Buy", to: "/buy" },
  { icon: <FaMoneyBillWave />, text: "Fund", to: "/fund" },
];

export default menuItems;
