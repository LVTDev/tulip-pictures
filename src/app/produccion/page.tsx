// import Image from "next/image";
"use client";
import FooterForm from "@/components/general UI/FooterForm";
import React, { useState } from "react";

const Page = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="text-[#ffffffcb] bg-[url('/BackProduccion02.png')] bg-cover bg-no-repeat bg-bottom-left py-7 ">
      <div className="max-w-[90vw] mx-auto">
        <h1 className="text-3xl  md:text-6xl font-bold tracking-widest font-poppins">
          PRODUCCIÓN
        </h1>
        <div className="md:flex mt-6 gap-6">
          <div className="md:w-1/3">
            {" "}
            <p className="text-sm md:text-base">
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
          <div className="md:w-2/3">
            <p className="uppercase text-xl md:text-3xl font-bold font-poppins mb-6">
              servicios de producción
            </p>
            <ul className="uppercase w-max">
              <li className="mb-5 bg-[#30383a] text-[#ffffffcb] px-4 border py-1 rounded-lg">
                Preproducción audiovisual
              </li>
              <li className="mb-5 bg-[#30383a] text-[#ffffffcb] px-4 border py-1 rounded-lg">
                Producción audiovisual
              </li>
              <li className="mb-5 bg-[#30383a] text-[#ffffffcb] px-4 border py-1 rounded-lg">
                Postproducción audiovisual
              </li>
              <li className="mb-5 bg-[#30383a] text-[#ffffffcb] px-4 border py-1 rounded-lg">
                Renta de equipo cinematográfico
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
          onClick={() => setOpenForm((prev) => !prev)}
          className="bg-[#30383a] px-2 py-1 text-[#ffffffcb] w-max mx-auto uppercase rounded cursor-pointer"
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
