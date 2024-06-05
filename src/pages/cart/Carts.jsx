import React from "react";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Carts = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getTotal } =
    useContext(CartContext);
  const handleScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-full h-auto text-white xl:px-[4rem] px-[2rem] pt-[100px] mb-[30px]">
      <div className="relative">
        {cartItems.map((item) => (
          <div
            className="flex flex-col xl:flex-row items-center gap-[50px] mb-[30px] pb-[15px] border-b border-gray-100"
            key={item.id}
          >
            <img
              className="xl:w-[200px] h-[270px] xl:h-[200px] w-full rounded-md"
              src={item.image}
              alt=""
            />
            <div>
              <h4 className="text-[25px] text-[#b08968] font-semibold mb-2">
                {item.name}
              </h4>
              <p>{item.description}</p>
            </div>
            <div className="flex mr-[75%] min-[320px]:ml-6 sm:mr-[83%] mb-2 xl:mr-0 items-center gap-[10px]">
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
          <div onClick={() => clearCart()}>
            <button
              onClick={handleScroll}
              className="bg-[#b08968] text-white px-3 py-1 font-semibold mt-2 rounded-md"
            >
              Clear cart
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h4 className="text-2xl mb-6">Your cart is empty</h4>
          <Link to={"/products"}>
            <button
              onClick={handleScroll}
              className="bg-[#b08968] text-white text-[12px] px-3 py-1 font-semibold mt-2 rounded-md"
            >
              Go back to products
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carts;
