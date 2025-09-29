"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PortfolioList = ({ title }: { title: string }) => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesFetched = await fetchSanity("pelicula");
      const finalFilteredMovies = moviesFetched.filter(
        (movie: Movie) => movie.distribucionProduccion === title
      );
      setFetchedMovies(finalFilteredMovies);
    };
    fetchMovies();
  }, []);

if (fetchedMovies.length <1) return <p>Loading</p>
  return (
    <div className="bg-[#ebf5e2] w-[100vw]">
      <div>
        <div className="flex">
          <div>
            <h3>PORTAFOLIO DE PROYECTOS</h3>
            <h4>{title}</h4>
          </div>
          <div className=" h-[380px] mx-auto">
            <Image
              src={urlFor(fetchedMovies[0].poster).url()}
              alt={`${fetchedMovies[0].title} Poster`}
              className="h-[380px] w-[280px] object-cover"
              width={280}
              height={380}
            />
          </div>
          <div className=" h-[380px] mx-auto">
            <Image
              src={urlFor(fetchedMovies[1].poster).url()}
              alt={`${fetchedMovies[1].title} Poster`}
              className="h-[380px] w-[280px] object-cover"
              width={280}
              height={380}
            />
          </div>
          {/* <div>
              <Image src={fetchedMovies[0]} />
            </div> */}{" "}
        </div>
        <div>
            <div className="grid grid-cols-4 gap-5">
              {fetchedMovies.map((movie, i) => {
                if (i < 2) return;
                return (
                  <div key={movie._id} className=" h-[380px] mx-auto">
                    <Image
                      src={urlFor(movie.poster).url()}
                      alt={`${movie.title} Poster`}
                      className="h-[380px] w-[280px] object-cover"
                      width={280}
                      height={380}
                    />
                  </div>
                );
              })}
            </div>
            <div>
                <p>Si tienes un proyecto que desafie, conmueva o inspire, <span className="font-bold">queremos escucharlo</span></p>
                <div className="flex">
                    <p className="font-bold">¡Escribenos!</p>
                    <p>FORM</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
