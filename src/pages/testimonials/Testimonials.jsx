import React from "react";
import testi2 from "../../assets/testimonial-2.jpg";
import testi3 from "../../assets/testimonial-3.jpg";
import testi4 from "../../assets/testimonial-4.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import "../testimonials/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="w-full xl:h-screen h-auto mb-8 text-white xl:px-[4rem] px-[2rem] pt-[100px]">
      <h1 className="text-center text-3xl font-semibold text-[#b08968]">
        Testimonials
      </h1>

      <div className="grid xl:grid-cols-3 grid-cols-1 pt-8">
        <div className="xl:w-[320px] w-full h-[350px] rounded-md flex flex-col items-center p-[25px] bg-[rgb(43,43,43)]">
          <div className="text-5xl text-[#b08968]">
            <RiDoubleQuotesL />
          </div>
          <p className="para relative w-[250px] text-center mb-[20px]">
            I've been working with thses guys for a long time and i can say that
            my house is in the perfect hand
          </p>
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full my-5"
              src={testi2}
              alt=""
            />
            <p>Allan Collins</p>
          </div>
        </div>

        <div className="xl:w-[320px] w-full h-[350px] rounded-md flex flex-col items-center p-[25px] bg-[rgb(43,43,43)]">
          <div className="text-5xl text-[#b08968]">
            <RiDoubleQuotesL />
          </div>
          <p className="para relative w-[250px] text-center mb-[20px]">
            I've been working with thses guys for a long time and i can say that
            my house is in the perfect hand
          </p>
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full my-5"
              src={testi3}
              alt=""
            />
            <p>Allan Collins</p>
          </div>
        </div>

        <div className="xl:w-[320px] w-full h-[350px] rounded-md flex flex-col items-center p-[25px] bg-[rgb(43,43,43)]">
          <div className="text-5xl text-[#b08968]">
            <RiDoubleQuotesL />
          </div>
          <p className="para relative w-[250px] text-center mb-[20px]">
            I've been working with thses guys for a long time and i can say that
            my house is in the perfect hand
          </p>
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full my-5"
              src={testi4}
              alt=""
            />
            <p>Allan Collins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
