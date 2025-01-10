import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Step 1: Load cart items from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : []; // Load from localStorage or default to an empty array
  });

  // Step 2: Save cartItems to localStorage whenever cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Optional: clear localStorage if cart is empty
    }
  }, [cartItems]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    console.log("Loaded cart from localStorage:", savedCart); // Check the loaded cart
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []); // Only run once on mount
  
  useEffect(() => {
    console.log("Cart items changed:", cartItems); // Check changes to the cart
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update localStorage on changes
  }, [cartItems]);
  

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast.success("One item added to cart");
    }
    console.log("Cart items after addToCart:", cartItems);
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
