import React from "react";
import chef from "../../../assets/chef.svg";
import experience from "../../../assets/experience.svg";
import shop from "../../../assets/coffee-shop.svg";
import cup from "../../../assets/coffee-cup.svg";
import { HiPlusSmall } from "react-icons/hi2";

const Statistics = () => {
  return (
    <div className="bg-[rgb(11,11,11)] w-full h-auto xl:h-[80vh] text-white xl:px-[4rem] px-2rem flex flex-col xl:flex-row items-center justify-around xl:mb-[80px] xl:pb-[30px] pb-[50px]">
      <div className="flex flex-col items-center">
        <div className="xl:w-[80px] w-[100px] h-[100px] xl:h-[80px] bg-[#3f3329] rounded-full flex items-center justify-center my-[50px]">
          <img className="w-[50px]" src={shop} alt="" />
        </div>
        <h1 className="mb-[30px] text-[40px] font-bold">1500</h1>
        <div className="flex items-center gap-2 text-[#b08968]">
          <HiPlusSmall />
          <span>Total Branches</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="xl:w-[80px] w-[100px] h-[100px] xl:h-[80px] bg-[#3f3329] rounded-full flex items-center justify-center my-[50px]">
          <img className="w-[50px]" src={cup} alt="" />
        </div>
        <h1 className="mb-[30px] text-[40px] font-bold">250</h1>
        <div className="flex items-center gap-2 text-[#b08968]">
          <HiPlusSmall />
          <span>Happy Customers</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="xl:w-[80px] w-[100px] h-[100px] xl:h-[80px] bg-[#3f3329] rounded-full flex items-center justify-center my-[50px]">
          <img className="w-[50px]" src={chef} alt="" />
        </div>
        <h1 className="mb-[30px] text-[40px] font-bold">120</h1>
        <div className="flex items-center gap-2 text-[#b08968]">
          <HiPlusSmall />
          <span>Professional Chefs</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="xl:w-[80px] w-[100px] h-[100px] xl:h-[80px] bg-[#3f3329] rounded-full flex items-center justify-center my-[50px]">
          <img className="w-[50px]" src={experience} alt="" />
        </div>
        <h1 className="mb-[30px] text-[40px] font-bold">50</h1>
        <div className="flex items-center gap-2 text-[#b08968]">
          <HiPlusSmall />
          <span>Years Of Experience</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
