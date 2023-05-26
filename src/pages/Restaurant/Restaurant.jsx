import React from "react";
import Header from "./RestaurantComponents/Header";
import Footer from "./RestaurantComponents/Footer";
import { Routes, Route } from "react-router-dom";
import MainPage from "./RestaurantPages/Mainpage";
import Menu from "./RestaurantPages/Menu";
import Contact from "./RestaurantPages/Contact";
import Reserve from "./RestaurantPages/Reserve";

const RestaurantIndex = () => {
  return (
    <>
    <Header />

    <Routes>
			<Route index path="/" element={<MainPage />} />
      <Route path="Menu" element={<Menu />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Reserve" element={<Reserve />} />
    </Routes>

    <Footer />
    </>
  );
}

export default RestaurantIndex;