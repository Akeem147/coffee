import React from "react";
import "../hero/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="xl:w-full xl:h-screen min-[320px]:h-[650px] min-[375px]:h-[550px] w-full mx-auto hero ">
      <div className="pt-[10px] px-[40px] min-[320px]:px-6 xl:px-[4rem] text-white">
        <h3 className="text-xl mb-3">Welcome to coffero</h3>
        <h1 className="xl:text-6xl text-4xl xl:w-[600px] min-[320px]:text-3xl min-[320px]:w-[270px] mb-3">
          Coffee so good, your taste buds will love it.
        </h1>
        <p className="xl:w-[600px]">
          The best grain, the finest roast, the powerful flavor. There are many
          variations of passages available but the majority have suffered
          alteration in some form by injected humor of random words.
        </p>
      </div>
      <div className="xl:ml-[60px] ml-[40px] mt-[30px] min-[320px]:ml-6 flex items-start gap-3">
        <Link to={'/menu'}>
          <button className="bg-[#b08968] text-white py-2 px-2 rounded-md">
            Check menu
          </button>
        </Link>
        <button className="border border-[#b08968] text-white p-2 rounded-md ">
          Book table
        </button>
      </div>
    </div>
  );
};

export default Hero;
