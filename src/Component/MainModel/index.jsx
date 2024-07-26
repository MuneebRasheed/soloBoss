import React, { useState } from "react";
import presaleIcon from "../../assets/preSale.png";
import Audit from "../../assets/Audit.png";
import GalleryImg from "../../assets/Gallery.png";
import news from "../../assets/news.png";
import Telegram from "../../assets/Telegram.png";
import Tools from "../../assets/Tools.png";
import Twitter from "../../assets/Twitter.png";
import tokenomicsIcon from "../../assets/Tokenomics.png";
import SwitchIcon from "../../assets/powerSwitch.png";
import Monkey from "../../assets/monkey.png";
import "./MainModel.css";
import MenuItem from "../MenuItem";
import Chart from "../Chart/Chart";
import monkeyModel from "../../assets/monkeyModel.png";
import Cross from "../../assets/Cross.png";
import CarouselComponent from "../Crousle";
import News from "../News/News";
import Gallery from "../Gallery/index.jsx";
export default function MainModel() {
  const [preSale, setPreSale] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [newsState, setNews] = useState(false);
  const [tokenmics, setTokenMics] = useState(false);
  const [commingSoon, setCommingSoon] = useState(false);

  return (
    <div className="home-container">
      <div className="sidebar">
        <div>
          <img src={Monkey} alt="Solboss" className="monkey-image" />
          <div className="details">
            <div className="Title">SOLBOSS</div>
            <div className="SubTitle">bananas@solboss.xyz</div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="LeftBnana">🍌</div>
          <div className="rightBnana">🍌</div>
          <div
            className="presale-banner"
            onClick={() => {
              setCommingSoon(true);
            }}
          >
            Presale is Coming Soon
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-section-top">
          <div className="Heading">
            Click to below items to get more information
          </div>
          <div className="menu-grid">
            <MenuItem
              icon={presaleIcon}
              label="Presale"
              onClick={() => {
                setPreSale(true);
              }}
            />
            <MenuItem
              icon={tokenomicsIcon}
              label="Tokenomics"
              onClick={() => {
                setTokenMics(true);
              }}
            />
            <MenuItem
              icon={news}
              label="News"
              onClick={() => {
                setNews(true);
              }}
            />
            <MenuItem
              icon={GalleryImg}
              label="Gallery"
              onClick={() => {
                setGallery(true);
              }}
            />
            <MenuItem icon={Tools} label="Tools" comingSoon />
            <MenuItem icon={Audit} label="Audit" />
            <MenuItem icon={Telegram} label="Telegram" />
            <MenuItem icon={Twitter} label="Twitter" />
          </div>
        </div>
        <div className="BottomLine">
          <div className="TextOff">click to turn off</div>
          <div className="PowerButton">
            <img src={SwitchIcon} alt={"power"} />
          </div>
        </div>
      </div>
      {preSale ? (
        <div className="Model">
          <div
            style={{
              display: "flex",
              backgroundColor: "#C45951",
              width: "51px",
              height: "51px",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              right: 0
            }}
            onClick={() => {
              setPreSale(false);
            }}
          >
            <img src={Cross} alt={"label"} />
          </div>
          <img src={monkeyModel} alt={"label"} className="iconLeft" />
          <Chart />
          <img src={monkeyModel} alt={"label"} className="iconRight" />
        </div>
      ) : null}
      {tokenmics ? (
        <div className="Model">
          <div
            style={{
              display: "flex",
              backgroundColor: "#C45951",
              width: "51px",
              height: "51px",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              right: 0
            }}
            onClick={() => {
              setTokenMics(false);
            }}
          >
            <img src={Cross} alt={"label"} />
          </div>
          <CarouselComponent />
        </div>
      ) : null}

      {newsState ? (
        <div className="Model">
          <div
            style={{
              display: "flex",
              backgroundColor: "#C45951",
              width: "51px",
              height: "51px",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              right: 0
            }}
            onClick={() => {
              setNews(false);
            }}
          >
            <img src={Cross} alt={"label"} />
          </div>
          <News />
        </div>
      ) : null}

      {gallery ? (
        <div className="Model">
          <div
            style={{
              display: "flex",
              backgroundColor: "#C45951",
              width: "51px",
              height: "51px",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              right: 0
            }}
            onClick={() => {
              setGallery(false);
            }}
          >
            <img src={Cross} alt={"label"} />
          </div>
          <Gallery />
        </div>
      ) : null}

      {commingSoon ? (
        <div className="Model1">
          <div
            style={{
              display: "flex",
              backgroundColor: "#C45951",
              width: "51px",
              height: "51px",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              right: 0
            }}
            onClick={() => {
              setCommingSoon(false);
            }}
          >
            <img src={Cross} alt={"label"} />
          </div>
          <div className="divWrapper">
            <div className="commingSoonBnana">🍌</div>
            <div className="commingSoon">Presale is coming soon</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
