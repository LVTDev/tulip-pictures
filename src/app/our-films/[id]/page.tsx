import React from "react";
// import { useRouter } from 'next/router'
import { urlFor } from "@/sanity/lib/image";
import { fetchSanity } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const decodedTitle = decodeURIComponent(id as string);

  const moviesFetched: Movie[] = await fetchSanity("pelicula");
  const currentMovie = moviesFetched.find(
    (movie) => movie.title.toLowerCase().trim() === decodedTitle.toLowerCase().trim()
  );
  console.log(moviesFetched);
  console.log(currentMovie);
  if (!currentMovie)
    return (
      <div className="mt-16">
        <p>{decodedTitle} película no existe</p>
      </div>
    );
  return (
    <div className="mt-16 mx-7">
      <h1 className="text-4xl font-bold mb-15">{currentMovie?.title}</h1>
      <div className="md:flex">
        <div className="relative w-[300px] h-[400px] mx-auto md:h-[350px] md:w-[250px] ">
          <Image
            fill
            src={urlFor(currentMovie.poster).url()}
            alt={`${currentMovie.title} poster`}
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-[#d1d1d1] text-sm">{currentMovie.description}</p>
        </div>
      </div>
      <div className="bg-black flex gap-6 justify-between px-5 py-10 mt-6">
        <div>
          <p className="text-sm font-medium opacity-50 mb-2 uppercase">
            Director
          </p>
          <p className="font-bold">{currentMovie.director}</p>
        </div>
        <div>
          <p className="text-sm font-medium opacity-50 mb-2 uppercase">País</p>
          <p className="font-bold">{currentMovie.pais}</p>
        </div>
        <div>
          <p className="text-sm font-medium opacity-50 mb-2 uppercase">
            Duración
          </p>
          <p className="font-bold">{currentMovie.movieLength}</p>
        </div>
        <div>
          <p className="text-sm font-medium opacity-50 mb-2 uppercase">Año</p>
          <p className="font-bold">{currentMovie.year}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
