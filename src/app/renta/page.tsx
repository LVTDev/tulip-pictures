"use client";
import FooterForm from "@/components/general UI/FooterForm";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div className='bg-[url("/rentaBG.jpg")] bg-cover bg-no-repeat  w-full '>
        <div className="w-[80%] md:w-[60%] mx-auto py-8">
          <h1 className="text-4xl md:text-7xl text-white mb-8 tracking-widest font-bold w-max">
            RENTA DE <br />
            EQUIPO
          </h1>
          <a
            className="bg-white px-3 py-1 rounded-lg text-xl font-bold text-black"
            href="https://cdn.sanity.io/files/yj63f9tw/production/11f95e02f3b1835279800e44d49bbed34e8d1853.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Catálogo de Equipo
          </a>
          <div className="mt-8">

          <FooterForm lang="es" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
