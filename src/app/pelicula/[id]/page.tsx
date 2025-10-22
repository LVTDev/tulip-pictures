import Loading from "@/components/general UI/Loading";
import ReconocimentosList from "@/components/general UI/ReconocimentosList";
import SliderPeliculas from "@/components/general UI/SliderPeliculas";
import SubscribeForm from "@/components/general UI/SubscribeForm";
import { urlFor } from "@/sanity/lib/image";
import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
import { Movie } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "react-feather";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const result = await fetchSanityIndividualMovie("pelicula", id);
  const pelicula: Movie = result[0];
  const enlacesImagenes =
    pelicula.imagenes && pelicula.imagenes.map((img) => urlFor(img).url());
  // const enlacesPremios =
  //   pelicula.reconocimientos &&
  //   pelicula.reconocimientos.map((img) => urlFor(img).url());
  if (result.length > 1)
    return (
      <p className="bg-[#ebf5e2] h-full text-black text-center">
        <Loading />
      </p>
    );
  return (
    <div className="w-screen bg-no-repeat bg-cover bg-left bg-[url('/quienesSomosBack2.png')]">
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
          <h1 className="uppercase font-bold text-5xl mb-4 text-center md:text-left">
            {pelicula.title}
          </h1>
        )}
        <div className="mt-6 mx-auto">
          {enlacesImagenes && enlacesImagenes.length > 0 && (
            <div className="">
              <SliderPeliculas enlacesImagenes={enlacesImagenes} />
            </div>
          )}
        </div>
        <div className="bg-black w-full h-[1px] my-6" />
        <div className="md:flex gap-10">
          <div className="w-max mx-auto md:mx-0">
            <div className=" mx-auto">
              <Image
                src={urlFor(pelicula.poster).url()}
                alt={`${pelicula.title} Poster`}
                className="h-[380px] w-[280px] object-contain"
                width={290}
                height={380}
              />
            </div>
            {pelicula.enlaceTrailer && (
              <div className="bg-black py-2 mt-5 max-w-[220px] mx-auto">
                <a
                  href={pelicula.enlaceTrailer}
                  target="_blank"
                  className=" text-white uppercase font-bold text-center my-5"
                >
                  <div className="flex justify-center gap-3">Ver Tráiler</div>
                </a>
              </div>
            )}

            {/* {pelicula.pressKitURL && (
              <a href={`${pelicula.pressKitURL}`} target="_blank">
                <p className="bg-[#30383a] text-white uppercase font-bold text-center my-5 py-1">
                  Descargar presskit
                </p>
              </a>
            )} */}
          </div>
          {/* <div className="pb-5 flex-1 flex flex-col text-sm md:text-base"> */}
          <div className="pb-5 pt-6 md:pt-0 grid md:grid-cols-3 grid-cols-1 md:w-2/3 gap-3 lg:gap-6 text-sm md:text-base">
            {/* <div className="flex justify-between gap-2"> */}
            <div>
              {pelicula.director && (
                <div className="">
                  <p className="uppercase opacity-60">Dirección </p>
                  <p className="font-bold md:text-lg">{pelicula.director}</p>
                </div>
              )}
            </div>
            {/* {pelicula.produccionEmpresas &&
                pelicula.produccionEmpresas?.length > 0 && (
                  <div className="w-1/3">
                    <p className="uppercase opacity-60">Producción </p>
                    <div>
                      {pelicula.produccionEmpresas.map((empresa, i) => (
                        <p key={i} className="font-bold">
                          {empresa.name}
                          <span className="lowercase font-normal ml-1 opacity-60">
                            {empresa.role && empresa.role}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                )} */}

            <div>
              {pelicula.year && (
                <div className="">
                  <p className="uppercase opacity-60">Año </p>
                  <p className="font-bold md:text-lg">{pelicula.year}</p>
                </div>
              )}
            </div>
            <div>
              {pelicula.movieLength && (
                <div className="">
                  <p className="uppercase opacity-60">Duración </p>
                  <p className="font-bold md:text-lg">{pelicula.movieLength}</p>
                </div>
              )}
            </div>
            {/* </div> */}
            {/* <div className="flex justiy-between gap-2 my-8"> */}
            {/* <div className="w-1/3"></div> */}
            <div>
              {pelicula.pais && (
                <div className="">
                  <p className="uppercase opacity-60">País</p>
                  <p className="font-bold md:text-lg">{pelicula.pais}</p>
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              {pelicula.reconocimientos &&
                pelicula.reconocimientos?.length > 0 && (
                  <ReconocimentosList list={pelicula.reconocimientos} />
                )}
            </div>
            {/* </div> */}
            <div className="md:col-span-3">
              {pelicula.description && (
                <div>
                  <p className="uppercase opacity-60 mt-4 ">Sinópsis</p>
                  <p className="font-bold md:text-lg">{pelicula.description}</p>
                </div>
              )}
            </div>
            {/* {enlacesPremios && enlacesPremios.length > 0 && (
              <div className="mt-8">
                <p className="uppercase opacity-60">Reconocimientos</p>
                <div className="flex justify-between">
                  {enlacesPremios.map((premio, i) => {
                    if (i < 3)
                      return (
                        <div key={i}>
                          <img className="w-40" src={premio} />
                        </div>
                      );
                  })}
                </div>
              </div>
            )} */}
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
