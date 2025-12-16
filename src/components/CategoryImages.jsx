import React from "react";
import ImageOne from "/category-image-1.jpeg";
import ImageTwo from "/category-image-3.png";
import ImageThree from "/category-image-2.jpeg";

const CategoryImages = () => {
  return (
    <>
      <h2 className="capitalize font-bold text-2xl md:text-3xl text-black mb-3 md:mb-7 ">
        Shop by Category
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div>
          <div className="h-fit cursor-pointer relative">
            <img
              src={ImageOne}
              alt="Sneaker Store - Men's Collection"
              className="w-full rounded-[10px] shadow-lg "
            />
            <div className=" w-full h-full absolute top-0 left-0 bg-transparentBlack opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[10px] ">
              <p className="capitalize font-bold text-2xl text-paleOrange">
                What Men Want
              </p>
            </div>
          </div>

          <p className="text-xl capitalize pt-3 font-semibold">
            Men's Collection
          </p>
        </div>

        <div>
          <div className="h-fit cursor-pointer relative">
            <img
              src={ImageTwo}
              alt="Sneaker Store - Women's Collection"
              className="w-full rounded-[10px] shadow-lg "
            />
            <div className=" w-full h-full absolute top-0 left-0 bg-transparentBlack opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[10px] ">
              <p className="capitalize font-bold text-2xl text-paleOrange">
                What Women Want
              </p>
            </div>
          </div>

          <p className="text-xl capitalize pt-3 font-semibold">
            Women's Collection
          </p>
        </div>

        <div>
          <div className="cursor-pointer relative">
            <img
              src={ImageThree}
              alt="Sneaker Store - Limited Collection"
              className="w-full rounded-[10px] shadow-lg "
            />
            <div className=" w-full h-full absolute top-0 left-0 bg-transparentBlack opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-[10px] ">
              <p className="capitalize font-bold text-2xl text-paleOrange">
                Own What Others Can't
              </p>
            </div>
          </div>

          <p className="text-xl capitalize pt-3 font-semibold">
            Limited Editions
          </p>
        </div>
      </div>
    </>
  );
};

export default CategoryImages;
