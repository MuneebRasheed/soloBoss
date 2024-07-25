import React from "react";
import "./Loader.css";

const Loader = ({ progress }) => {
  return (
    <div className="loader">
      <div className="loader-wrapper ">
        <div className="text-wrapper">
          <div className="loader-text FontFamily">STARTING</div>
          <div className="loader-text FontFamily">{progress}%</div>
        </div>
        <div className="loader-bar">
          <div
            className="loader-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
