import React from "react";
import "./MenuItem.css";

const MenuItem = ({ icon, label, comingSoon }) => {
  return (
    <div className="menu-item">
      <img src={icon} alt={label} className="icon" />
      <p className="title">{label}</p>
      {/* {comingSoon && <span className="coming-soon-badge">Coming Soon</span>} */}
    </div>
  );
};

export default MenuItem;
