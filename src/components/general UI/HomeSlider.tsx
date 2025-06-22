"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { urlFor } from "@/sanity/lib/image";

export type SlideData = {
  poster: string;
  title: string;
  director: string;
  category?: string;
};

const HomeSlider = ({ slideData }: { slideData: SlideData[] }) => {
  return (
    <Swiper
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true , type: "progressbar"}}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slideData.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="pb-5">
            <div className="w-[250px] h-[400px]">
              <img
              className="h-[380px]"
                src={urlFor(slide.poster).url()}
                alt={`${slide.title} Poster`}
              />
            </div>
            <div className="mt-2">
              <p className="font-medium">{slide.title}</p>
              <p className="text-sm text-verde">{slide.director}</p>
              <p>{slide.category && slide.category}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
