"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FooterForm from "./FooterForm";

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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[4vmin]">
            <div className=" pl-4 sm:col-span-2 ">
              <h3 className="text-3xl  uppercase font-bold">PORTAFOLIO DE PROYECTOS</h3>
              <h4 className="text-3xl uppercase font-bold">{title == "distribucion" ?   "Distribución" :"Producción"}</h4>
              <p className="my-8">
                Si tienes un proyecto que desafíe, conmueva o inspire,{" "}
                <span className="font-bold ">queremos escucharlo.</span>
              </p>
              <p className="font-bold">¡Escríbenos!</p>
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
          <div className="mt-6 pb-6 px-3 md:w-[60%] mx-auto">
              <FooterForm lang="es" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
