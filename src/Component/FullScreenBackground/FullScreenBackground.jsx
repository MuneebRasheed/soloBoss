import React from "react";
import "./FullScreenBackground.css";

const FullScreenBackground = ({ backgroundImage, children }) => {
  return (
    <div
      className="full-screen-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default FullScreenBackground;
