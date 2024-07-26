import React from "react";
import "./Gallery.css"; // Ensure you have the appropriate CSS file
import image from "../../assets/GalleryImage1.png";
import image2 from "../../assets/GalleryImage2.png";
import image3 from "../../assets/GalleryImage3.png";
import image4 from "../../assets/GalleryImage4.png";
import image5 from "../../assets/GalleryImage5.png";
import image6 from "../../assets/GalleryImage6.png";
import image7 from "../../assets/GalleryImage7.png";
import image8 from "../../assets/GalleryImage8.png";

const Gallery = () => {
  // Array of image sources
  const images = [
    image,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];

  return (
    <div className="gallery-container">
      <h2
        style={{
          fontFamily: "Lemon Days",
          display: "flex",
          justifyContent: "center"
        }}
      >
        Gallery
      </h2>
      <div className="row1">
        <div className="firstImage">
          <img
            src={image} // Update this path to where your image is stored
            alt="Solboss"
            className="gallery-image1"
          />
        </div>
        <div className="secondImage">
          <img
            src={image2} // Update this path to where your image is stored
            alt="Solboss"
            // className="gallery-image1"
          />
          <img
            src={image3} // Update this path to where your image is stored
            alt="Solboss"
            // className="gallery-image1"
          />
        </div>

        <div className="firstImage">
          <img
            src={image4} // Update this path to where your image is stored
            alt="Solboss"
            className="gallery-image1"
          />
        </div>
      </div>
      <div className="row1">
        <div className="firstImage">
          <img
            src={image5} // Update this path to where your image is stored
            alt="Solboss"
            className="gallery-image2"
          />
        </div>
        <div className="firstImage">
          <img
            src={image6} // Update this path to where your image is stored
            alt="Solboss"
            className="gallery-image2"
          />
        </div>
        <div className="firstImage">
          <img
            src={image7} // Update this path to where your image is stored
            alt="Solboss"
            className="gallery-image2"
          />
        </div>
        <div className="firstImage">
          <img
            src={image8} // Update this path to where your image is stored
            alt="Solboss"
            className="gallery-image2"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
