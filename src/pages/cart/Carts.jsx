import React from "react";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { MdDelete } from "react-icons/md";

const Carts = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getTotal } =
    useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="w-full h-auto text-white xl:px-[4rem] px-[2rem] pt-[50px] mb-[30px]">
      <div className="relative">
        {cartItems.map((item) => (
          <div
            className="flex flex-col xl:flex-row items-center gap-[50px] mb-[30px] pb-[15px] border-b border-gray-100"
            key={item.id}
          >
            <img
              className="xl:w-[200px] w-full rounded-md"
              src={item.image}
              alt=""
            />
            <div>
              <h4 className="text-[25px] text-[#b08968] font-semibold mb-2">
                {item.name}
              </h4>
              <p>{item.description}</p>
            </div>
            <div className="flex mr-[75%] sm:mr-[83%] mb-2 xl:mr-0 items-center gap-[10px]">
              <button
                className="text-black bg-gray-500 text-[25px] px-[10px] font-medium"
                onClick={() => addToCart(item)}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                className="text-black bg-gray-500 text-[25px] px-[10px] font-semibold"
                onClick={() => removeFromCart(item)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Total: ${getTotal()}</h1>
          <button
            className="bg-[#b08968] text-white px-3 py-1 font-semibold mt-2 rounded-md"
            onClick={() => clearCart()}
          >
            Clear cart{" "}
          </button>
        </div>
      ) : (
        <h4 className="text-center text-2xl mb-6">Your cart is empty</h4>
      )}
    </div>
  );
};

export default Carts;
