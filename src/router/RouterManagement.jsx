// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LoginDosen from "../pages/loginDosen/LoginDosen";
import Home from "../pages/landingPage/home/Home";
import Features from "../pages/landingPage/features/Features";
import AboutUs from "../pages/landingPage/aboutUs/AboutUs";

const RouterManagement = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-dosen" element={<LoginDosen />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouterManagement;
