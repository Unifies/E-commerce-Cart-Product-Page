import React from "react";
import { allProducts } from "../allProducts";
import ProductCard from "../components/ProductCard";
import AddToCartButton from "../components/AddToCartButton";
import CategoryImages from "../components/CategoryImages";
import WhyUs from "../components/WhyUs";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import AppPlayStore from "../components/AppPlayStore";
import Conversion from "../components/Conversion";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="w-full md:h-[85vh] bg-[url(/bg-image-2.jpg)] bg-cover md:flex justify-between items-center py-10 md:py-0 px-5 md:px-[10%] ">
          <Hero />
        </div>

        {/* Just Dropped - Second Section */}
        <div className="mx-5 my-10 md:my-16 md:mx-[10%] flex flex-col">
          <h1 className="capitalize font-bold text-2xl md:text-3xl text-black mb-3 md:mb-7 ">
            Just Dropped🔥
          </h1>
          <div
            id="displaySix"
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5"
          >
            {allProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.productNumber} data={product} />
            ))}
          </div>
          <div className="self-center mt-10 w-full md:w-[75%] lg:w-[55%] flex items-center justify-center">
            <AddToCartButton>
              <p className="font-bold text-sm ">View All New Drops</p>
            </AddToCartButton>
          </div>
        </div>

        {/* Shop by Category - Third Section */}
        <div className="px-5 md:px-[10%] mt-10 md:mt-15 py-15 flex flex-col">
          <CategoryImages />
        </div>

        {/* About Us Section - Fourth Section */}
        <div className="w-full bg-[#F8F8F8] md:flex justify-between items-center py-15 px-5 md:px-[10%] ">
          <AboutUs />
        </div>

        {/* Why Choose Us - Fifth Section */}
        <div className="px-5 md:px-[10%] mt-10 md:mt-15 py-7 md:py-15 flex flex-col">
          <WhyUs />
        </div>

        {/* App Play Store - Sixth Section */}
        <div className="w-full md:flex justify-between items-center py-7 md:py-10 px-5 md:px-[10%] gap-[5%] ">
          <AppPlayStore />
        </div>

        <div className="w-full bg-grayishBlue flex flex-col justify-between items-center text-center gap-20 py-15 md:py-25 px-5 md:px-[10%] ">
          <Conversion />
        </div>

        <div className="w-full min-h-[80vh] bg-VeryDarkBlue flex justify-center text-grayishBlue flex-col py-15 px-5 md:px-[10%] ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
