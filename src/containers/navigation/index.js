import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../LandingPageCh1/Home";
import Base from "../Landingch2/Base";
import Market from "../Market/Market";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
    </Routes>
  );
};

export default Navigation;
