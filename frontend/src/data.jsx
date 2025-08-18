import {
  FaHome,
  FaTachometerAlt,
  // FaInfoCircle,
  FaFileAlt,
  FaPhoneAlt,
  FaShoppingCart,
  FaMoneyBillWave,
} from 'react-icons/fa';

export const menuItems = [
  { icon: <FaHome />, text: "Profile"},
  { icon: <FaTachometerAlt />, text: "Dashboard", to: "/dashboard" },
  // { icon: <FaInfoCircle />, text: "About", to: "/about" },
  { icon: <FaFileAlt />, text: "Purchased Account", to: "/howtobuy" },
  { icon: <FaPhoneAlt />, text: "Change Password", to: "/numbers" },
  { icon: <FaShoppingCart />, text: "Buy", to: "/buy" },
  { icon: <FaMoneyBillWave />, text: "Fund", to: "/fund" },
];

export default menuItems;
