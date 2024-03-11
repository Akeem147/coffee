import React from "react";
import "../hero/Hero.css";

const Hero = () => {
  return (
    <div className="xl:w-full xl:h-screen h-[530px] mx-auto hero">
      <div className="pt-[50px] px-[40px] xl:px-[4rem] text-white">
        <h3 className="text-xl mb-3">Welcome to coffero</h3>
        <h1 className="xl:text-6xl text-4xl xl:w-[600px] mb-3">
          Coffee so good, your taste buds will love it.
        </h1>
        <p className="xl:w-[600px]">
          The best grain, the finest roast, the powerful flavor. There are many
          variations of passages available but the majority have suffered
          alteration in some form by injected humor of random words.
        </p>
      </div>
      <div className="xl:ml-[60px] ml-[40px] mt-[30px] flex items-start gap-3">
        <button className="bg-[#b08968] text-white py-2 px-2 rounded-md">
          Check menu
        </button>
        <button className="border border-[#b08968] text-white p-2 rounded-md ">
          Book table
        </button>
      </div>
    </div>
  );
};

export default Hero;