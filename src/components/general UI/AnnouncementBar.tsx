"use client";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";
import React from "react";

const AnnouncementBar = () => {
  return (
    <div className={`bg-[#30383a] uppercase text-white py-3 flex`}>
      <div className="mx-auto">
        <p>
          el juicio de un perro{" "}
          <span className="text-xs block md:inline md:text-sm opacity-75 md:ml-2">
            7 de septiembre, consulta cartelera
          </span>
        </p>
        <p>
          bird{" "}
          <span className="text-xs md:text-sm block md:inline opacity-75 md:ml-2">
            ya en cines, consulta cartelera
          </span>
        </p>
      </div>
      <Link href="/" className=" relative h-[55px] w-[40px] ml-auto mr-4">
        <Image
          src={"/TULIP_Isotipo.png"}
          fill
          className="object-contain"
          priority
          alt={"Tulip Logo"}
        />
      </Link>
    </div>
  );
};

export default AnnouncementBar;
