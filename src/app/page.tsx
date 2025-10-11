"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const slides = [
    {
      slideBG: "/distrBack.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
      textTop: "Bird, 2024",
      textBottom: "Andrea Arnold",
      link: "/distribucion",
    },
    {
      slideBG: "/prodBack.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
      link: "/produccion",
      textTop: "El Jockey, 2024",
      textBottom: "Luis Ortega",
    },
    {
      slideBG: "/rentaBG.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/8c45eb6634d2e942f4a723544a5d9edaa0099052-1712x153.png",
      // textTop: "CÁMARA ALEXA 35",
      // textBottom: (
      //   <p className="italic">
      //     + PRODUCTION SET <br />
      //     nancy@letswoohoo.com
      //   </p>
      // ),
      link: "/renta",
    },
    {
      slideBG: "/BackFlamenco.png",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
      textTop: "Flamenco, 2025",
      textBottom: "Diego Céspedes",
      link: "/distribucion",
    },
    {
      slideBG: "/BackSorda.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
      textTop: "Sorda, 2025",
      textBottom: "Eva Libertad",
      link: "/distribucion",
    },
    {
      slideBG: "/produccion4.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
      textTop: "Annette, 2021",
      textBottom: "Leos Carax",
      link: "/produccion",
    },
    {
      slideBG: "/produccion3.jpg",
      slideTitle:
        "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
      link: "/produccion",
      textTop: "Silencio, 2018",
      textBottom: "Lorena Villarreal",
    },
  ];
  return (
    <div className="bg-[#30383a] h-[93vh] relative  overflow-hidden">
      <div className="absolute w-full h-full">
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
              <div className={` h-[93h] bg-cover relative`}>
                <div className="relative  h-[93vh]">
                  <Link href={slide.link}>
                    <Image
                      src={slide.slideBG}
                      alt={`bg Poster`}
                      className="object-cover "
                      fill
                    />
                    <div className="absolute text-white bottom-0 ">
                      <p className="text-right font-bold text-xl opacity-90 mr-4">
                        {slide.textTop}
                      </p>
                      <div className="text-right font-bold text-xl opacity-90 mr-4">
                        {slide.textBottom}
                      </div>
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
