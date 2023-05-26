import React from "react";
import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <div className="py-1 px-2 flex items-center bg-orange-300">
      <a href="/PersonalWebsite/#/Restaurant" className="w-14 h-14 block mx-auto">
        <img src={Logo} alt="White Sugar Restaurant" />
      </a>
      <div className="flex gap-8 absolute right-4 ">
        <a href="#/Restaurant/Menu" className="">Menu</a>
        <a href="#/Restaurant/Contact" className="">Contact</a>
        <a href="#/Restaurant/Reserve" className="">Reserve</a>
      </div>
    </div>
  );
}

export default Header;