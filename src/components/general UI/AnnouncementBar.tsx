"use client";
// import { useEffect } from "react";
import React from "react";

const AnnouncementBar = () => {



  return (
    <div className={`bg-[#30383a] uppercase text-white py-3 flex`}>
      <div className="mx-auto">
        <p>
          el juicio de un perro <span className="text-xs block md:inline md:text-sm opacity-75 md:ml-2">7 de septiembre, consulta cartelera</span>
        </p>
        <p>bird  <span className="text-xs md:text-sm block md:inline opacity-75 md:ml-2">ya en cines, consulta cartelera</span></p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
