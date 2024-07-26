import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/Image1.png";
import image3 from "../../assets/Image3.png";
import image2 from "../../assets/Image2.jpg";
import "./Crousle.css";
const carouselItems = [
  {
    title: "LEADERSHIP AND VISION",
    image: image1,
    description:
      "$SOLBO: Led by the powerful and ambitious SOLBOSS, an ape in a suit who is a symbol of success. $PEPE: Lacks the iconic leadership that drives $SOLBO's vision."
  },
  {
    title: "MARKETING PROWESS",
    image: image2,
    description:
      "$SOLBO: Unmatched marketing strategy with viral campaigns and influencer endorsements. $PEPE: Doesn’t achieve the widespread impact that $SOLBO's marketing delivers."
  },
  {
    title: "COMMUNITY ENGAGEMENT",
    image: image3,
    description:
      "$SOLBO: A dynamic, engaged, and rapidly growing community. $PEPE: Loyal fanbase but less interactive and energetic."
  },
  {
    title: "MARKETING PROWESS",
    image: image2,
    description:
      "$SOLBO: Unmatched marketing strategy with viral campaigns and influencer endorsements. $PEPE: Doesn’t achieve the widespread impact that $SOLBO's marketing delivers."
  },
  {
    title: "COMMUNITY ENGAGEMENT",
    image: image3,
    description:
      "$SOLBO: A dynamic, engaged, and rapidly growing community. $PEPE: Loyal fanbase but less interactive and energetic."
  },
  {
    title: "LEADERSHIP AND VISION",
    image: image1,
    description:
      "$SOLBO: Led by the powerful and ambitious SOLBOSS, an ape in a suit who is a symbol of success. $PEPE: Lacks the iconic leadership that drives $SOLBO's vision."
  },
  {
    title: "MARKETING PROWESS",
    image: image2,
    description:
      "$SOLBO: Unmatched marketing strategy with viral campaigns and influencer endorsements. $PEPE: Doesn’t achieve the widespread impact that $SOLBO's marketing delivers."
  }
];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
    // adaptiveHeight: true
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h2
        style={{
          fontFamily: "Lemon Days",
          display: "flex",
          justifyContent: "center"
        }}
      >
        TOKENOMICS
      </h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            style={{
              textAlign: "center"
            }}
          >
            <div
              style={{
                textAlign: "center",
                boxSizing: "border-box",
                border: "1px solid black",
                margin: "10px",
                height: "393px"
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "222px", height: "196px", objectFit: "cover" }}
              />
              <div
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "20px"
                }}
              >
                <div className="TitleCrousle">{item.title}</div>
                <div className="subTitleCrousle">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
