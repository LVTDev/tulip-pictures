import AnnouncementBar from "@/components/general UI/AnnouncementBar";
import SubscribeForm from "@/components/general UI/SubscribeForm";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const result = await fetchSanityIndividualMovie("pelicula", id);
  const pelicula: Movie = result[0];
  console.log(pelicula);
  if (result.length > 1) return <p>Loading</p>;
  return (
    <div>
      <AnnouncementBar />
      <div>
        <div>
          <div className=" h-[380px] mx-auto">
            <Image
              src={urlFor(pelicula.poster).url()}
              alt={`${pelicula.title} Poster`}
              className="h-[380px] w-[280px] object-cover"
              width={280}
              height={380}
            />
          </div>
          <div>
            <p>Ver Trailler</p>
          </div>
          <div>
            <p>Descargar presskit</p>
          </div>
        </div>
        <div>
          <h1>{pelicula.title}</h1>
          <div className="flex">
            <p className="font-bold">Dirección y Guion: </p>
            <p>{pelicula.director}</p>
          </div>
          <div className="flex">
            <p className="font-bold">Año: </p>
            <p>{pelicula.year}</p>
          </div>
          <div className="flex">
            <p className="font-bold">Pais: </p>
            <p>{pelicula.pais}</p>
          </div>
          <div className="flex">
            <p className="font-bold">Duracion: </p>
            <p>{pelicula.movieLength}</p>
          </div>
          <div>
            <p className="font-bold mt-4 mb-2">Sinopsis</p>
            <p>{pelicula.description}</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mx-auto my-7">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Page;
