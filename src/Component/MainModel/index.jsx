import React from "react";
import presaleIcon from "../../assets/preSale.png";
import Audit from "../../assets/Audit.png";
import Gallery from "../../assets/Gallery.png";
import news from "../../assets/news.png";
import Telegram from "../../assets/Telegram.png";
import Tools from "../../assets/Tools.png";
import Twitter from "../../assets/Twitter.png";
import tokenomicsIcon from "../../assets/Tokenomics.png";
import SwitchIcon from "../../assets/powerSwitch.png";
import Monkey from "../../assets/monkey.png";
import "./MainModel.css";
import MenuItem from "../MenuItem";
export default function MainModel() {
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
          <div className="presale-banner">Presale is Coming Soon</div>
        </div>
      </div>
      <div className="content">
        <div className="content-section-top">
          <div className="Heading">
            Click to below items to get more information
          </div>
          <div className="menu-grid">
            <MenuItem icon={presaleIcon} label="Presale" />
            <MenuItem icon={tokenomicsIcon} label="Tokenomics" />
            <MenuItem icon={news} label="News" />
            <MenuItem icon={Gallery} label="Gallery" />
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
    </div>
  );
}
