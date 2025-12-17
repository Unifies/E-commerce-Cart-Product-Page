import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../allProducts";
import { useSelector, useDispatch } from "react-redux";
import { addToMainCart } from "../store/cart";

import Cart from "/icon-cart-2.svg";
import Increase from "/icon-plus.svg";
import Decrease from "/icon-minus.svg";

const Detail = () => {
  const carts = useSelector((store) => store.cart.items);

  const [detail, setDetail] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    const findDetail = allProducts.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const togglePriceDisplay = () => {
    const priceDisplay = document.getElementById("pricePerItem");
    const totalPriceDisplay = document.getElementById("totalPricePerItem");

    if (totalPriceDisplay.classList.contains("hidden")) {
      totalPriceDisplay.classList.remove("hidden");
      priceDisplay.classList.add("hidden");
    }
  };

  const togglePriceDisplayed = () => {
    const priceDisplay = document.getElementById("pricePerItem");
    const totalPriceDisplay = document.getElementById("totalPricePerItem");

    if (priceDisplay.classList.contains("hidden")) {
      priceDisplay.classList.remove("hidden");
      totalPriceDisplay.classList.add("hidden");
    }
  };

  const [orderNumber, setOrderNumber] = useState(0);
  function increaseOrder() {
    setOrderNumber(orderNumber + 1);
  }

  function decreaseOrder() {
    if (orderNumber === 0) {
      setOrderNumber(0);
    } else {
      setOrderNumber(orderNumber - 1);
    }
  }

  const dispatch = useDispatch();
  const handleSendToCart = () => {
    if (orderNumber <= 0) return;
    dispatch(
      addToMainCart({
        productId: detail.productNumber,
        quantity: orderNumber,
      })
    );
    setOrderNumber(0);
  };

  return (
    <>
      <div className="w-screen md:px-[10%] pt-3 md:pt-0 md:flex justify-center gap-20 items-center ">
        {/* The image [should be slider] area */}
        <div className="relative md:w-[45%] ">
          <img
            src={"/E-commerce-Cart-Product-Page/" + detail.mainImageUrl}
            alt={detail.alt}
            className=" drop-shadow-[0_10px_10px_#0007] w-full h-115 object-cover md:rounded-[10px] cursor-pointer"
          />
        </div>
        {/* The image [should be slider] area end */}

        {/* The Product Detail area */}
        <div className="md:w-[40%] p-5 flex flex-col gap-2 md:gap-3">
          <h1 className="uppercase font-bold text-darkGrayishBlue text-[0.55rem] tracking-widest ">
            sneaker company
          </h1>

          <h2 className="capitalize font-bold text-2xl md:text-3xl text-black md:mb-3 ">
            {detail.name}
          </h2>

          <p className="text-darkGrayishBlue text-[0.8rem] font-medium ">
            {detail.details}
          </p>

          <div className="flex md:flex-col md:items-start md:gap-2 justify-between items-center mt-2">
            <div className="flex items-center ">
              <p
                id="pricePerItem"
                className="capitalize font-bold text-xl text-black "
              >
                ${detail.price}.00
              </p>
              <p
                id="totalPricePerItem"
                className="hidden capitalize font-bold text-xl text-black "
              >
                ${detail.price * orderNumber}.00
              </p>
              <span className="text-[0.6rem] px-1.5 py-0.5 bg-black font-bold rounded-[5px] text-white ml-2 ">
                50%
              </span>
            </div>

            <p className="text-[0.8rem] text-darkGrayishBlue font-bold line-through ">
              $250.00
            </p>
          </div>

          <div className="flex justify-between flex-col md:flex-row md:max-w-full md:mt-4 gap-4 md:gap-0">
            <div className="md:w-[40%] flex justify-between items-center px-4 py-1.5 bg-lightGrayishBlue rounded-[7px] ">
              <img
                src={Decrease}
                alt=""
                onClick={decreaseOrder}
                className="cursor-pointer"
              />
              <p id="orderNumber" className="font-bold text-[1rem] text-black ">
                {orderNumber}
              </p>
              <img
                src={Increase}
                alt=""
                onClick={() => {
                  togglePriceDisplay();
                  increaseOrder();
                }}
                className="cursor-pointer"
              />
            </div>
            <button
              onClick={() => {
                handleSendToCart();
                togglePriceDisplayed();
              }}
              className="w-full md:w-[55%] py-3 bg-orange hover:bg-opacityOrange flex rounded-[7px] items-center justify-center cursor-pointer "
            >
              <img
                src={Cart}
                alt=""
                className="mr-3 w-3.5 h-3.5 fill-current "
              />
              <p className="font-bold text-xs ">Add to cart</p>
            </button>
          </div>
        </div>
        {/* The Product Detail area end */}
      </div>
    </>
  );
};

export default Detail;
