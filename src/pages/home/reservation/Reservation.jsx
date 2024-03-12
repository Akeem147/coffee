import React from "react";
import shape1 from "../../../assets/shape-2.png";
import shape2 from "../../../assets/shape-3.png";

const Reservation = () => {
  return (
    <div className="relative bg-[rgb(11,11,11)] text-white xl:w-[80%] mx-auto h-auto mb-8 xl:px-[6rem] px-[1.5rem] rounded-md pb-6">
      <div>
        <img
          className="w-[150px] absolute right-[60px] top-6 min-[320px]:right-0 min-[320px]:top-0 z-10"
          src={shape1}
          alt=""
        />
        <img
          className="w-[150px] absolute left-[60px] bottom-6 z-10 min-[320px]:bottom-0 min-[320px]:left-0"
          src={shape2}
          alt=""
        />
      </div>
      <div className="text-center pt-[70px]">
        <h1 className="text-3xl mb-5 text-[#b08968]">Book A Table</h1>
      </div>
      <div className="flex flex-col xl:flex-row gap-[20px] mt-[30px] mb-[20px]">
        <input
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          type="text"
          placeholder="Your name"
        />
        <input
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          type="email"
          placeholder="Email address"
        />
        <input
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          type="number"
          placeholder="Phone"
        />
      </div>

      <div className="flex flex-col xl:flex-row gap-[20px] mt-[30px] mb-[20px]">
        <input
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          type="date"
          placeholder="Date Ex: DD/MM/YY"
        />
        <input
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          type="number"
          placeholder="Time Ex: 02:30PM"
        />
        <input
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          type="number"
          placeholder="Number of people"
        />
      </div>

      <div>
        <textarea
          className="w-full xl:p-[8px] p-[15px] rounded-md focus:outline-none bg-[#191919] text-white border border-[#b08968]"
          placeholder="Your message"
        ></textarea>
      </div>

      <button className="bg-[#b08968] text-white xl:py-1 xl:px-2 py-2 px-3 xl:ml-[45%] ml-[35%] min-[375px]:ml-[35%] min-[320px]:ml-[31%] sm:ml-[42%] mt-5 rounded-md">
        Book A Table
      </button>
    </div>
  );
};

export default Reservation;
