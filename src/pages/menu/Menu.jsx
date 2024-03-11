import React from "react";
import "../menu/Menu.css";
import { MenuData } from "../../components/menuDb/MenuData";

const Menu = () => {
  return (
    <div className="w-full h-auto text-white xl:px-[4rem] px-[2rem] pt-[50px]">
      <h1 className="text-center text-3xl text-[#b08968] mb-7 font-semibold">
        Our Menu
      </h1>

      <div className="grid xl:grid-cols-4 grid-cols-1 ">
        {MenuData.map((menu) => (
          <div className="relative cursor-pointer">
            <img
              className="xl:w-[270px] w-full rounded-md"
              src={menu.image}
              alt=""
            />
            <div className="menu absolute top-0 right-0 left-0 xl:w-[270px] w-full xl:h-[270px] h-full p-[15px] text-center">
              <h3 className="text-[30px] mb-[10px] text-[#b08968] font-semibold">
                {menu.name}
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt rerum reiciendis, neque cupiditate quibusdam iure!
              </p>
              <p className="pt-5">${menu.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
