import { fetchSanity } from "@/utils/sanityFetch";
// import { Movie } from "@/utils/types";
import React from "react";
import HomeSlider from "./HomeSlider";

const DistribucionHome = async () => {
  const fetchedMovies = await fetchSanity("pelicula");
  return (
    <div className="">
      <h3 className="text-2xl">Distribución</h3>
      <div>
        <p>Adquisición y Compra de Derechos de Películas</p>
        <p>
          Estrategias de Distribución y Venta en México, Estados Unidos y LATAM
        </p>
        <p>Distribución VOD (Video on Demand)</p>
        <p>Consultoría en Aplicación de Fondos</p>
        <p>Consultoría en Rutas de Festivales</p>
      </div>
      <div>
        <HomeSlider slideData={fetchedMovies} />
      </div>
    </div>
  );
};

export default DistribucionHome;
