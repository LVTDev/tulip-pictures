import { fetchSanity } from "@/utils/sanityFetch";
// import { Movie } from "@/utils/types";
import React from "react";
import HomeSlider from "../general UI/HomeSlider";

const DistribucionHomeEN = async () => {
  const fetchedMovies = await fetchSanity("pelicula");
  return (
    <div className="mt-10 ">
      <h3 className="text-4xl font-bold mb-5">Distribution</h3>
      <div className="mb-5">
        <p className="text-sm md:text-base">
          <span className="text-verde font-medium mr-2">
            Acquisition and Purchase of Film Rights
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="mr-2">
            Distribution and Sales Strategies in Mexico, the United States, and Latin America
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="text-verde font-medium mr-2">
             VOD (Video on Demand) Distribution
          </span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="mr-2">Funding Application Consulting</span>
          <span className="w-[8px] h-[8px] rounded-full bg-white inline-block mr-2 my-auto" />
          <span className="text-verde font-medium mr-2">
            Festival Route Consulting
          </span>
        </p>
      </div>
      <div>
        <HomeSlider category="distribution" slideData={fetchedMovies} />
      </div>
    </div>
  );
};

export default DistribucionHomeEN;