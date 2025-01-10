import React, { useContext, useState } from "react";
import { CartContext } from "../../components/context/CartContext";

const Checkout = ({ cartItems} ) => {
 
  const { getTotal } = useContext(CartContext);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Checkout Complete!");
    // Add your checkout submission logic here
  };

  console.log("Cart items in Checkout:", cartItems); 
  
  const savedCart = JSON.parse(localStorage.getItem("cartItems"));
console.log("Saved Cart from localStorage in Checkout:", savedCart); // Check saved cart
// Check cart items in Checkout

  

  return (
    <div className="w-full md:h-screen h-auto bg-gray-100 lg:px-[4rem] px-[1rem] pt-[100px] pb-20 mb-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Shipping Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="zip"
                  value={shippingInfo.zip}
                  onChange={handleInputChange}
                  placeholder="ZIP Code"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Payment Method</h3>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Complete Checkout
            </button>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          <div className="border-t border-gray-300 mt-4 pt-4">
            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold text-xl">${getTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
