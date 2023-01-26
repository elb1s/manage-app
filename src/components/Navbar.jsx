import React, { useState } from "react";
import iconSvg from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import hClose from "../assets/images/icon-close.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Testimonials" },
  ];
  return (
    <nav className="flex bg-transparent py-8 font-vietnam  mx-auto md:items-center">
      <div>
        <img src={iconSvg} alt="Icon" />
      </div>
      <ul className="md:flex gap-4 mx-auto items-center ">
        <img
          src={isOpen ? hClose : hamburger}
          alt="Hamburger"
          className={`md:hidden  cursor-pointer absolute right-8`}
          onClick={() => setIsOpen(!isOpen)}
        />
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`${isOpen ? "my-5  md:my-0  " : "hidden md:flex"}`}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
