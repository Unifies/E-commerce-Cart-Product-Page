import React from "react";
import FooterPng from "/logo-gray.svg";
import { LuCopyright } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-15 py-5 md:py-0">
        <img
          src={FooterPng}
          alt=""
          className="cursor-pointer w-26 md:w-30 self-start"
        />

        <div className="flex justify-between flex-wrap gap-10 md:gap-0">
          <div>
            <h1 className="text-xl font-bold mb-7 pb-1 border-b border-b-grayishBlue w-40">
              Shop
            </h1>
            <ul>
              <li>
                <a href="#">Just Dropped</a>
              </li>
              <li>
                <a href="#">Men's Collection</a>
              </li>
              <li>
                <a href="#">Women's Collection</a>
              </li>
              <li>
                <a href="#">Limited Editions</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-7 pb-1 border-b border-b-grayishBlue w-40">
              Company
            </h1>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-7 pb-1 border-b border-b-grayishBlue w-40">
              Support
            </h1>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Returns & Exchanges</a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-bold mb-7 pb-1 border-b border-b-grayishBlue w-40">
              Legal
            </h1>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
            <a href=""></a>
          </div>
        </div>

        <div className="flex flex-col gap-7 justify-between md:flex-row ">
          <p className="flex gap-1 items-center text-sm sm:text-md">
            <LuCopyright /> 2025 Sneakers Store. All rights reserved.
          </p>
          <div className="flex gap-5 *:hover:text-darkGrayishBlue">
            <a href="#" title="Facebook">
              <FaFacebook />
            </a>
            <a href="#" title="Twitter">
              <FaXTwitter />
            </a>
            <a href="#" title="Instagram">
              <RiInstagramFill />
            </a>
            <a href="#" title="LinkedIn">
              <IoLogoLinkedin />
            </a>
            <a href="#" title="YouTube">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
