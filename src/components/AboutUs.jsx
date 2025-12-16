import React from "react";
import AboutUsImage from "/sneakers-image-9.png";
import AddToCartButton from "../components/AddToCartButton";

const AboutUs = () => {
  return (
    <>
      <img
        src={AboutUsImage}
        alt="More Than Sneakers. It’s a Culture."
        className="w-full md:w-[45%] mb-7 sm:mb-15 md:mb-0 h-auto"
      />
      <div className="md:w-[50%] flex flex-col gap-7 md:gap-3">
        <h1 className="capitalize font-bold text-3xl sm:text-5xl text-center md:text-left text-black md:mb-7 ">
          More Than Sneakers. It’s a Culture.
        </h1>
        <p className="font-medium text-sm sm:text-sm md:text-xl text-center md:text-left text-black md:mb-7 ">
          We started this store for people who see sneakers as more than
          footwear. Every pair tells a story; of hustle, creativity, and
          self‑expression. <br /> <br /> From everyday classics to rare
          collector pieces, we curate sneakers that move culture forward. No
          shortcuts. No counterfeits. Just heat.
        </p>
        <div className="flex flex-col md:flex-row justify-start gap-5">
          <AddToCartButton>
            <p className="font-bold text-xl ">Read Our Story</p>
          </AddToCartButton>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
