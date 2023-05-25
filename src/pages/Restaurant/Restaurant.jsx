import React from "react";
import Header from "./RestaurantComponents/Header";
import Footer from "./RestaurantComponents/Footer";
import { Routes, Route } from "react-router-dom";
import MainPage from "./RestaurantPages/Mainpage";
import Foods from "./RestaurantPages/Menu";
import Contact from "./RestaurantPages/Contact";

const RestaurantIndex = () => {
  return (
    <>
    <Header />

    <Routes>
			<Route index path="/" element={<MainPage />} />
      <Route path="Foods" element={<Foods />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>

    <Footer />
    </>
  );
}

export default RestaurantIndex;