import React from "react";

const Menuu2 = (coffee) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex h-[90px] mr-4">
          <img
            className="w-[65px] h-[65px] mr-[15px] rounded-full border-dotted border-2 border-[#b08968]"
            src={coffee.image}
            alt=""
          />
          <div className="flex flex-col gap-3 min-[375px]:gap-2 pt-3 xl:pt-0 min-[320px]:pt-2 min-[320px]:gap-1 min-[375px]:pt-3">
            <h4 className="text-[#b08968] xl:text-xl min-[320px]:text-[10px]">
              {coffee.name}
            </h4>
            <span className="min-[320px]:text-[10px] xl:text-xl">
              {coffee.ingredient}
            </span>
          </div>
        </div>

        <div className="xl:mr-[50px] xl:mb-0 min-[320px]:mb-2 min-[320px]:mr-3 text-[#b08968]">
          <h4>${coffee.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Menuu2;
