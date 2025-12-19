import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearAllCartItems, falseStatusTab } from "../store/cart";

const initialCartMessage = "Your cart is empty.";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);

  const [emptyCart, setEmptyCart] = useState("Your cart is empty.");
  const timerRef = useRef(null);
  const dispatch = useDispatch();

  function handleCheckout() {
    dispatch(clearAllCartItems());
    setEmptyCart("Items processed successfully. Thank you for your purchase!");

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setEmptyCart(initialCartMessage);
      timerRef.current = null;
    }, 3000);
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const containerRef = useRef(null);
  useEffect(() => {
    function onDocClick(e) {
      const clickedCartDiv = e.target.closest(".cart-toggle");
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        !clickedCartDiv
      ) {
        dispatch(falseStatusTab(false));
      }
    }
    function onScroll() {
      dispatch(falseStatusTab(false));
    }

    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dispatch]);

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed top-10 md:top-20 right-10 md:right-30 bg-white w-65 h-fit font-display rounded-[7px] shadow-lg ${
          statusTab === false
            ? "opacity-0 transition-opacity duration-500"
            : "opacity-100 transition-opacity duration-500"
        }`}
      >
        <aside>
          <h1 className="p-4 text-xs font-bold w-full shadow-[0px_1px_0px_rgba(10,10,1,0.1)] ">
            Cart
          </h1>
        </aside>

        <div className="p-4 flex flex-col gap-4 items-center ">
          <div
            className={`w-full h-22 py-3 font-bold text-xs flex-col justify-center items-center text-darkGrayishBlue text-center ${
              carts.length < 1 ? "flex" : "hidden"
            } `}
          >
            <p>{emptyCart}</p>
          </div>

          <div className="flex flex-col gap-3">
            {carts.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </div>
          <button
            onClick={handleCheckout}
            className={`w-full py-3 bg-orange hover:bg-opacityOrange flex rounded-[7px] items-center justify-center cursor-pointer font-bold text-xs ${
              carts.length >= 1 ? "flex" : "hidden"
            } `}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTab;
