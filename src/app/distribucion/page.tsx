// import Image from "next/image";
"use client";
import FooterForm from "@/components/general UI/FooterForm";
import React, { useState } from "react";

const Page = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="text-[#30383a] bg-[url('/BackDistribucion02.png')] bg-cover bg-no-repeat bg-left py-7 ">
      <div className="max-w-[90vw] mx-auto">
        <h1 className="text-6xl font-bold tracking-widest font-poppins">
          DISTRIBUCIÓN
        </h1>
        <div className="flex mt-6 gap-6">
          <div className="w-1/3">
            {" "}
            <p className="pb-15">
              Desde 2018, Tulip Pictures se especializa en la adquisición y
              distribución de películas de alta calidad, incluyendo cine
              mexicano e internacional.
              <br />
              <br />
              Diseñamos estrategias de distribución y venta de películas para
              México, Estados Unidos y América Latina, maximizando el alcance de
              cada título. Somos expertos en distribución VOD, llevando
              películas a las plataformas digitales más importantes como Amazon
              Prime Video, iTunes, Claro Video y Google Play.
              <br />
              <br />
              Además, ofrecemos soluciones de distribución a productores
              independientes, brindando nuestra experiencia en ruta de
              festivales y aplicación a fondos de cine.
            </p>
          </div>
          <div className="w-2/3">
            <p className="uppercase text-3xl md:text-5xl font-bold font-poppins mb-6">
              servicios de Distribución
            </p>
            <ul className="uppercase w-max">
              <li className="mb-5 bg-[#30383a] text-white px-4 py-1 rounded-lg">
                Adquisición y compra de derechos de películas
              </li>
              <li className="mb-5 bg-[#30383a] text-white px-4 py-1 rounded-lg">
                Estrategias de distribución de cine y venta <br /> en México,
                Estados Unidos y LATAM
              </li>
              <li className="mb-5 bg-[#30383a] text-white px-4 py-1 rounded-lg">
                Consultoría en aplicación de fondos
                <br /> cinematográficos
              </li>
              <li className="mb-5 bg-[#30383a] text-white px-4 py-1 rounded-lg">
                Consultoría en rutas de festivales de cine
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center max-w-2/3 w-max mx-auto my-5 text-2xl">
          Si tienes un proyecto que{" "}
          <span className="font-bold">
            desafie, conmueva o inspire. ¡Querémos escucharlo!
          </span>
        </p>
        <div
          onClick={() => setOpenForm(prev => !prev)}
          className="bg-[#30383a] px-2 py-1 text-white w-max mx-auto uppercase rounded cursor-pointer"
        >
          Llena el formulario
        </div>
        <div className={`${openForm ? "block" : "hidden"}`}>
          <FooterForm lang="es" />
        </div>
      </div>
    </div>
  );
};

export default Page;
