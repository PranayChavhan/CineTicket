import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CarouselCard from "./CarouselCard";
import {
    Typography,
  } from "@material-tailwind/react";

function CarouselList() {
  return (
    <div className="mt-10 max-w-screen flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between w-[68%]">
            <Typography variant="h4" color="blue-gray">
            Recommended Movies
          </Typography>
            <a
                href="/"
                className="font-medium text-red-300 text-sm transition-colors hover:text-red-500"
              >
                See All
              </a>
        </div>
      <div className="max-w-screen-2xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
           <CarouselCard/>
          </SwiperSlide>
          <SwiperSlide>
           <CarouselCard/>
          </SwiperSlide>
          <SwiperSlide>
           <CarouselCard/>
          </SwiperSlide>
          <SwiperSlide>
           <CarouselCard/>
          </SwiperSlide>
          <SwiperSlide>
           <CarouselCard/>
          </SwiperSlide>
          <SwiperSlide>
           <CarouselCard/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselList;
