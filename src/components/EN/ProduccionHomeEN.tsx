import React from "react";
import HomeSlider from "../general UI/HomeSlider";
import { fetchSanity } from "@/utils/sanityFetch";

const ProduccionHomeEN = async () => {
  const fetchedMovies = await fetchSanity("pelicula");

  return (
    <div className="mt-10 font-poppins">
      <h3 className="text-4xl font-bold mb-5">Production</h3>
      <div className="mb-5">
        <p className="text-sm md:text-base">
          <span className="text-verde font-medium mr-2">
            Audiovisual pre-production
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />

          <span className="mr-2">Audiovisual production</span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="text-verde font-medium mr-2">
            Audiovisual post-production
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="mr-2">Cinematic equipment rental</span>
        </p>
      </div>
      <div>
        <HomeSlider category="production" slideData={fetchedMovies} />
      </div>
    </div>
  );
};

export default ProduccionHomeEN;
