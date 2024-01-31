// import { useState, useEffect } from "react";
import { CartState } from "../context/Context";

import Cart from "../assets/images/icon-cart.svg";

const CartMain = () => {
  const { state, dispatch } = CartState();

  const addItem = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: 1,
        price: 125.0,
      },
    });
    console.log("added quantity");
  };

  const incrementQuantity = () => {
    dispatch({
      type: "INCREMENT_QUANTITY",
      payload: {
        id: 1,
        price: 125.0,
      },
    });
    console.log("incremented quantity");
  };

  const decrementQuantity = () => {
    dispatch({
      type: "DECREMENT_QUANTITY",
      payload: {
        id: 1,
        price: 125.0,
      },
    });
    console.log("decremented quantity");
  };

  return (
    <div className="px-6 py-2 md:w-1/2">
      <div>
        <h2 className="text-[15px] uppercase mb-4 text-orange-500">
          sneaker company
        </h2>
        <h1 className="text-3xl mb-4 font-semibold">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mt-6 md:w-3/4 mb-6">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>

      {/* amount */}
      <div className="flex flex-row md:justify-start justify-between md:flex-col w-full md:items-start items-center gap-5 mb-6">
        <div className="text-xl font-semibold flex items-center gap-2">
          <span>$125.00</span>
          <span className="text-[10px] px-[5px] bg-orange-100 text-orange-500 rounded-md">
            50%
          </span>
        </div>
        <div className="line-through text-[14px] text-gray-400">$250.00</div>
      </div>
      {/* add to cart */}
      <div className="flex md:flex-row flex-col items-center gap-4 md:w-3/4">
        <div className="flex justify-between bg-gray-100 rounded-md p-2 md:w-1/2 w-3/4">
          <span
            className="text-[15px] font-bold cursor-pointer text-orange-500"
            onClick={() => decrementQuantity()}
          >
            -
          </span>
          <p className="text-Black">{state.cart.qty}</p>
          <span
            className="text-[15px] font-bold cursor-pointer text-orange-500"
            onClick={() => incrementQuantity()}
          >
            +
          </span>
        </div>
        <button
          className="flex gap-3 rounded-md p-2 text-[12px] w-3/4  bg-orange-400 items-center justify-center"
          onClick={() => addItem()}
        >
          <img src={Cart} alt="cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartMain;
