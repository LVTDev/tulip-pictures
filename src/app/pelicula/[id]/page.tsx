import SliderPeliculas from "@/components/general UI/SliderPeliculas";
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
  console.log(pelicula);
  const enlacesImagenes =
    pelicula.imagenes && pelicula.imagenes.map((img) => urlFor(img).url());
  console.log(enlacesImagenes);
  if (result.length > 1)
    return <p className="bg-[#ebf5e2] text-black">Loading</p>;
  return (
    <div className="w-screen bg-[#ebf5e2]">
      <div className="w-[90vw] mx-auto pt-5">
        <div className="bg-[#30383a] text-white px-2 py-3 w-max mb-4">
          {pelicula.distribucionProduccion === "distribucion" ? (
            <Link
              href="/distribucion/portfolio"
              className="flex items-center gap-3"
            >
              <ArrowLeft />
              Regresar
            </Link>
          ) : (
            <Link
              href="/produccion/portfolio"
              className="flex items-center gap-3"
            >
              <ArrowLeft />
              Regresar
            </Link>
          )}
        </div>{" "}
        {pelicula.title && (
          <h1 className="uppercase font-bold text-5xl mb-4">
            {pelicula.title}
          </h1>
        )}
        <div className="mt-6">
          {enlacesImagenes && enlacesImagenes.length > 0 && (
            <SliderPeliculas enlacesImagenes={enlacesImagenes} />
          )}
        </div>
        <div className="bg-black w-full h-[1px] my-6" />
        <div className="md:flex gap-10">
          <div className="w-max">
            <div className=" mx-auto">
              <Image
                src={urlFor(pelicula.poster).url()}
                alt={`${pelicula.title} Poster`}
                className="h-[380px] w-[280px] object-contain"
                width={290}
                height={380}
              />
            </div>

            {/* {pelicula.pressKitURL && (
              <a href={`${pelicula.pressKitURL}`} target="_blank">
                <p className="bg-[#30383a] text-white uppercase font-bold text-center my-5 py-1">
                  Descargar presskit
                </p>
              </a>
            )} */}
          </div>
          <div className="pb-5 flex-1 flex flex-col">
            <div className="flex justify-between ">
              {pelicula.director && (
                <div className="">
                  <p className="uppercase opacity-60">Dirección </p>
                  <p className="font-bold text-lg">{pelicula.director}</p>
                </div>
              )}
              {pelicula.year && (
                <div className="">
                  <p className="uppercase opacity-60">Año </p>
                  <p className="font-bold text-lg">{pelicula.year}</p>
                </div>
              )}
              {pelicula.movieLength && (
                <div className="">
                  <p className="uppercase opacity-60">Duración </p>
                  <p className="font-bold text-lg">{pelicula.movieLength}</p>
                </div>
              )}
            </div>
            {pelicula.description && (
              <div>
                <p className="uppercase opacity-60 mt-4 ">Sinópsis</p>
                <p className="font-bold text-lg">{pelicula.description}</p>
              </div>
            )}
            {pelicula.enlaceTrailer && (
              <div className="bg-black py-2 mt-auto max-w-[220px]">
                <a
                  href={pelicula.enlaceTrailer}
                  target="_blank"
                  className=" text-white uppercase font-bold text-center my-5"
                >
                  <div className="flex justify-center gap-3">
                    Ver Trailer
                    <span className="inline-block">
                      <PlayCircle />
                    </span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto mt-7 pb-7">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
