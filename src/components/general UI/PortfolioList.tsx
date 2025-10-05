"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
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

  if (fetchedMovies.length < 1) return <p>Loading</p>;
  return (
    <div className="bg-[#ebf5e2] w-full">
      <div className="max-w-[90vw] pt-8 mx-auto">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="text-3xl pl-4 sm:col-span-2 uppercase font-bold">
              <h3>PORTAFOLIO DE PROYECTOS</h3>
              <h4>{title}</h4>
            </div>
            {fetchedMovies.map((movie) => {
              return (
                <Link
                  href={`/pelicula/${movie.slug.current}`}
                  key={movie._id}
                  className="h-[387px] w-[290px] mx-auto"
                >
                  <Image
                    src={urlFor(movie.poster).url()}
                    alt={`${movie.title} Poster`}
                    className="h-[380px] w-[280px] object-cover"
                    width={290}
                    height={387}
                  />
                </Link>
              );
            })}
          </div>
          <div className="mt-6 pb-6 px-3">
            <p>
              Si tienes un proyecto que desafie, conmueva o inspire,{" "}
              <span className="font-bold">queremos escucharlo</span>
            </p>
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
