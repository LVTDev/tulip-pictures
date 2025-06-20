import React from "react";
import HomeSlider from "./HomeSlider";
import { fetchSanity } from "@/utils/sanityFetch";

const ProduccionHome = async () => {
  const fetchedMovies = await fetchSanity("pelicula");

  return (
    <div>
      <h3 className="text-2xl">Producción</h3>
      <div>
        <p>Preproducción audiovisual</p>
        <p>Producción audiovisual</p>
        <p>Postproducción audiovisual</p>
        <p>Renta de equipo cinematográfico</p>
      </div>
      <div>
        <HomeSlider slideData={fetchedMovies} />
      </div>
    </div>
  );
};

export default ProduccionHome;
