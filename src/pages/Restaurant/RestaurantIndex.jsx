import React from "react";
import Header from "./RestaurantComponents/Header";
import Footer from "./RestaurantComponents/Footer";
import { Outlet } from "react-router-dom";

const RestaurantIndex = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

export default RestaurantIndex;