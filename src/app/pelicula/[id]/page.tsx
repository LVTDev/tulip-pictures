import SubscribeForm from "@/components/general UI/SubscribeForm";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft, PlayCircle } from "react-feather";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const result = await fetchSanityIndividualMovie("pelicula", id);
  const pelicula: Movie = result[0];
  if (result.length > 1)
    return <p className="bg-[#ebf5e2] text-black">Loading</p>;
  return (
    <div className="w-screen bg-[#ebf5e2]">
      <div className="w-[90vw] mx-auto pt-5">
        <div className="bg-[#30383a] text-white px-2 py-3 w-max mb-4">
          {pelicula.distribucionProduccion === "distribucion" ? (
            <Link href="/distribucion/portfolio" className="flex items-center gap-3"><ArrowLeft />Regresar a peliculas</Link>
          ) : (
            <Link href="/produccion/portfolio" className="flex items-center gap-3"><ArrowLeft />Regresar a peliculas</Link>
          )}
        </div>
        <div className="md:flex gap-10">
          <div className="w-max">
            <div className=" mx-auto">
              <Image
                src={urlFor(pelicula.poster).url()}
                alt={`${pelicula.title} Poster`}
                className="h-[380px] w-[280px] object-contain"
                width={290}
                height={387}
              />
            </div>
            {pelicula.enlaceTrailer && (
              <a
                href={pelicula.enlaceTrailer}
                target="_blank"
                className="bg-[#30383a] text-white uppercase font-bold text-center my-5 py-1"
              >
                <div className="flex justify-center gap-3">
                  Ver Trailler
                  <span className="inline-block">
                    <PlayCircle />
                  </span>
                </div>
              </a>
            )}
            {pelicula.pressKitURL && (
              <a href={`${pelicula.pressKitURL}`} target="_blank">
                <p className="bg-[#30383a] text-white uppercase font-bold text-center my-5 py-1">
                  Descargar presskit
                </p>
              </a>
            )}
          </div>
          <div className=" flex-1">
            {pelicula.title && (
              <h1 className="uppercase font-bold text-2xl mb-4">
                {pelicula.title}
              </h1>
            )}
            {pelicula.director && (
              <div className="flex">
                <p className="font-bold">Dirección: </p>
                <p>{pelicula.director}</p>
              </div>
            )}
            {pelicula.year && (
              <div className="flex">
                <p className="font-bold">Año: </p>
                <p>{pelicula.year}</p>
              </div>
            )}
            {pelicula.pais && (
              <div className="flex">
                <p className="font-bold">Pais: </p>
                <p>{pelicula.pais}</p>
              </div>
            )}
            {pelicula.movieLength && (
              <div className="flex">
                <p className="font-bold">Duracion: </p>
                <p>{pelicula.movieLength}</p>
              </div>
            )}
            {pelicula.description && (
              <div>
                <p className="font-bold mt-4 mb-2">Sinopsis</p>
                <p>{pelicula.description}</p>
              </div>
            )}
          </div>
        </div>
        <div></div>
        <div className="mx-auto mt-7 pb-7">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
