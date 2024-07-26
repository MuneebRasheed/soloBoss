import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartBackground from "../../assets/ChartBackground.png";
import "./Chart.css";

function Chart() {
  const data = {
    labels: ["LP (BURNT!)", "PRESALE"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#fdc237", "#5263f2"],
        hoverBackgroundColor: ["#fdc237", "#5263f2"],
        borderColor: ["#000", "#000"], // Black border for each segment
        borderWidth: 2,
        spacing: 5
      }
    ]
  };

  const options = {
    cutout: "80%", // Adjusts the size of the donut hole
    plugins: {
      legend: {
        display: false // Hide the legend
      }
    }
  };
  return (
    <div
      style={{
        height: "458px",
        width: "424px",
        display: "flex",
        textAlign: "center",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <h2 style={{ fontFamily: "Lemon Days" }}>TOKENOMICS</h2>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundImage: `url(${ChartBackground})`,
          backgroundSize: "cover",
          zIndex: 2,
          backgroundPosition: "top center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            backgroundColor: "white",
            borderRadius: "130px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "#FFE169",
              height: "130px",
              width: "130px",
              borderRadius: "65px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "1px solid #EFB970"
            }}
          >
            <div className="priceText">MAX SUPPLY: </div>
            <div className="priceText">20,000,000,000</div>
          </div>
          <Doughnut data={data} options={options} />
          <div
            className="Yellow"
            style={{ position: "absolute", left: 185, top: 90 }}
          >
            <div className="eightyDiv">80</div>
            <div className="divText">Presale</div>
          </div>
          <div
            className="Yellow"
            style={{ position: "absolute", right: 150, top: 0 }}
          >
            <div className="divText">LP (BURNT!)</div>
            <div className="eightyDiv">20</div>
          </div>
        </div>
      </div>

      <div className="buttonDiv">
        <div className="button">
          <div className="buttonText">0% TEAM TOKEN</div>
        </div>
        <div className="button">
          <div className="buttonText">Name: SolBoss Ticker: SOLBO</div>
        </div>
        <div className="button">
          <div className="buttonText">0% TAX</div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
