import React from "react";
import test1 from "../../../assets/testimonial-1.jpg";
import test2 from "../../../assets/testimonial-2.jpg";
import test3 from "../../../assets/testimonial-3.jpg";
import test4 from "../../../assets/testimonial-4.jpg";
import { IoMdStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../goodwill/Goodwill.css";

const Goodwill = () => {
  return (
    <div className="w-full xl:h-auto h-auto sm:h-[55vh] text-white xl:px-[4rem] pt-[30px] mb-5 xl:mb-6">
      <h1 className="text-3xl text-center mb-8">What Client Say's</h1>

      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className=""
      >
        <SwiperSlide className="flex items-center ml-[70px] min-[320px]:ml-[15px] min-[375px]:ml-[45px] min-[414px]:ml-[65px] min-[360px]:ml-[40px] xl:ml-0 sm:ml-[170px]">
          <div>
            <div className="w-[290px] h-[150px] bg-[rgb(11,11,11)] p-3 rounded-md text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                animi quia molestias ex inventore pariatur placeat numquam, illo
                aspernatur sed? dolor sit amet.
              </p>
            </div>

            <div className="flex items-center justify-center gap-[10px] mt-[30px]">
              <div>
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={test1}
                  alt=""
                />
              </div>
              <div>
                <span className="text-xl text-[#b08968]">Reid E. Bull</span>
                <p>Customer</p>
                <div className="flex items-center text-[#b08968] py-1">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <div className="hidden xl:block">
            <div className="xl:w-[290px] w-[400px] h-[150px] bg-[rgb(11,11,11)] p-3 rounded-md text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                animi quia molestias ex inventore pariatur placeat numquam, illo
                aspernatur sed? dolor sit amet.
              </p>
            </div>

            <div className="flex items-center xl:justify-center gap-[10px] mt-[30px]">
              <div>
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={test2}
                  alt=""
                />
              </div>

              <div>
                <span className="text-xl text-[#b08968]">Reid E. Bull</span>
                <p>Customer</p>
                <div className="flex items-center text-[#b08968] py-1">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hidden xl:block">
          <div>
            <div className="w-[290px] h-[150px] bg-[rgb(11,11,11)] p-3 rounded-md text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                animi quia molestias ex inventore pariatur placeat numquam, illo
                aspernatur sed? dolor sit amet.
              </p>
            </div>

            <div className="flex items-center justify-center gap-[10px] mt-[30px]">
              <div>
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={test3}
                  alt=""
                />
              </div>

              <div>
                <span className="text-xl text-[#b08968]">Reid E. Bull</span>
                <p>Customer</p>
                <div className="flex items-center text-[#b08968] py-1">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container-2 hidden xl:block">
          <div>
            <div className="w-[290px] h-[150px] bg-[rgb(11,11,11)] p-3 rounded-md text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                animi quia molestias ex inventore pariatur placeat numquam, illo
                aspernatur sed? dolor sit amet.
              </p>
            </div>

            <div className="flex items-center justify-center gap-[10px] mt-[30px]">
              <div>
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={test4}
                  alt=""
                />
              </div>
              <div className="texts">
                <span className="text-xl text-[#b08968]">Reid E. Bull</span>
                <p>Customer</p>
                <div className="flex items-center text-[#b08968] py-1">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Goodwill;
