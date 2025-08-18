import React from "react";
import { Link } from "react-router-dom";

export const Navitem = ({ icon, text, to, onClick, isopne }) => {
  const content = (
    <div
      onClick={onClick}
      className="flex text-black items-center lg:pl-4 pl-6 gap-4 cursor-pointer w-full hover:text-blue-400"
      data-tooltip-id={!isopne ? "sidebar-tooltip" : undefined}
      data-tooltip-content={!isopne ? text : undefined}
    >
      <span className="text-xl">{icon}</span>
      {isopne && <div>{text}</div>}
    </div>
  );

  return to && !onClick ? <Link to={to}>{content}</Link> : content;
};

export default Navitem;
