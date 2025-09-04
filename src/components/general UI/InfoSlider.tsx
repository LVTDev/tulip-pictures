"use client";
import React, { useEffect, useState } from "react";
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
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";

const InfoSlider = ({ lang }: { lang: string }) => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesFetched = await fetchSanity("pelicula");
      const processedMovies = moviesFetched.map((movie: Movie, i: number) => ({
        ...movie,
        index: i + 1,
      }));
      setFetchedMovies(processedMovies);
    };
    fetchMovies();
  }, []);
  console.log(fetchedMovies);
  return (
    <div className="flex pl-8 mt-20">
      <div className="mr-8 hidden md:block text-black my-auto w-1/3">
        {lang === "es" && (
          <>
            <p className="font-bold text-4xl uppercase mb-6">
              Portafolio <br />
              de proyectos
            </p>
            <p>
              En nuestro portafolio se encuentran proyectos de alto perfil como:<br />
              <span className="font-bold">The intruder, Memoria, Blondi, Annette y Jockey.</span>
            </p>
          </>
        )}
        {lang === "en" && (
          <>
            <p className="font-bold text-5xl mb-6">Portfolio</p>
            <p>
              In our portfolio we find projects of high profile like:
              <span>The intruder, Memoria, Blondi, Annette y Jockey.</span>
            </p>
          </>
        )}
        {/* <div>
          <p className="text-[14px]  mb-6">
            <span className="text-lg font-medium">
              {currentIndex + 1 < 10
                ? `0${currentIndex + 1}`
                : currentIndex + 1}{" "}
            </span>
            <span className="opacity-70">/ 14</span>
          </p>
          <p className="line-clamp-6 opacity-80 text-sm">
            {fetchedMovies[currentIndex]?.description}
          </p>
        </div> */}
      </div>
      <div className="max-w-[70vw]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          // scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1, // For mobile (0px and up)
            },
        
            1024: {
              slidesPerView: 3, // Desktops
            },
          }}
          navigation
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => {
            if (currentIndex > 13) setCurrentIndex(0);
            else setCurrentIndex((prev) => prev + 1);
            console.log("slide change");
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {fetchedMovies.map((slide, i) => {
            if (i < 14)
              return (
                <SwiperSlide className="" key={i}>
                  <div className="w-[280px]">
                    <div className=" h-[380px] mx-auto">
                      <Image
                        src={urlFor(slide.poster).url()}
                        alt={`${slide.title} Poster`}
                        className="h-[380px] w-[280px] object-cover"
                        width={280}
                        height={380}
                      />
                    </div>
                    <div className=" bg-[#30383a] py-3 text-sm text-white">
                      <p className="font-medium text-center uppercase">
                        <span>{slide.title}</span>
                        <span className="opacity-80">

                        {slide.year &&  `, ${slide.year}`}
                        </span>
                      </p>
                      <p className="text-center opacity-80">{slide.director}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default InfoSlider;
