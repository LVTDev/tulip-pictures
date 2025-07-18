"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
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
  distribucionProduccion: string;
};

const HomeSlider = ({
  slideData,
  category,
}: {
  slideData: SlideData[];
  category: string;
}) => {

  const filterData = () => {
    if (category === "distribution") {
      return slideData.filter(
        (elem) => elem.distribucionProduccion === "distribucion"
      );
    } else if (category === "production") {
        return slideData.filter(
        (elem) => elem.distribucionProduccion === "produccion"
      );
    }
  };

  const filteredData = filterData()
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1, // For mobile (0px and up)
        },
        640: {
          slidesPerView: 2, // Small tablets
        },
        1024: {
          slidesPerView: 3, // Desktops
        },
      }}
      navigation
      pagination={{ clickable: true, type: "progressbar" }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {filteredData && filteredData.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="pb-3">
            <div className="w-[250px] h-[380px] mx-auto">
              <img
                className="h-[380px]"
                src={urlFor(slide.poster).url()}
                alt={`${slide.title} Poster`}
              />
            </div>
            <div className="mt-2 pl-4">
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
