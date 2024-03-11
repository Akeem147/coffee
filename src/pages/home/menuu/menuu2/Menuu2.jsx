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
          <div>
            <h4 className="text-[#b08968]">{coffee.name}</h4>
            <span>{coffee.ingredient}</span>
          </div>
        </div>

        <div className="mr-[50px] text-[#b08968]">
          <h4>${coffee.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Menuu2;
