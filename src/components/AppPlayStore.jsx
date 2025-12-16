import React from "react";
import DroidImage from "/iDroid.png";
import IphoneImage from "/iPhone.png";
import AddToCartButton from "../components/AddToCartButton";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

import SecondaryButton from "./SecondaryButton";

const AppPlayStore = () => {
  return (
    <>
      <div className="md:w-[50%] flex flex-col gap-5 md:gap-5">
        <h1 className="capitalize font-bold text-2xl sm:text-3xl text-black ">
          Your Sneaker Plug, In Your Pocket
        </h1>
        <p className="font-medium text-sm sm:text-sm md:text-xl text-black md:mb-5 ">
          Be the first to know about new drops, restocks, and exclusive app‑only
          deals.
        </p>
        <ul className="mb-5">
          <li>✔ Early access to releases</li>
          <li>✔ Drop alerts</li>
          <li>✔ Faster checkout</li>
          <li>✔ Order tracking</li>
        </ul>
        <div className="flex flex-col md:flex-row justify-start gap-5">
          <AddToCartButton>
            <p className="font-bold text-sm flex gap-1 items-center ">
              <BsApple className="text-xl" /> Download on App Store
            </p>
          </AddToCartButton>
          <SecondaryButton>
            <p className="font-bold text-sm flex gap-1 items-center ">
              <FaGooglePlay className="text-xl" /> Get it on Google Play
            </p>
          </SecondaryButton>
        </div>
      </div>

      <div className="w-[45%] relative md:mb-10">
        <img
          src={DroidImage}
          alt="More Than Sneakers. It’s a Culture."
          className="hidden md:block w-[40%] mb-7 sm:mb-15 md:mb-0 h-auto relative -right-20"
        />
        <img
          src={IphoneImage}
          alt="More Than Sneakers. It’s a Culture."
          className="hidden md:block w-[50%] mb-7 sm:mb-15 md:mb-0 h-auto absolute top-0 right-0"
        />
      </div>
    </>
  );
};

export default AppPlayStore;
