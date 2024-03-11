import React from "react";
import logo1 from "../../assets/log.png";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdArrowRight } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full xl:h-[85vh] h-auto xl:px-[4rem] text-white bg-[rgb(11,11,11)] ">
      <div className="flex xl:items-center items-start flex-col xl:flex-row justify-between px-[2rem] py-[30px]">
        <div>
          <img className="w-[200px] mb-[30px]" src={logo1} alt="" />
          <p className="w-[300px] mb-[20px] leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            minima fuga, ipsam quod ab amet aperiam. Fuga fugit dicta quis.
            Lorem ipsum dolor sit amet.
          </p>
          <div>
            <div className="flex items-center gap-[15px] mb-[10px]">
              <h5 className="text-[#b08968]">
                <MdOutlinePhoneEnabled />
              </h5>
              <span>+234 081-0872-1330</span>
            </div>
            <div className="flex items-center gap-[15px] mb-[10px]">
              <h5 className="text-[#b08968]">
                <IoLocationOutline />
              </h5>
              <span>Abule Egba, Lagos.</span>
            </div>
            <div className="flex items-center gap-[15px] mb-[10px]">
              <h5 className="text-[#b08968]">
                <IoMailOpenOutline />
              </h5>
              <span>Odedeakeem539@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-[20px]">
          <h4 className="text-[30px] mb-[20px]">Quick Links</h4>
          <div>
            <div className="flex items-center gap-[5px] my-[22px]">
              <h5 className="text-[18px] text-[#b08968]">
                <MdArrowRight />
              </h5>
              <a href="">About us</a>
            </div>

            <div className="flex items-center gap-[5px] my-[22px]">
              <h5 className="text-[18px] text-[#b08968]">
                <MdArrowRight />
              </h5>
              <a href="">Menu</a>
            </div>

            <div className="flex items-center gap-[5px] my-[22px]">
              <h5 className="text-[18px] text-[#b08968]">
                <MdArrowRight />
              </h5>
              <a href="">Features</a>
            </div>

            <div className="flex items-center gap-[5px] my-[22px]">
              <h5 className="text-[18px] text-[#b08968]">
                <MdArrowRight />
              </h5>
              <a href="">Gallery</a>
            </div>

            <div className="flex items-center gap-[5px] my-[22px]">
              <h5 className="text-[18px] text-[#b08968]">
                <MdArrowRight />
              </h5>
              <a href="">Team</a>
            </div>

            <div className="flex items-center gap-[5px] my-[22px]">
              <h5 className="text-[18px] text-[#b08968]">
                <MdArrowRight />
              </h5>
              <a href="">Reservations</a>
            </div>
          </div>
        </div>

        <div className="mt-[20px]">
          <h4 className="text-[30px] mb-[15px]">Opening Hours</h4>
          <div className="flex items-center justify-between border-2 border-dashed p-[15px] gap-6 w-[365px] sm:w-[580px] xl:w-[230px]">
            <div>
              <p className="my-[10px]">Monday:</p>
              <p className="my-[10px]">Tuesday:</p>
              <p className="my-[10px]">Wednesday:</p>
              <p className="my-[10px]">Thursday:</p>
              <p className="my-[10px]">Friday:</p>
              <p className="my-[10px]">Saturday:</p>
              <p className="my-[10px]">Sunday:</p>
            </div>
            <div>
              <p className="my-[10px]">09am-6pm</p>
              <p className="my-[10px]">09am-6pm</p>
              <p className="my-[10px]">09am-6pm</p>
              <p className="my-[10px]">09am-6pm</p>
              <p className="my-[10px]">09am-6pm</p>
              <p className="my-[10px]">09am-6pm</p>
              <p className="my-[10px]">Closed</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[30px] mb-[18px]">Newsletter</h4>
          <p className="w-[200px] mb-[15px]">
            Subscribe our newsletter to get latest update and news
          </p>
          <div className="flex flex-col w-[250px] gap-[15px]">
            <input
              className="xl:w-full w-[365px] sm:w-[580px] p-2 focus:outline-none bg-[rgb(11,11,11)] border border-[#b08968] rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <button className="xl:w-full w-[365px] sm:w-[580px] bg-[#b08968] p-2 rounded-md mb-3">
              Subscribe now
            </button>
          </div>
          <div>
            <p className="my-[12px] ml-[60%] sm:ml-[105%] xl:ml-0 w-full">
              Follow us:
            </p>
            <div className="flex items-center gap-[12px] ml-[35%] sm:ml-[82%] xl:ml-0">
              <div className="flex h-[40px] w-[40px] rounded-full items-center border border-gray-200 pt-5 px-[12px] pb-4">
                <a className="object-cover mr-[18px] text-[#b08968]" href="">
                  <FaFacebookF />
                </a>
              </div>

              <div className="flex h-[40px] w-[40px] rounded-full items-center border border-gray-200 pt-5 px-[12px] pb-4">
                <a className="object-cover mr-[18px] text-[#b08968]" href="">
                  <FaTwitter />
                </a>
              </div>

              <div className="flex h-[40px] w-[40px] rounded-full items-center border border-gray-200 pt-5 px-[12px] pb-4">
                <a className="object-cover mr-[18px] text-[#b08968]" href="">
                  <FaLinkedinIn />
                </a>
              </div>

              <div className="flex h-[40px] w-[40px] rounded-full items-center border border-gray-200 pt-5 px-[12px] pb-4">
                <a className="object-cover mr-[18px] text-[#b08968]" href="">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-5 border-gray-200 border-dashed border-t pt-5">
        <p>
          &copy; 2024 Coffeero by <span className="text-[#b08968]">Ak npg</span>
          . All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
