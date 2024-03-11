import React from "react";
import delivery from "../../../assets/free-delivery.svg";
import certified from "../../../assets/certified.svg";
import coffee from "../../../assets/coffee-beans.svg";
import coffee1 from "../../../assets/coffee.svg";

const Feat = () => {
  return (
    <div className="w-full pb-[40px] h-auto bg-[#191919] text-white px-[1rem] pt-10 xl:px-[4rem]">
      <div className="text-center">
        <h4 className="text-4xl mb-2">Our best features</h4>
      </div>

      <div className="grid xl:grid-cols-4 grid-cols-1 pt-10 xl:gap-3 gap-5">
        <div className="xl:w-[250px] w-full h-[270px] bg-[rgb(11,11,11)] px-4">
          <div className="xl:w-[220px] w-full pt-[12px] mt-5 px-5 xl:px-3 border border-gray-100 h-[230px]">
            <img className="w-[50px] mb-5" src={delivery} alt="" />
            <h4 className="mb-3 text-[#b08968]">Free Shipping</h4>
            <p className="sm:w-[300px] xl:w-[200px]">
              It is a long established fact that a reader will be by the
              readable content of a page looking at it's layout
            </p>
          </div>
        </div>

        <div className="xl:w-[250px] w-full h-[270px] bg-[rgb(11,11,11)] px-4">
          <div className="xl:w-[220px] w-full pt-[12px] mt-5 px-5 xl:px-3 border border-gray-100 h-[230px] ">
            <img className="w-[50px] mb-5" src={certified} alt="" />
            <h4 className="mb-3 text-[#b08968]">Organic Certified</h4>
            <p className="sm:w-[300px] xl:w-[200px]">
              It is a long established fact that a reader will be by the
              readable content of a page looking at it's layout
            </p>
          </div>
        </div>

        <div className="xl:w-[250px] w-full h-[270px] bg-[rgb(11,11,11)] px-4">
          <div className="xl:w-[220px] w-full pt-[12px] mt-5 px-5 xl:px-3 border border-gray-100 h-[230px]">
            <img className="w-[50px] mb-5" src={coffee1} alt="" />
            <h4 className="mb-3 text-[#b08968]">High Quality</h4>
            <p className="sm:w-[300px] xl:w-[200px]">
              It is a long established fact that a reader will be by the
              readable content of a page looking at it's layout
            </p>
          </div>
        </div>

        <div className="xl:w-[250px] w-full h-[270px] bg-[rgb(11,11,11)] px-4">
          <div className="xl:w-[220px] w-full pt-[12px] mt-5 px-5 xl:px-3 border border-gray-100 h-[230px]">
            <img className="w-[50px] mb-5" src={coffee} alt="" />
            <h4 className="mb-3 text-[#b08968]">Proper Roasting</h4>
            <p className="sm:w-[300px] xl:w-[200px]">
              It is a long established fact that a reader will be by the
              readable content of a page looking at it's layout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feat;
