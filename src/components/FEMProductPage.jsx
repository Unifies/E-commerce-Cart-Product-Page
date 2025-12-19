import React from "react";
import { Link } from "react-router-dom";
import FEMProductImage from "./FEMProductImage";
import FEMProductDetail from "./FEMProductDetail";

const FEMProductPage = () => {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center flex-col md:px-[13%] font-display gap-5">
        <div className="md:flex h-fit items-center justify-center gap-[8%]">
          <FEMProductImage />
          <FEMProductDetail />
        </div>

        <p className="text-center w-full md:w-[55%] mx-auto my-10">
          This is the verbatim solution to the{" "}
          <a
            href="https://www.frontendmentor.io"
            target="blank"
            className="border-b border-b-black"
          >
            Frontend Mentor
          </a>{" "}
          <a
            href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
            target="blank"
            className="border-b border-b-orange"
          >
            E-commerce Product Page Challenge.
          </a>{" "}
          Click{" "}
          <Link to="home" className="text-orange border-b border-b-orange">
            here
          </Link>{" "}
          to view the full store.
        </p>
      </div>
    </>
  );
};

export default FEMProductPage;
