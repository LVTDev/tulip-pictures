"use client";
import AnnouncementBar from "@/components/general UI/AnnouncementBar";
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
      <AnnouncementBar />
      <h1 className="text-center uppercase text-lg md:text-9xl my-5">
        Próximos Estrneos
      </h1>

      <div className="grid grid-cols-4 gap-5">
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
        <div className="">
          {selectedProject && (
            <div className="md:flex text-white">
              <div className="w-1/2">
                <div className=" h-[380px] mx-auto">
                  <Image
                    src={urlFor(selectedProject.poster).url()}
                    alt={`${selectedProject.title} Poster`}
                    className="h-[380px] w-[280px] object-cover"
                    width={280}
                    height={380}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p>{selectedProject.title}</p>
                <p>
                  {selectedProject.director}, {selectedProject.year}
                </p>
                <p>{selectedProject.description}</p>
                <p className="uppercase">
                  {selectedProject.fechaEstreno &&
                    new Date(selectedProject.fechaEstreno).toLocaleDateString(
                      "es-MX",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    )}
                </p>
                <Link href={`/pelicula/${selectedProject.slug.current}`}>Ver ficha tecnica completa</Link>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Page;
