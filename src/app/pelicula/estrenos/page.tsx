"use client";
import Modal from "@/components/general UI/Modal";
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
        Próximos Estrneos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1440px] pt-8 mx-auto pb-5">
        {fetchedMovies.map((movie) => {
          return (
            <div key={movie._id} className=" h-[380px] mx-auto cursor-pointer">
              <Image
                src={urlFor(movie.poster).url()}
                alt={`${movie.title} Poster`}
                className="h-[380px] w-[280px] object-cover"
                width={280}
                height={380}
                onClick={() => setSelectedProject(movie)}
              />
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        <div className="pb-5">
          {selectedProject && (
            <div className="md:flex text-white ">
              <div className="md:w-1/2 w-full">
                <div className="h-[190px] md:h-[380px] mx-auto relative">
                  <Image
                    src={urlFor(selectedProject.poster).url()}
                    alt={`${selectedProject.title} Poster`}
                    className="h-[190px] md:h-[380px] md:w-[280px] object-cover"
                    width={280}
                    height={380}
                  />
                </div>
              </div>
              <div className="md:w-1/2 mb-10">
                <p className="text-xl font-bold uppercase mb-4">{selectedProject.title}</p>
                <p className="text-lg  mb-4">
                  {selectedProject.director}, {selectedProject.year}
                </p>
                <p className="text-sm">{selectedProject.description}</p>
                <p className="uppercase mb-5">
                  {selectedProject.fechaEstreno &&
                    new Date(selectedProject.fechaEstreno).toLocaleDateString(
                      "es-MX",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    )}
                </p>
                <Link href={`/pelicula/${selectedProject.slug.current}`} className="bg-white text-black uppercase text-xs md:text-base font-bold px-4 py-2 mt-5">Ver ficha tecnica completa</Link>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Page;
