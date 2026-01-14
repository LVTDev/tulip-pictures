'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { slidesEn, slidesEs } from "@/utils/slides";

const HomeSlider = ({lang}:{lang: string}) => {
  let slides

  lang === "es" ? slides = slidesEs : slides = slidesEn
  return (
     <Swiper
          modules={[Autoplay, A11y, Navigation]}
          navigation
          loop
          autoplay={{
            delay: 5000,
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
          {slides.map((slide, i) => (
            <SwiperSlide className="" key={i}>
              <div className={` h-[95h] bg-cover relative`}>
                <div className="relative  h-[95vh]">
                  <Link href={slide.link}>
                    <Image
                      src={slide.slideBG}
                      alt={`bg Poster`}
                      className="object-cover hidden md:block"
                      fill
                    />
                    <Image
                      src={slide.mobileBG || slide.slideBG}
                      alt={`bg Poster`}
                      className="object-cover md:hidden"
                      fill
                    />
                    <div className="absolute text-white bottom-0 w-full">
                      <p className="text-right font-bold text-base md:text-xl opacity-90 mr-4">
                        {slide.textTop}
                      </p>
                      <div className="text-right font-bold text-base md:text-xl opacity-90 mr-4">
                        {slide.textBottom}
                      </div>
                      {slide.slideTitle && (
                        <img
                          src={`${slide.slideTitle}`}
                          className="mx-auto"
                          alt="Header"
                        />
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  )
}

export default HomeSlider