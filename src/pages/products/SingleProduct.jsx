import React from "react";
import { MdStarRate } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { Data } from "../../components/productsDb/Data";
import { CartContext } from "../../components/context/CartContext";
import { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";

const SingleProduct = () => {
  const { productsId } = useParams();
  const product = Data.find((p) => p.id === parseInt(productsId));
  const { image, name, price } = product;
  const { addToCart } = useContext(CartContext);
  const Notify = () => {
    toast("success");
  };

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="w-full h-auto xl:px-[4rem] px-[2rem] pt-[100px] flex flex-col xl:flex-row gap-8 pb-[30px]">
      <div>
        <img className="xl:w-[430px] xl:h-[350px] h-[270px] w-full rounded-md" src={image} alt="" />
      </div>
      <div className="pt-[8px]">
        <h1 className="text-[#b08968] text-3xl font-semibold mb-[20px]">
          {name}
        </h1>
        <p className="text-white mb-[15px] text-xl">${price}</p>
        <h3 className="text-white font-semibold mb-[15px] text-xl">
          Coffee Details:
        </h3>
        <p className="text-white xl:w-[600px] min-[320px]:w-[260px] min-[375px]:w-[300px] w-[380px] sm:w-[500px] xl:leading-6 leading-7">
          A cappuccino is an Italian coffee drink that is traditionally prepared
          with equal parts double espresso, steamed milk, and steamed milk foam
          on top. Cream may be used instead of milk. It is typically smaller in
          volume than a latte, and has a thicker layer of microfoam. Espresso is
          typically made with dark roast coffee and ground finely.
        </p>
        <div className="flex items-center gap-2 my-4">
          <p className="text-white">ratings</p>
          <div className="flex text-[#b08968] ">
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </div>
        </div>
        <div className="text-white flex gap-3">
          <button
            onClick={() => addToCart(product)}
            className="border border-[#b08968] px-3 py-1 min-[320px]:text-[12px] rounded-md text-[#b08968]"
          >
            Buy now
          </button>
          <Link to="/products">
            <button onClick={handleScroll} className="bg-[#b08968] text-white py-1 px-3 rounded-md">
              Go back to products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
