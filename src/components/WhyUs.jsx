import React from "react";
import UserPng from "/image-avatar.png";
import { MdVerifiedUser } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const WhyUs = () => {
  return (
    <>
      <h1 className="capitalize font-bold text-2xl md:text-3xl text-black mb-3 md:mb-7 ">
        Why Sneakerheads Choose Us
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-15 text-darkGrayishBlue text-center ">
        <div className="bg-VeryDarkBlue p-5 rounded-[10px] relative flex flex-col gap-3 shadow-lg justify-center items-center min-h-40">
          <div className="absolute -top-4.5 p-1 bg-darkGrayishBlue rounded-[50%] text-2xl text-black self-center">
            <MdVerifiedUser />
          </div>
          <h6 className="text-2xl font-bold mt-2 ">Guaranteed Authenticity</h6>
          <p className="font-medium">
            Every pair is verified by experts. No fakes. Ever.
          </p>
        </div>

        <div className="bg-VeryDarkBlue p-5 rounded-[10px] relative flex flex-col gap-3 shadow-lg justify-center items-center min-h-40 md:min-h-50">
          <p className="absolute -top-4.5 p-1 bg-darkGrayishBlue rounded-[50%] text-2xl text-black self-center">
            <LiaShippingFastSolid />
          </p>
          <h6 className="text-2xl font-bold mt-2 ">Fast & Reliable Delivery</h6>
          <p className="font-medium">
            From checkout to doorstep, we move fast.
          </p>
        </div>

        <div className="bg-VeryDarkBlue p-5 rounded-[10px] relative flex flex-col gap-3 justify-center items-center min-h-40">
          <p className="absolute -top-4.5 p-1 bg-darkGrayishBlue rounded-[50%] text-2xl text-black self-center">
            <IoChatboxEllipses />
          </p>
          <h6 className="text-2xl font-bold mt-2 ">
            Real Support, Real People
          </h6>
          <p className="font-medium">
            Got questions? Our team actually responds.
          </p>
        </div>

        <div className="bg-VeryDarkBlue p-5 rounded-[10px] relative flex flex-col gap-3 justify-center items-center min-h-40">
          <p className="absolute -top-4.5 p-1 bg-darkGrayishBlue rounded-[50%] text-2xl text-black self-center">
            <MdOutlinePayment />
          </p>
          <h6 className="text-2xl font-bold mt-2 ">Flexible Payments</h6>
          <p className="font-medium">
            Pay securely with cards, transfers, or installments.
          </p>
        </div>
      </div>

      <h2 className="capitalize font-bold text-2xl md:text-3xl text-black my-10 md:my-15 text-center ">
        Tested by many. Loved by all.
      </h2>

      <div className="bg-VeryDarkBlue md:w-[50%] min-h-70 m-auto p-5 rounded-[10px] relative flex flex-col justify-center items-center gap-3 text-darkGrayishBlue text-center ">
        <img
          src={UserPng}
          alt=""
          className="absolute -top-4.5 w-10 rounded-[50%] border-2 border-darkGrayishBlue cursor-pointer "
        />
        <h6 className="text-2xl font-bold mt-2 ">⭐️⭐️⭐️⭐️⭐️</h6>
        <p className="font-medium px-4">
          Clean packaging! Great customer service! Insane collection! Fast
          delivery! And the kicks were 100% legit!! This is my go‑to store now.
        </p>
        <p>- John Doe</p>
      </div>
    </>
  );
};

export default WhyUs;
