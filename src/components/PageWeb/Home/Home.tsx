import React from "react";
import Slider from "./Slider";
import "./Home.css";
import Footer from "../Store/Footer";
import Map from "../../../Map";

export default () => {
  return (
    <div className="home-container">
      <Slider />
      <div style={{width: 1520, height: 700}}>
        <Map/>
      </div>
      <Footer/>
    </div>
  );
};
// aaa
