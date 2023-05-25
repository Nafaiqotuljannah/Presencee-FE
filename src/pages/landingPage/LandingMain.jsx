import React from "react";
import Home from "./home/Home";
import AboutUs from "./aboutUs/AboutUs";
import Features from "./features/Features";
import Navbar from "./header/Navbar";

const LandingMain = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Features />
    </div>
  );
};

export default LandingMain;
