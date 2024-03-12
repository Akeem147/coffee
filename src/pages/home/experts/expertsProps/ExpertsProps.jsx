import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "../expertsProps/ExpertsProps.css";

const ExpertsProps = ({ image, name, title }) => {
  return (
    <div className="chef-infos relative bg-[rgb(11,11,11)] xl:w-[250px] w-full p-1 rounded-md border-b-4 border-[#b08968] xl:transition xl:duration-700 xl:ease-in-out">
      <img
        className="xl:w-[250px] w-full min-[320px]:w-full"
        src={image}
        alt=""
      />
      <h4 className="text-center pt-6 text-xl pb-5">{name}</h4>
      <p className="text-center text-[#b08968] mb-1">{title}</p>

      <div className="chef-socials">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaLinkedinIn />
        </a>
        <a href="">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default ExpertsProps;
