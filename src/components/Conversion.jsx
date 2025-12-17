import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import SecondaryButton from "./SecondaryButton";

const Conversion = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center text-center gap-8">
        <h3 className="text-3xl md:text-6xl font-bold tracking-widest uppercase">
          New Customers Get 10% Off Their First Order
        </h3>
        <p className="font-medium text-xl md:text-2xl">
          Use code STEPUP10 at checkout.
        </p>
        <SecondaryButton>
          <p className="font-bold text-xl text-grayishBlue hover:text-black ">
            Shop & Save
          </p>
        </SecondaryButton>
      </div>

      <div className="flex flex-col w-full md:w-[70%] min-h-70 px-2 py-10 bg-grayishBlue shadow-lg rounded-[10px] justify-between items-center text-center gap-3 md:gap-2">
        <h3 className="text-3xl font-bold tracking-widest uppercase">
          Join the inner circle
        </h3>
        <p>
          Stay up to date with our monthly news, tips, and exclusive promos.
        </p>
        <form className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-0 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-65 md:w-70 h-10 focus:outline-0 border border-VeryDarkBlue rounded-[10px] p-2"
          />

          <button
            type="submit"
            className="w-full md:w-[45%] py-3 bg-black hover:bg-transparentBlack text-grayishBlue flex rounded-[7px] items-center justify-center cursor-pointer font-bold text-xs"
          >
            Get Early Access
          </button>
        </form>

        <p className="font-medium -mt-2 md:-mt-5 text-xs">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </>
  );
};

export default Conversion;
