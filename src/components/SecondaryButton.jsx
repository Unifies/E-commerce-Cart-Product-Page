import React from "react";
import Cart from "/icon-cart-2.svg";

const SecondaryButton = ({ children }) => {
  return (
    <>
      <button className="w-full md:w-[45%] py-3 bg-VeryDarkBlue hover:bg-orange text-orange hover:text-black flex rounded-[7px] items-center justify-center cursor-pointer shadow-lg ">
        {children}
      </button>
    </>
  );
};

export default SecondaryButton;
