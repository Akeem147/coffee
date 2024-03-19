import React from "react";
import delivery from "../../assets/free-delivery.svg";
import certified from "../../assets/certified.svg";
import coffee from "../../assets/coffee-beans.svg";

const Features = () => {
  return (
    <div className="w-full xl:h-screen h-auto mb-[30px] text-white xl:px-[4rem] px-[2rem] pt-[100px]">
      <div className="text-center">
        <h1 className="xl:text-3xl text-4xl text-[#b08968]">Our Features</h1>
      </div>

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 min-[320px]:pt-3 xl:pt-[50px] xl:ml-[50px]">
        <div className="xl:w-[300px] w-full p-[20px] h-auto bg-[rgb(43,43,43)] rounded-md">
          <img className="w-[80px] mb-3" src={delivery} alt="" />
          <h1 className="text-3xl mb-3">Free Delivery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo,
            corporis aliquam fuga facilis error, velit vel animi quibusdam
            dolorem nostrum fugiat officiis dicta sint deleniti cumque quia sunt
            incidunt.
          </p>
          <button className="text-[#b08968] border border-[#b08968] py-1 px-2 mt-3 rounded-md">
            Read more..
          </button>
        </div>

        <div className="xl:w-[300px] w-full p-[20px] h-auto bg-[rgb(43,43,43)] rounded-md">
          <img className="w-[80px] mb-3" src={certified} alt="" />
          <h1 className="text-3xl mb-3">Easy Payment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo,
            corporis aliquam fuga facilis error, velit vel animi quibusdam
            dolorem nostrum fugiat officiis dicta sint deleniti cumque quia sunt
            incidunt.
          </p>
          <button className="text-[#b08968] border border-[#b08968] py-1 px-2 mt-3 rounded-md">
            Read more..
          </button>
        </div>

        <div className="xl:w-[300px] w-full p-[20px] h-auto bg-[rgb(43,43,43)] rounded-md">
          <img className="w-[80px] mb-3" src={coffee} alt="" />
          <h1 className="text-3xl mb-3">Fresh And Organic</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo,
            corporis aliquam fuga facilis error, velit vel animi quibusdam
            dolorem nostrum fugiat officiis dicta sint deleniti cumque quia sunt
            incidunt.
          </p>
          <button className="text-[#b08968] border border-[#b08968] py-1 px-2 mt-3 rounded-md">
            Read more..
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
