import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../../components/productsDb/Data";

const Products = () => {
  return (
    <div className="w-full h-auto text-white xl:px-[4rem] px-[2rem] bg-[rgb(43,43,43)] pt-[100px] pb-[30px]">
      <h1 className="text-4xl text-center text-[#b08968] font-semibold">
        Our popular products
      </h1>
      <div className="grid xl:grid-cols-3 grid-cols-1 pt-[30px]">
        {Data.map((product) => (
          <div key={product.id}>
            <img
              className="xl:w-[350px] w-full h-fit rounded-sm"
              src={product.image}
              alt=""
            />
            <div className="pt-2">
              <h3 className="text-2xl text-[#b08968] mb-2 font-semibold">
                {product.name}
              </h3>
              {/* <p className="mb-2">${product.price}</p> */}
              {/* <p>{product.description}</p> */}
              {/* <div className="flex items-center gap-2 mt-4">
                <p>ratings</p>
                <div className="flex text-[#b08968] ">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
              </div> */}
              <Link to={`/products/${product.id}`}>
                <button className="mt-2 border rounded-md text-[#b08968] border-[#b08968] px-3 py-1">
                  View product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
