import React from "react";
import chef1 from "../../../assets/chef1.jpg";
import chef2 from "../../../assets/chef2.jpg";
import chef3 from "../../../assets/chef3.jpg";
import chef4 from "../../../assets/chef4.jpg";
import ChefProp from "../chefProp/ChefProp";

const Chef = () => {
  return (
    <div className="w-full xl:h-screen h-auto mb-[30px] text-white xl:px-[4rem] px-[2rem] pt-[50px]">
      <h1 className="text-center text-3xl mb-7 text-[#b08968]">
        Meet Our Chefs
      </h1>

      <div className="grid xl:grid-cols-4 grid-cols-1 mt-[60px]">
        <ChefProp image={chef1} name="Mellisa Fie" title="Senior Chef" />
        <ChefProp image={chef2} name="Chad Smith" title="Senior Chef" />
        <ChefProp image={chef3} name="Arron Rodri" title="Senior Chef" />
        <ChefProp image={chef4} name="Tony Pinto" title="Senior Chef" />
      </div>
    </div>
  );
};

export default Chef;
