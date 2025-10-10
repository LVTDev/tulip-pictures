"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SliderPeliculas = ({
  enlacesImagenes,
}: {
  enlacesImagenes: string[];
}) => {
  return (
    <div className="w-full mx-auto">
      {" "}
      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        navigation
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full"
        slidesPerView={1}
        //   onSlideChange={() => {
        //     if (currentIndex > 13) setCurrentIndex(0);
        //     else setCurrentIndex((prev) => prev + 1);
        //     console.log("slide change");
        //   }}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {enlacesImagenes.map((slide, i) => (
          <SwiperSlide className="" key={i}>
            <div className={` max-h-[1000px]  bg-cover relative`}>
              <div className="relative  ">
                <img src={slide} alt={`bg Poster`} className="object-cover" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPeliculas;
