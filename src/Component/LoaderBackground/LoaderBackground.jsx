import React from "react";
import "./LoaderBackground.css";
import Loader from "../Loader";
const LoaderBackground = ({ backgroundImage, children }) => {
  return (
    <div
      className="full-screen-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
      <Loader progress={35} />
    </div>
  );
};

export default LoaderBackground;
