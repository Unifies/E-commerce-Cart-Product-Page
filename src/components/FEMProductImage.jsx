import React from "react";
import { useState } from "react";
import { femProducts } from "../femProducts";
import Next from "/icon-next.svg";
import Prev from "/icon-previous.svg";

const flattenImageData = (nestedArray) => {
  const flatArray = [];
  nestedArray.forEach((productNumber) => {
    productNumber.images.forEach((image) => {
      flatArray.push(image);
    });
  });
  return flatArray;
};

const FEMProductImage = () => {
  const images = flattenImageData(femProducts);

  const [imageInView, setImageInView] = useState(0);
  const [modalInView, setModalInView] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handlePrevClick() {
    if (imageInView === 0) {
      setImageInView(images.length - 1);
      return;
    }
    setImageInView(imageInView - 1);
  }

  function handleNextClick() {
    if (imageInView === images.length - 1) {
      setImageInView(imageInView - images.length + 1);
      return;
    }
    setImageInView(imageInView + 1);
  }

  function handleModalPrevClick() {
    if (modalInView === 0) {
      setModalInView(images.length - 1);
      return;
    }
    setModalInView(modalInView - 1);
  }

  function handleModalNextClick() {
    if (modalInView === images.length - 1) {
      setModalInView(modalInView - images.length + 1);
      return;
    }
    setModalInView(modalInView + 1);
  }

  function handleActiveImage(producttId) {
    setImageInView(producttId);
  }

  function handleActiveModalImage(producttId) {
    setModalInView(producttId);
  }

  function handleModalOpen() {
    setModalIsOpen(true);
  }

  function handleModalClose() {
    setModalIsOpen(false);
  }

  let currentImage = images[imageInView];
  let currentModalImage = images[modalInView];

  return (
    <>
      <div className="relative md:max-w-[40%] ">
        <div className="md:hidden flex justify-between items-center">
          <img
            src={Prev}
            onClick={handlePrevClick}
            alt=""
            className="absolute top-[45%] left-3 cursor-pointer w-6.5 h-6.5 p-2 bg-lightGrayishBlue rounded-[50%] "
          />

          <img
            src={Next}
            onClick={handleNextClick}
            alt=""
            className="absolute top-[45%] right-3 cursor-pointer w-6.5 h-6.5 p-2 bg-lightGrayishBlue rounded-[50%] "
          />
        </div>

        <img
          src={currentImage.url}
          onClick={handleModalOpen}
          alt={currentImage.alt}
          className="w-fit cover md:rounded-[10px] cursor-pointer z-1"
        />

        {/* The thumbnail section */}
        <div>
          {femProducts.map((productThumbnails) => (
            <div
              key={productThumbnails.productNumber}
              className="hidden w-fit mt-6 md:flex flex-wrap justify-between items-center"
            >
              {productThumbnails.images.map((productThumbnail) => (
                <div
                  className={` cursor-pointer rounded-[7px] w-[20%]   ${
                    productThumbnail.id === currentImage.id
                      ? "border-2 border-orange rounded-[10px]"
                      : "hover:opacity-40"
                  } `}
                  key={productThumbnail.id}
                  onClick={() => handleActiveImage(productThumbnail.id)}
                >
                  <img
                    className={` rounded-[7px]   ${
                      productThumbnail.id === currentImage.id
                        ? "opacity-30 rounded-[9px]"
                        : ""
                    } `}
                    src={productThumbnail.thumbnail}
                    alt={productThumbnail.alt}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* The Modal */}
      <div
        className={` fixed top-0 left-0 w-screen min-h-full bg-transparentBlack justify-center items-center z-100  ${
          modalIsOpen ? "flex" : "hidden"
        } `}
      >
        <div className="w-[280px] md:w-[350px] flex flex-col mt-10 md:mt-25 text-[] hover:text-orange  ">
          <div className="self-end mb-5">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fillRule="evenodd"
                onClick={handleModalClose}
                className="fill-white hover:fill-orange cursor-pointer"
              />
            </svg>
          </div>

          <div className="relative flex flex-col">
            <div className="flex justify-between items-center">
              <img
                src={Prev}
                onClick={handleModalPrevClick}
                alt=""
                className="absolute top-[45%] -left-3 cursor-pointer w-6.5 h-6.5 p-2 bg-lightGrayishBlue rounded-[50%]  "
              />

              <img
                src={Next}
                onClick={handleModalNextClick}
                alt=""
                className="absolute hover:fill-orange top-[45%] -right-3 cursor-pointer w-6.5 h-6.5 p-2 bg-lightGrayishBlue rounded-[50%] "
              />
            </div>

            <img
              src={currentModalImage.url}
              alt={currentModalImage.alt}
              className="w-fit cover rounded-[10px] "
            />
          </div>

          <div>
            {femProducts.map((productThumbnails) => (
              <div
                key={productThumbnails.productNumber}
                className="w-fit p-6 flex flex-wrap justify-between items-center"
              >
                {productThumbnails.images.map((productThumbnail) => (
                  <div
                    key={productThumbnail.id}
                    className={` cursor-pointer rounded-[7px] w-[20%]   ${
                      productThumbnail.id === currentModalImage.id
                        ? "border-2 border-orange rounded-[10px]"
                        : "hover:opacity-50"
                    } `}
                  >
                    <img
                      onClick={() =>
                        handleActiveModalImage(productThumbnail.id)
                      }
                      src={productThumbnail.thumbnail}
                      alt={productThumbnail.alt}
                      className={` rounded-[7px]   ${
                        productThumbnail.id === currentModalImage.id
                          ? "opacity-50"
                          : ""
                      } `}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FEMProductImage;
