import React from "react";
import Hero from "./hero/Hero";
import AboutUs from "./aboutUs/AboutUs";
import Prod from "./prod/Prod";
import Feat from "./feat/Feat";
import Menuu from "./menuu/Menuu";
import Article from "./article/Article";
import Statistics from "./statistics/Statistics";
import Offer from "./offer/Offer";
import ExpertsComp from "./experts/expertsComp/ExpertsComp";
import Reservation from "./reservation/Reservation";
import Goodwill from "./goodwill/Goodwill";

const HomeIndex = () => {
  return (
    <div className="w-full h-auto">
      <Hero />
      <AboutUs />
      <Prod />
      <Feat />
      <Menuu />
      <Article />
      <Statistics />
      <Offer />
      <ExpertsComp />
      <Reservation />
      <Goodwill />
    </div>
  );
};

export default HomeIndex;
