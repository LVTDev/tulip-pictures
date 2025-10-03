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
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const slides = [
    {
      slideBG:
        "https://cdn.sanity.io/images/yj63f9tw/production/c9b5ea9e7fdbdeff31d30174d8d5d339de70c4a2-1920x1080.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
      textTop: "Bird, 2024",
      textBottom: "Andrea Arnold",
      link:"/distribucion"
    },
    {
      slideBG:
        "https://cdn.sanity.io/images/yj63f9tw/production/e2969e2cadd2703ea04056bff02d778c50577dc8-1920x1080.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
      link:"/produccion"

    },
    {
      slideBG: "/rentaBG.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/cc991e9e329008e7d928cb7e544d14e2ee084b06-712x208.png",
      textTop: "CÁMARA ALEXA 35",
      textBottom: "+ PRODUCTION SET",
      link:"/renta"

    },
  ];
  return (
    <div className="bg-[#30383a]">
      <div className=" w-[98vw] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
              <div className={` h-[90vh] bg-cover relative`}>
                <div  className="relative  h-[90vh]">
                <Link href={slide.link}>
                  <Image
                    src={slide.slideBG}
                    alt={`bg Poster`}
                    className="object-cover"
                    fill
                    />
                  <div className="absolute w-full text-white bottom-0 ">
                    <p className="text-right font-bold text-xl opacity-90">
                      {slide.textTop}
                    </p>
                    <p className="text-right font-bold text-xl opacity-90">
                      {slide.textBottom}
                    </p>
                    <img src={`${slide.slideTitle}`} alt="Header" />
                  </div>
                    </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
