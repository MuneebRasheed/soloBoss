import React from "react";
import LoaderBackground from "../Component/LoaderBackground/LoaderBackground";
import image from "../assets/LoaderImage.png";
export default function LoadingScreen() {
  return <LoaderBackground backgroundImage={image}></LoaderBackground>;
}
