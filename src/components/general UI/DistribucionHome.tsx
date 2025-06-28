import { fetchSanity } from "@/utils/sanityFetch";
// import { Movie } from "@/utils/types";
import React from "react";
import HomeSlider from "./HomeSlider";

const DistribucionHome = async () => {
  const fetchedMovies = await fetchSanity("pelicula");
  return (
    <div className="mt-10 font-poppins">
      <h3 className="text-4xl font-bold mb-5">Distribución</h3>
      <div className="mb-5">
        <p className="text-sm md:text-base">
          <span className="text-verde font-medium mr-2">
            Adquisición y Compra de Derechos de Películas
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="mr-2">
            Estrategias de Distribución y Venta en México, Estados Unidos y
            LATAM
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="text-verde font-medium mr-2">
            Distribución VOD (Video on Demand)
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="mr-2">Consultoría en Aplicación de Fondos</span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="text-verde font-medium mr-2">
            Consultoría en Rutas de Festivales
          </span>
        </p>
      </div>
      <div>
        <HomeSlider category="distribution" slideData={fetchedMovies} />
      </div>
    </div>
  );
};

export default DistribucionHome;
