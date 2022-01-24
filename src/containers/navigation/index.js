import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../LandingPageCh1/Home";
import Base from "../Landingch2/Base";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Base />} />
    </Routes>
  );
};

export default Navigation;
