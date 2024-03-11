import React from "react";
import choose from "../../../assets/choose.jpg";
import beans2 from "../../../assets/beans2.svg";
import beans3 from "../../../assets/beans3.svg";
import coffeeCup from "../../../assets/coffee-mug.svg";

const Article = () => {
  return (
    <div className="bg-[#191818] text-white xl:px-[6rem] px-[1.8rem] sm:px-[2rem] h-auto pt-[60px] flex flex-col xl:flex-row gap-[30px] pb-[25px]">
      <div>
        <div className="mb-6">
          <h2 className="text-[#b08968] text-xl font-semibold mb-3">
            Why Choose Us
          </h2>
          <h1 className="xl:w-[520px] w-[350px] xl:text-4xl text-2xl mb-5">
            Coffero Most Out Of Your Favorite & Tasty Coffee House
          </h1>
          <p className="xl:w-[480px]">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered in some form by injected humor or
            randomized words which don't look even slightly available.
          </p>
        </div>
        <div>
          <div className="flex gap-[15px] mb-5">
            <img
              className="w-[50px] h-[50px] border-dotted border-2 rounded-full p-2 border-[#b08968]"
              src={coffeeCup}
              alt=""
            />
            <div>
              <h4 className="text-[#b08968]">Awesome Arena</h4>
              <p className="xl:w-[400px]">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered in some form by injected humor
              </p>
            </div>
          </div>

          <div className="flex gap-[15px] mb-5">
            <img
              className="w-[50px] h-[50px] border-dotted border-2 rounded-full p-2 border-[#b08968]"
              src={beans2}
              alt=""
            />
            <div>
              <h4 className="text-[#b08968]">Pure Garden</h4>
              <p className="xl:w-[400px]">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered in some form by injected humor
              </p>
            </div>
          </div>

          <div className="flex gap-[15px] mb-5">
            <img
              className="w-[50px] h-[50px] border-dotted border-2 rounded-full p-2 border-[#b08968]"
              src={beans3}
              alt=""
            />
            <div>
              <h4 className="text-[#b08968]">Healthy coffee</h4>
              <p className="xl:w-[400px]">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered in some form by injected humor
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:ml-[30px]">
        <img className="xl:w-[500px] w-full h-[560px]" src={choose} alt="" />
      </div>
    </div>
  );
};

export default Article;
