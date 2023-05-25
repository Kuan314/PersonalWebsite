import React from "react";
import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <div className="py-1 px-2 flex items-center bg-orange-300">
      <img src={Logo} alt="White Sugar Restaurant" className="w-14 h-14 block mx-auto" />
      <div className="flex gap-8 absolute right-4 ">
        <a href="" className="">Menu</a>
        <a href="" className="">Contact</a>
        <a href="" className="">Reserve</a>
      </div>
    </div>
  );
}

export default Header;