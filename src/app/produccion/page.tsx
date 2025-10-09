// import Image from "next/image";
"use client";
import FooterForm from "@/components/general UI/FooterForm";
import React, { useState } from "react";

const Page = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="text-white ">
      <div className=" bg-[url('/Produccion1.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw]">
        <div className="">
          <div className="md:max-w-[40%] md:ml-auto">
            <div className="mb-26 w-max ml-auto text-xs">
              <p>
                <span>EL PRÓFUGO</span>, 2020
              </p>
              <p>NATALIA META</p>
            </div>
            <h1 className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest font-poppins">
              PRODUCCIÓN
            </h1>{" "}
            <p className="pb-15 text-sm">
              En Tulip Pictures hacemos cine porque creemos en el poder de
              contar historias.
              <br />
              <br />
              Con experiencia en cine autoral y de alto perfil internacional,
              brindamos soluciones integrales para la producción audiovisual:
              desarrollo, preproducción, rodaje, postproducción, renta de equipo
              y producción ejecutiva.
              <br />
              <br />
              También entendemos la coproducción como un espacio de encuentro
              creativo y estratégico. Nos interesan proyectos con una visión
              única, proyección internacional y la capacidad de conectar con
              audiencias diversas.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[url('/Produccion2.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw] relative">
        <div className="md:max-w-2/3">
          <p className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest font-poppins uppercase">
            servicios <br /> de producción
          </p>
          <ul className=" md:w-max text-sm md:text-base">
            <li className=" text-white  mb-8">Preproducción audiovisual</li>
            <li className=" text-white  mb-8">Producción audiovisual</li>
            <li className=" text-white  mb-8">Postproducción audiovisual</li>
            <li className=" text-white  mb-8">
              Renta de equipo cinematográfico
            </li>
          </ul>
        </div>
        <div className="absolute top-[60px] right-[5vw] w-max ml-auto text-xs">
          <p>
            <span>MEMORIA</span>, 2021
          </p>
          <p className="uppercase">Apichatpong Weerasethakul</p>
        </div>
        <div
          onClick={() => setOpenForm((prev) => !prev)}
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
