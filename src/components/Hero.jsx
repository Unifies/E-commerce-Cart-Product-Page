import React from "react";
import HeroImage from "/sneakers-image-hero.png";
import AddToCartButton from "../components/AddToCartButton";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <>
      <img
        src={HeroImage}
        alt="Shop the best sneakers at sneaker store"
        className="w-full md:w-[45%] mb-7 sm:mb-15 md:mb-0 h-auto md:order-2"
      />
      <div className="md:w-[55%] flex flex-col gap-7 md:gap-5">
        <h1 className="uppercase font-bold text-3xl sm:text-5xl text-center md:text-left text-white md:mb-7 ">
          Step Into Your Edge
        </h1>
        <p className="font-medium text-sm sm:text-xl md:text-2xl text-center md:text-left text-white md:mb-7 ">
          The most wanted sneakers: authentic, limited, and delivered fast.
          Built for collectors, creators, and everyday legends.
        </p>
        <div className="flex flex-col md:flex-row justify-start gap-5">
          <AddToCartButton>
            <span className="font-bold text-md ">Shop the Latest Drops</span>
          </AddToCartButton>
          <SecondaryButton>
            <span className="font-bold text-md">Explore Bestsellers</span>
          </SecondaryButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
