import React from "react";
import chef1 from "../../../../assets/chef1.jpg";
import chef2 from "../../../../assets/chef2.jpg";
import chef3 from "../../../../assets/chef3.jpg";
import chef4 from "../../../../assets/chef4.jpg";
import ExpertsProps from "../expertsProps/ExpertsProps";

const ExpertsComp = () => {
  return (
    <div className="w-full xl:h-screen h-auto text-white xl:px-[4rem] px-[2rem] pt-[50px] mb-6">
      <h1 className="text-center text-4xl mb-[40px]">Meet our experts</h1>

      <div className="grid xl:grid-cols-4 grid-cols-1 xl:gap-2 gap-6">
        <div>
          <ExpertsProps image={chef1} name="Mellisa Fie" title="Senior Chef" />
        </div>
        <div>
          <ExpertsProps image={chef2} name="Chad Smith" title="Senior Chef" />
        </div>
        <div>
          <ExpertsProps image={chef3} name="Arron Rodri" title="Senior Chef" />
        </div>
        <div>
          <ExpertsProps image={chef4} name="Tony Pinto" title="Senior Chef" />
        </div>
      </div>
    </div>
  );
};

export default ExpertsComp;
