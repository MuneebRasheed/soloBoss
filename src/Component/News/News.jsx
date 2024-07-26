import React from "react";
import "./News.css"; // Assuming you have a CSS file for styling
import image from "../../assets/Image2.jpg";
const News = () => {
  return (
    <div className="solboss-container">
      <h2
        style={{
          fontFamily: "Lemon Days",
          display: "flex",
          justifyContent: "center"
        }}
      >
        News
      </h2>
      <div className="solboss-title">
        SOLBOSS ($SOLBO): THE UNSTOPPABLE FORCE OF THE SOLANA CHAIN IS HERE!
      </div>
      <img
        src={image} // Update this path to where your image is stored
        alt="Solboss"
        className="solboss-image"
      />
      <div className="solboss-content">
        <p className="solboss-subtitle">
          Ladies and gentlemen, gather 'round because it's time to meet the
          undisputed champion of the Solana chain. The ape in the suit, the
          money-making machine: SOLBOSS ($SOLBO)! This isn't just another meme
          coin: this is a movement. A revolution. A phenomenon that's ready to
          take charge and dominate the crypto world like never before. Buckle
          up, because SOLBOSS is about to take you on the ride of your life!
        </p>
        <h2 className="solboss-title">THE APE IN THE SUIT</h2>
        <p className="solboss-subtitle">
          A new era begins. Forget what you know about meme coins because
          SOLBOSS is rewriting the rulebook.
        </p>
      </div>
    </div>
  );
};

export default News;
