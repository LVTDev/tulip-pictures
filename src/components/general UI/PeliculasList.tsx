"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const PeliculasList = ({ category }: { category: string | null }) => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

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
  const movieHasCategory = (movie: Movie) => {
    if (!category) return true; // show all if no filter selected
    return movie.categories?.some(
      (cat: { title: string }) =>
        cat.title?.toLowerCase() === category.toLowerCase()
    );
  };

  const filteredMovies = fetchedMovies.filter(movieHasCategory);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".grid-animate-item");

      elements.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          // stagger:.5,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { dependencies: [filteredMovies] }
  );
  return (
    <div ref={container} className="grid grid-cols-2 sm:grid-cols-3  gap-6 p-6">
      {filteredMovies &&
        filteredMovies.map((movie: Movie) => (
          <div
            className="grid-animate-item -translate-x-16 opacity-0"
            key={movie._id}
          >
            <div className="relative w-[200px] h-[300px] md:h-[350] md:w-[250]">
              <Image
                fill
                src={urlFor(movie.poster).url()}
                alt={`${movie.title} poster`}
              />
            </div>
            <div>
              <p className="text-[14px] text-verde font-medium">
                {movie.index! < 10 ? `0${movie.index}` : movie.index}
              </p>
              <p className="text-xl leading-[1.3]">{movie.title}</p>
              <p className="text-[9px] text-verde">
                {" "}
                {movie.categories.map((cat) => cat.title).join(", ")}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PeliculasList;
