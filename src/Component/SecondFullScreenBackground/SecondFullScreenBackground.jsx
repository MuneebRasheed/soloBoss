import React from "react";
import "./SecondFullScreenBackground.css";

const SecondFullScreenBackground = ({ backgroundImage, children }) => {
  return (
    <div style={{ width: "1000px", height: "500px" }}>
      <div
        className="full-screen-backgrounds"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
    </div>
  );
};

export default SecondFullScreenBackground;
