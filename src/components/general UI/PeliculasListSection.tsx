"use client";
import React, { useState } from "react";
import PeliculasList from "./PeliculasList";

const PeliculasListSection = ({ lang }: { lang: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="mt-10 uppercase font-medium text-sm">
      {lang === "es" && (
        <div>
          <ul className="flex flex-wrap gap-7">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`${selectedCategory === null ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Todas
            </li>
            <li
              onClick={() => setSelectedCategory("peliculas")}
              className={`${selectedCategory === "peliculas" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Películas
            </li>
            <li
              onClick={() => setSelectedCategory("proximos estrenos")}
              className={`${selectedCategory === "proximos estrenos" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Próximos Estrenos
            </li>
            <li
              onClick={() => setSelectedCategory("en teatro")}
              className={`${selectedCategory === "en teatro" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Theatrical
            </li>
            <li
              onClick={() => setSelectedCategory("Contenido En Casa")}
              className={`${selectedCategory === "Contenido En Casa" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Contenido en casa
            </li>
            <li
              onClick={() => setSelectedCategory("en cartelera")}
              className={`${selectedCategory === "en cartelera" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              En Cartelera
            </li>
          </ul>
        </div>
      )}
      {lang === "en" && (
        <div>
          <ul className="flex flex-wrap gap-7">
            <li
              onClick={() => setSelectedCategory(null)}
              className={`${selectedCategory === null ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              ALL
            </li>
            <li
              onClick={() => setSelectedCategory("peliculas")}
              className={`${selectedCategory === "peliculas" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              our films
            </li>
            <li
              onClick={() => setSelectedCategory("proximos estrenos")}
              className={`${selectedCategory === "proximos estrenos" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Upcoming Films
            </li>
            <li
              onClick={() => setSelectedCategory("en teatro")}
              className={`${selectedCategory === "en teatro" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              Theatrical
            </li>
            <li
              onClick={() => setSelectedCategory("Contenido En Casa")}
              className={`${selectedCategory === "Contenido En Casa" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              VOD
            </li>
            <li
              onClick={() => setSelectedCategory("en cartelera")}
              className={`${selectedCategory === "en cartelera" ? "opacity-100" : "opacity-60"} border-b border-dotted cursor-pointer w-max border-verde`}
            >
              In Theaters Now
            </li>
          </ul>
        </div>
      )}
      <PeliculasList category={selectedCategory} />
    </div>
  );
};

export default PeliculasListSection;
