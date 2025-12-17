import React, { useEffect, useState } from "react";
import { allProducts } from "../allProducts";
import Delete from "/icon-delete.svg";
import { useDispatch } from "react-redux";
import { removefromMainCart } from "../store/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const findDetail = allProducts.filter(
      (product) => product.productNumber === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(
      removefromMainCart({
        productId: productId,
        quantity: quantity,
      })
    );
  }

  return (
    <>
      <div className="w-full flex justify-between gap-2 items-center">
        <img
          src={"/E-commerce-Cart-Product-Page/" + detail.mainImageUrl}
          alt={detail.alt}
          className="w-[17%] rounded-[5px]"
        />
        <div className="w-[73%] flex flex-col gap-0.5 ">
          <h1
            className="text-darkGrayishBlue text-xs capitalize
           "
          >
            {detail.name}
          </h1>
          <p
            className="text-darkGrayishBlue text-xs
           "
          >
            ${detail.price}.00 x {quantity}
            <span className="font-bold text-black ml-1">
              ${detail.price * quantity}.00
            </span>
          </p>
        </div>
        <img
          src={Delete}
          alt=""
          onClick={handleDelete}
          className="cursor-pointer w-[5%] "
        />
      </div>
    </>
  );
};

export default CartItem;
