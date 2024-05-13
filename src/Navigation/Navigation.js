import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ErrorPage from "../pages/Error/Error";
import Rental from "../pages/Rental/Rental";
const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {["/", "/Kasa"].map((path) => (
          <Route key={path} path={path} element={<Home />} />
        ))}
        <Route path="/About" element={<About />} />
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
