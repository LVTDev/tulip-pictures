"use client";
import Image from "next/image";
import Link from "next/link";
// import { useEffect } from "react";
import React from "react";

const AnnouncementBar = () => {
  return (
    <div className={`bg-black py-8 md:py-5 uppercase text-white flex relative `}>
      <div className="mx-auto text-center">
        <p>
          La Vida Es{" "}
          <span className="text-xs block md:inline md:text-sm opacity-75 md:ml-2">
            En Cines Pronto
          </span>
        </p>
        {/* <p>
          bird{" "}
          <span className="text-xs md:text-sm block md:inline opacity-75 md:ml-2">
            ya en cines, consulta cartelera
          </span>
        </p> */}
      </div>
      <Link href="/" className="absolute right-3 top-1/2 -translate-y-1/2 ml-auto mr-4">
        <Image
          src={"/TULIP_Isotipo.png"}
          height={385/9}
          width={364/9}
          className="object-contain"
          priority
          alt={"Tulip Logo"}
        />
      </Link>
    </div>
  );
};

export default AnnouncementBar;
