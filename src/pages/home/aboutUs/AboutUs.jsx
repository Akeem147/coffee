import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import about from "../../../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="m-0-auto w-full xl:h-screen h-auto min-[425px]:mt-[110%] min-[375px]:mt-[120%] min-[320px]:mt-[175%] sm:mt-[70%] xl:mt-[42%] pt-[70px] xl:px-[4rem] px-6 sm:px-10 bg-[#191919] flex gap-8 flex-col xl:flex-row">
      <div className="w-[375px] sm:w-[560px] xl:w-[470px] min-[320px]:w-full min-[375px]:w-full min-[425px]:w-full h-[330px] min-[320px]:h-[315px] sm:h-[490px] xl:h-[412px] bg-[#b08968] py-3 px-3 rounded-md">
        <img
          className="w-[350px] sm:w-[540px] xl:w-[450px] min-[320px]:w-full min-[375px]:w-full min-[425px]:w-full min-[320px]:h-[290px] rounded-sm xl:h-[388px]"
          src={about}
          alt=""
        />
      </div>
      <div className="text-white pt-[40px]">
        <h4 className="text-[#b08968] text-2xl mb-3">About us</h4>
        <h1 className="text-3xl xl:text-4xl sm:text-4xl mb-3 w-[350px] min-[320px]:w-[275px] min-[375px]:w-[300px] min-[375px]:text-3xl min-[320px]:text-2xl sm:w-[500px] xl:w-[500px]">
          Fresh Quality And Organic Tasty Coffee House For You
        </h1>
        <p className="w-[330px] min-[320px]:w-[270px] xl:w-[500px] min-[425px]:w-[350px] min-[375px]:w-[320px] sm:w-[450px] xl:mb-3 mb-5">
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected humor,
          or randomized words which don't look even slightly believeable.
        </p>
        <div className="xl:mb-3 mb-5">
          <div className="flex gap-3">
            <IoIosCheckmark />
            Lorem ipsum dolor sit amet consectetur.
          </div>

          <div className="flex gap-3">
            <IoIosCheckmark />
            Lorem ipsum dolor sit amet consectetur.
          </div>

          <div className="flex gap-3">
            <IoIosCheckmark />
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
        <button className="bg-[#b08968] text-white py-1 px-2 rounded-md mb-6">
          Our Experts
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
