import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../../components/productsDb/Data";
import { animateScroll as scroll } from "react-scroll";

const Prod = () => {
  const handleScroll = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="w-full h-auto bg-[rgb(11,11,11)] text-white pt-[30px] px-[2rem] xl:px-[4rem] pb-8">
      <div className="text-center">
        <h1 className="text-4xl mb-2 text-[#b08968]">Gallery</h1>
        <h4>50% Discount On All Our Coffee Products</h4>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 pt-5">
        {Data.map((product) => (
          <div key={product.id}>
            <div>
              <img
                className="xl:w-[300px] w-full rounded-md"
                src={product.image}
                alt=""
              />
            </div>

            <div className="pt-3">
              <h3 className="text-[#b08968] xl:text-xl text-xl sm:text-2xl">
                {product.name}
              </h3>

              <Link to={'/products'}>
                <button onClick={handleScroll} className=" px-2 py-1 xl:py-1 sm:py-2 sm:px-3 xl:px-2 mt-2 bg-[#b08968] text-white rounded-md">
                  Go to products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prod;
