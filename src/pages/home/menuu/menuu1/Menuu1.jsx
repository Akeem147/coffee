import React from "react";
import { MenuData } from "../../../../components/menuDb/MenuData";
import "../menuu1/Menuu1.css";
import Menuu2 from "../menuu2/Menuu2";

const Menuu1 = () => {
  return (
    <div className="menuu w-full h-auto bg-[#191919] text-white">
      <div className="overlay px-[1.5rem] h-auto sm:px-[2rem] xl:px-[4rem] pt-[50px]">
        <div className="text-center">
          <h4 className="text-2xl font-semibold mb-6 text-[#b08968] ">
            Our Menu
          </h4>
        </div>

        <div className="xl:w-full w-[380px] min-[320px]:w-full sm:w-[580px] grid xl:grid-cols-2 grid-cols-1 xl:px-8 p-[10px] xl:py-8 bg-[#191919] gap-[20px] xl:gap-[15px]">
          {MenuData.map((coffee) => (
            <div key={coffee.id}>
              <Menuu2 {...coffee} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menuu1;
