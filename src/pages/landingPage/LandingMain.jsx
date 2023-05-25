import React from "react";
import Home from "./home/Home";
import AboutUs from "./aboutUs/AboutUs";
import Features from "./features/Features";
import Navbar from "./header/Navbar";
import AppFooter from "./footer/AppFooter";

const LandingMain = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Features />
      <AppFooter />
    </div>
  );
};

export default LandingMain;
