import React from "react";
import Cart from "/icon-cart-2.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToMainCart } from "../store/cart";

const ProductCard = (props) => {
  const carts = useSelector((store) => store.cart.items);

  const { productNumber, name, price, mainImageUrl, alt, slug } = props.data;

  const dispatch = useDispatch();

  const handleAddToMainCart = () => {
    dispatch(
      addToMainCart({
        productId: productNumber,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className="bg-lightGrayishBlue p-5 rounded-xl shadow-sm">
        <Link to={slug}>
          <img
            src={mainImageUrl}
            alt={alt}
            className="w-full h-70 object-bottom object-cover md:object-top drop-shadow-[0_10px_10px_#0007]"
          />
        </Link>
        <h3 className="text-sm capitalize py-3 font-semibold">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold ">${price}.00</p>
          <button
            type="button"
            className="w-[55%] py-3 bg-orange hover:bg-opacityOrange flex rounded-[7px] items-center justify-center cursor-pointer shadow-lg font-bold text-xs "
            onClick={handleAddToMainCart}
          >
            <img src={Cart} alt="" className="mr-3 w-3.5 h-3.5 fill-current " />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
