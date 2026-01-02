import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";

import { Link } from "react-router-dom";

import LogoPng from "/logo.svg";
import CartPng from "/icon-cart.svg";
import UserPng from "/image-avatar.png";
import MenuBars from "/icon-menu.svg";
import CloseMenu from "/icon-close.svg";

const Header = () => {
  //function to update Cart Hover Number with total number of items in the cart
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  //function to toggle mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  //function to toggle Cart Display
  const dispatch = useDispatch();
  function handleCartDisplay() {
    dispatch(toggleStatusTab());
  }

  return (
    <header className="sticky top-0 z-101 bg-white ">
      {/* The Entire Desktop Nav Element - from logo to user icon */}
      <nav className="mx-5 md:mx-[10%] py-3 md:py-0 md:pt-6 flex justify-between items-center md:shadow-[0px_1px_0px_rgba(10,10,1,0.1)] ">
        {/* The Left Hand Content of the Nav Element - from logo to menu buttons */}
        <div className="flex justify-between items-center md:gap-8 lg:gap-16 ">
          {/* Contains the logo and the menu bars */}
          <div className="flex justify-between items-center gap-3 md:pb-6">
            <img
              src={MenuBars}
              alt=""
              onClick={toggleMobileMenu}
              className="cursor-pointer md:hidden mt-0.5 w-3.5 h-3"
            />

            <Link to="/">
              <img
                src={LogoPng}
                alt="Sneaker Store Logo"
                className="cursor-pointer w-26 md:w-30 self-center  "
              />
            </Link>
          </div>{" "}
          {/* close logo and menu bars */}
          {/* The menu items */}
          <ul className="hidden md:flex justify-between items-center gap-10 font-medium text-darkGrayishBlue font-display ">
            <li className="md:pb-6 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Collections</a>
            </li>
            <li className="md:pb-6 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Men</a>
            </li>
            <li className="md:pb-6 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Women</a>
            </li>
            <li className="md:pb-6 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">About</a>
            </li>
            <li className="md:pb-6 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Contact</a>
            </li>
          </ul>{" "}
          {/* Close menu items*/}
        </div>{" "}
        {/* Close LHS content*/}
        {/* The Right Hand Content of the Nav Element - cart and user icons */}
        <div className="flex justify-between items-center gap-4 md:gap-7 md:pb-6 ">
          <div className="relative cart-toggle" onClick={handleCartDisplay}>
            <img src={CartPng} alt="" className="cursor-pointer w-[1rem]" />
            <span
              className={`absolute w-4.5 h-3 items-center
              cursor-pointer justify-center -top-1.5 -right-2 text-[10px] font-semibold py-0.5 px-2 bg-orange rounded-[20px] text-white ${
                carts.length < 1 ? "hidden" : "flex"
              }`}
            >
              {totalQuantity}
            </span>
          </div>

          <img
            src={UserPng}
            alt=""
            className="w-[1.5rem] md:w-[2rem] rounded-[50%] border-2 border-transparent hover:border-orange cursor-pointer "
          />
        </div>
        {/* Close RHS content*/}
      </nav>
      {/* Close Desktop Nav content*/}

      {/* Mobile Menu Begins - the entire overlay element*/}
      <div
        id="mobileMenu"
        className="hidden md:hidden fixed top-0 left-0 w-full bg-transparentBlack h-full "
      >
        {/*Actual Contents of the menu - closeMenu icons and menu list items*/}
        <div className="w-[65%] h-full px-5 py-3 bg-white">
          <img
            src={CloseMenu}
            alt=""
            onClick={toggleMobileMenu}
            className=" cursor-pointer w-3.5 h-3.5 mt-1.5 "
          />

          <ul className="md:hidden flex flex-col mt-10 font-bold text-black font-display ">
            <li className="w-fit py-3 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Collections</a>
            </li>
            <li className="w-fit py-3 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Men</a>
            </li>
            <li className="w-fit py-3 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Women</a>
            </li>
            <li className="w-fit py-3 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">About</a>
            </li>
            <li className="w-fit py-3 border-b-2 border-b-white hover:border-b-orange ">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* Close main content*/}
      </div>
      {/* Close mobile menu overlay content*/}
    </header>
  );
};

export default Header;
