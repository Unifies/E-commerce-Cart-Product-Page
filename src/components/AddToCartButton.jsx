import React from "react";
import Cart from "/icon-cart-2.svg";

const AddToCartButton = ({ children }) => {
  return (
    <>
      <button className="w-full md:w-[45%] py-3 bg-orange hover:bg-VeryDarkBlue text-black hover:text-orange flex rounded-[7px] items-center justify-center cursor-pointer shadow-lg ">
        {children}
      </button>
    </>
  );
};

export default AddToCartButton;
