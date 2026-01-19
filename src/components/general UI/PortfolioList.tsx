"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
// import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FooterForm from "./FooterForm";
import Loading from "./Loading";
import { checkES } from "@/utils/pageLang";

const PortfolioList = ({ title, lang }: { title: string; lang: string }) => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const isES = checkES(lang);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesFetched = await fetchSanity("pelicula");
      const finalFilteredMovies = moviesFetched.filter(
        (movie: Movie) =>
          movie.distribucionProduccion === title ||
          movie.distribucionProduccion === "produccionDistribucion"
      );
      setFetchedMovies(finalFilteredMovies);
    };
    fetchMovies();
  }, []);

  if (fetchedMovies.length < 1)
    return (
      <div className="h-full">
        <Loading />
      </div>
    );
  return (
    <div className="bg-no-repeat bg-cover bg-left bg-[url('/quienesSomosBack2.png')] w-full">
      <div className="max-w-[90vw] pt-8 mx-auto">
        <div>
          <div className=" pl-4 ">
            <h3 className="text-3xl md:text-6xl  uppercase font-bold tracking-widest mb-6">
              {isES ? "CATÁLOGO DE PROYECTOS" : "Catalog of projects"}{" "}
              {isES ? (
                <span className="text-xl opacity-60 ml-2 tracking-normal">
                  {title == "distribucion" ? "Distribución" : "Producción"}
                </span>
              ) : (
                <span className="text-xl opacity-60 ml-2 tracking-normal">
                  {title == "distribucion" ? "Distribution" : "Production"}
                </span>
              )}
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[4vmin]">
            {fetchedMovies.map((movie) => {
              return (
                <Link
                  href={
                    isES
                      ? `/pelicula/${movie.slug.current}`
                      : `/en/films/${movie.slug.current}`
                  }
                  key={movie._id}
                  className=" mx-auto"
                >
                  <img
                    src={urlFor(movie.poster).url()}
                    alt={`${isES ? movie.title : movie.titleENG || movie.title} Poster`}
                    className="h-[350px]"
                  />
                </Link>
              );
            })}
          </div>
          <div className="mt-6 pb-6 px-3 md:w-[60%] mx-auto">
            <FooterForm renta={false} lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
