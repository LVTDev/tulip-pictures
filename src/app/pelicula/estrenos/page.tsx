"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const [selectedProject, setSelectedProject] = useState<null | Movie>();

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
  console.log(selectedProject);
  return (
    <div className="bg-[#ebf5e2]">
      <h1 className="text-center uppercase text-lg md:text-7xl pt-5 mb-5">
        Próximos Estrenos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1440px] pt-8 mx-auto pb-5">
        {fetchedMovies.map((movie) => {
          return (
            <Link href={`/pelicula/${movie.slug.current}`} key={movie._id} className=" h-[380px] mx-auto cursor-pointer">
              <Image
                src={urlFor(movie.poster).url()}
                alt={`${movie.title} Poster`}
                className="h-[380px] w-[280px] object-cover"
                width={280}
                height={380}
                onClick={() => setSelectedProject(movie)}
              />
            </Link>
          );
        })}
      </div>
     
    </div>
  );
};

export default Page;
