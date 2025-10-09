"use client";
import FooterForm from "@/components/general UI/FooterForm";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesFetched = await fetchSanity("pelicula");
      const finalFilteredMovies = moviesFetched.filter(
        (movie: Movie) => movie.proximosEstrenos === true
      );
      setFetchedMovies(finalFilteredMovies);
      console.log(finalFilteredMovies);
    };
    fetchMovies();
  }, []);
  return (
    <div className="bg-[#ebf5e2]">
      <div className="max-w-[90vw] pt-8 mx-auto">
        <div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[4vmin]">
            <div className=" pl-4 sm:col-span-2 ">
           
              <h4 className="text-3xl uppercase font-bold">
                {" "}
                Próximos Estrenos
              </h4>
              <p>
                Si tienes un proyecto que desafíe, conmueva o inspire,{" "}
                <span className="font-bold">queremos escucharlo.</span>
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
          <div className="mt-6 pb-6 px-3">
            <div className="md:w-[60%] mx-auto">
              <FooterForm lang="es" />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Page;
