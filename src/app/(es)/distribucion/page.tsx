// import Image from "next/image";
"use client";
import FooterForm from "@/components/general UI/FooterForm";
import React, { useState } from "react";

const Page = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="text-white ">
      <div className=" bg-[url('/Distribucion01.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw]">
        <div className="">
          <div className="md:max-w-[40%] md:ml-auto">
            <div className="mb-26 w-max ml-auto text-xs">
              <p>
                <span>SORDA</span>, 2025
              </p>
              <p>EVA LIBRTAD</p>
            </div>
            <h1 className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest">
              DISTRIBUCIÓN
            </h1>{" "}
            <p className="pb-15 text-sm text-justify">
              <span className="font-bold">
                Desde 2018, Tulip Pictures se especializa en la adquisición y
                distribución de películas
              </span>{" "}
              de alta calidad, incluyendo cine mexicano e internacional.
              <br />
              <br />
              Diseñamos{" "}
              <span className="font-bold">
                estrategias de distribución y venta de películas para México,
                Estados Unidos y América Latina
              </span>
              , maximizando el alcance de cada título. Somos expertos en
              distribución VOD (Video on Demand), llevando películas a las
              plataformas digitales más importantes como Amazon Prime Video,
              iTunes, Claro Video y Google Play.
              <br />
              <br />
              Además, ofrecemos soluciones de{" "}
              <span className="font-bold">
                distribución a productores independientes, brindando nuestra
                experiencia en rutas de festivales y aplicación a fondos de
                cine.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[url('/Distribucion02.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw] relative">
        <div className="md:max-w-2/3">
          <p className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest uppercase">
            servicios <br /> de Distribución
          </p>
          <ul className=" md:w-max text-sm md:text-base">
            <li className=" text-white  mb-8">
              Adquisición y compra de derechos de películas
            </li>
            <li className=" text-white  mb-8">
              Estrategias de distribución y venta en México,
              <br />
              EE. UU. y LATAM
            </li>
            <li className=" text-white  mb-8">
              Consultoría en aplicación de fondos cinematográficos
            </li>
            <li className=" text-white  mb-8">
              Consultoría en rutas de festivales de cine
            </li>
          </ul>
        </div>
        <div className="absolute top-[20px] md:top-[60px] right-[5vw] w-max ml-auto text-xs">
          <p>
            <span>HACHIKO</span>, 2024
          </p>
          <p className="uppercase">ANG XU</p>
        </div>
        <div
          onClick={() => setOpenForm((prev) => !prev)}
          className="bg-[#30383a] px-2 py-1 text-white w-max mx-auto uppercase rounded cursor-pointer"
        >
          Llena el formulario
        </div>
        <div className={`${openForm ? "block" : "hidden"}`}>
          <FooterForm renta={false} lang="es" />
        </div>
      </div>
    </div>
  );
};

export default Page;
