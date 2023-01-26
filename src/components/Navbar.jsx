import React, { useState } from "react";
import iconSvg from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import hClose from "../assets/images/icon-close.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "aboutus" },
    { name: "Testimonials", id: "testimonials" },
  ];
  return (
    <nav className="flex bg-orange-500 z-10 justify-between py-4 px-4 font-vietnam md:items-center sticky top-0 rounded-b-xl">
      <div className="cursor-pointer">
        <img src={iconSvg} alt="Icon" />
      </div>
      <ul className="md:flex gap-12  ">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={isOpen ? hClose : hamburger}
          alt="Hamburger"
          className={`md:hidden  cursor-pointer absolute right-8`}
          onClick={() => setIsOpen(!isOpen)}
        />
        {navLinks.map((link, index) => (
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
            key={index}
            className={`${
              isOpen
                ? " my-10  md:my-0  "
                : "hidden md:flex cursor-pointer text-white hover:text-gray-400 duration-300"
            }`}
          >
            <Link to={link.id} smooth={true} offset={-100} duration={1000}>
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
