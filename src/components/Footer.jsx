import iconSvg from "../assets/images/logo.svg";
import React from "react";
import iconFB from "../assets/images/icon-facebook.svg";
import iconINST from "../assets/images/icon-instagram.svg";
import iconYT from "../assets/images/icon-youtube.svg";
import iconTW from "../assets/images/icon-twitter.svg";
import iconPint from "../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-gray-800 mx-auto md:px-16 px-10 py-20 text-white md:flex md:flex-row flex-col-reverse gap-60 items-center">
      <div className="gap-20  flex flex-col">
        <div>
          <img src={iconSvg} alt="icon" />
        </div>
        <div className="flex gap-3">
          <img src={iconFB} alt="Facebook" />
          <img src={iconYT} alt="Youtube" />
          <img src={iconTW} alt="Twitter" />
          <img src={iconPint} alt="Pinterest" />
          <img src={iconINST} alt="Instagram" />
        </div>
      </div>
      <div className="flex gap-40 mt-6 md:mt-0">
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>Carrers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
