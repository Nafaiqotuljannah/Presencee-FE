import React from "react";
import Home from "./home/Home";
import AboutUs from "./aboutUs/AboutUs";
import Features from "./features/Features";
import Navbar from "./header/Navbar";
import ContactUs from "./contactUs/ContactUs";

const LandingMain = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Features />
      <ContactUs/>
    </div>
  );
};

export default LandingMain;
