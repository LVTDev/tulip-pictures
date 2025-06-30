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
  return (
    <div className="flex ">
      <div className="mr-8 hidden md:block">
        {lang === "es" && (
          <p className="font-bold text-5xl mb-6">
            Sólo en <br />
            <span className="transparent-text">cines</span>
          </p>
        )}
        {lang === "en" && (
          <p className="font-bold text-5xl mb-6">
            In
            <br />
            <span className="transparent-text">cinemas</span>
          </p>
        )}
        <div>
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
        </div>
      </div>
      <div className="max-w-[75vw]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
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
                <SwiperSlide key={i}>
                  <div className="pb-5">
                    <div className="w-[250px] h-[320px] mx-auto">
                      <img
                        className="h-[280px]"
                        src={urlFor(slide.poster).url()}
                        alt={`${slide.title} Poster`}
                      />
                    </div>
                    <div className="mt-2">
                      <p className="text-[14px] text-verde font-medium">
                        {slide.index! < 10 ? `0${slide.index}` : slide.index}
                      </p>
                      <p className="font-medium">{slide.title}</p>
                      <p className="text-[9px] text-verde">
                        {" "}
                        {slide.categories &&  slide.categories.map((cat) => cat.title).join(", ")}
                      </p>{" "}
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
