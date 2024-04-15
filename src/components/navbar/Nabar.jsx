import React from "react";
import logo from "../../assets/log.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";

const Nabar = () => {
  const [showNav, setShowNav] = useState(false);
  const { cartItems } = useContext(CartContext);
  let menuRef = useRef();

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="w-full h-[60px] bg-[#191919] mx-auto z-10 text-white flex items-center justify-between px-8 min-[320px]:px-5 min-[320px]:pt-3 xl:px-[60px] fixed top-0 left-0 right-0">
      <div className="z-10">
        <Link onClick={handleScroll} to={"/"}>
          <img className="w-[100px]" src={logo} alt="" />
        </Link>
      </div>

      <div
        ref={menuRef}
        className="absolute xl:static z-10 top-[80px] left-0 right-0 text-black font-semibold xl:text-white text-center"
      >
        {showNav && (
          <ul className="flex flex-col xl:flex-row gap-5 bg-gray-400 py-5">
            <NavLink onClick={handleScroll} to={"/"}>
              Home
            </NavLink>

            <NavLink onClick={handleScroll} to={"/about"}>About</NavLink>

            <NavLink onClick={handleScroll} to={"/products"}>Products</NavLink>

            <NavLink onClick={handleScroll} to={"/features"}>Features</NavLink>

            <NavLink onClick={handleScroll} to={"/menu"}>Menu</NavLink>

            <NavLink onClick={handleScroll} to={"/chefs"}>Chefs</NavLink>

            <NavLink onClick={handleScroll} to={"/testimonials"}>Testimonials</NavLink>

            <NavLink onClick={handleScroll} to={"/contacts"}>Contact us</NavLink>
          </ul>
        )}
        <div className="hidden xl:block">
          <ul className="flex flex-col xl:flex-row gap-5">
            <NavLink onClick={handleScroll} to={"/"}>
              Home
            </NavLink>

            <NavLink onClick={handleScroll} to={"/about"}>About</NavLink>

            <NavLink onClick={handleScroll} to={"/products"}>Products</NavLink>

            <NavLink onClick={handleScroll} to={"/features"}>Features</NavLink>

            <NavLink onClick={handleScroll} to={"/menu"}>Menu</NavLink>

            <NavLink onClick={handleScroll} to={"/chefs"}>Chefs</NavLink>

            <NavLink onClick={handleScroll} to={"/testimonials"}>Testimonials</NavLink>

            <NavLink onClick={handleScroll} to={"/contacts"}>Contact us</NavLink>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-5 z-10 relative">
        <Link to={"/cart"}>
          <FaCartShopping onClick={handleScroll} className="text-xl" />
          <span className="absolute top-[-15px] xl:right-[-12px] right-[25px] text-xl">
            {cartItems.length}
          </span>
        </Link>
        <button onClick={() => setShowNav(!showNav)} className="xl:hidden">
          {showNav ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Nabar;
