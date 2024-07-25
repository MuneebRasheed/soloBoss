import React from "react";
import FullScreenBackground from "../Component/FullScreenBackground/FullScreenBackground";
import image from "../assets/Splash.jpg";
import loader from "../assets/LoaderImage.png";

import MainModel from "../Component/MainModel";
import SecondFullScreenBackground from "../Component/SecondFullScreenBackground/SecondFullScreenBackground";

export default function Main() {
  return (
    <FullScreenBackground backgroundImage={image}>
      <div
        style={{
          height: "696px",
          width: "1200px",
          backgroundImage: `url(${loader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <MainModel />
      </div>
    </FullScreenBackground>
  );
}
