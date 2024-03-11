import React from "react";
import offer from "../../../assets/offer-2.jpg";
import offer1 from "../../../assets/offer-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../offer/Offer.css";

const Offer = () => {
  return (
    <div className="offer w-full xl:h-screen h-[70vh] sm:h-[80vh] bg-[#191919] text-white ">
      <div className="overlayy xl:px-[4rem] xl:h-screen sm:h-[80vh] h-[70vh] px-[2rem] pt-[60px]">
        <h1 className="text-center text-3xl mb-6 text-[#b08968]">
          Special Offer For You
        </h1>

        <Swiper
          spaceBetween={60}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="container"
        >
          <SwiperSlide className="flex flex-col xl:flex-row items-center relative xl:ml-[80px]">
            <div>
              <img
                className="xl:w-[600px] w-full rounded-md"
                src={offer}
                alt=""
              />
            </div>

            <div className="xl:w-[320px] w-full h-[255px] bg-[#191919] p-2 rounded-md xl:absolute right-[250px] top-[60px]">
              <div className="xl:w-[305px] w-full h-[238px] rounded-md p-[10px] border-2 border-dashed border-gray-100">
                <h3 className="xl:text-2xl font-semibold mb-3">
                  Cappucinno Arabica
                </h3>
                <span className="mb-3 text-[#b08968]">Get 40% Offer</span>
                <p className="mt-2 sm:w-[350px] xl:w-auto xl:mb-0 sm:mb-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its normal
                  distribution layout
                </p>
                <button className="bg-[#b08968] mt-2 py-1 px-2 rounded-md">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col xl:flex-row items-center relative">
            <div>
              <img
                className="xl:w-[600px] w-full rounded-md"
                src={offer1}
                alt=""
              />
            </div>

            <div className="xl:w-[320px] w-full h-[255px] bg-[#191919] p-2 rounded-md xl:absolute right-[250px] top-[60px]">
              <div className="xl:w-[305px] w-full h-[238px] rounded-md p-[10px] border-2 border-dashed border-gray-100">
                <h3 className="xl:text-2xl font-semibold mb-3">
                  Cappucinno Arabica
                </h3>
                <span className="mb-3 text-[#b08968]">Get 40% Offer</span>
                <p className="mt-2 sm:w-[350px] xl:w-auto xl:mb-0 sm:mb-3">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its normal
                  distribution layout
                </p>
                <button className="bg-[#b08968] mt-2 py-1 px-2 rounded-md">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Offer;
