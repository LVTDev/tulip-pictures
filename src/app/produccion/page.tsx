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
            <h1 className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest ">
              PRODUCCIÓN
            </h1>{" "}
            <div className="pb-15 text-sm text-justify">
              En{" "}
              <span className="font-bold">
                Tulip Pictures hacemos cine porque creemos en el poder de contar
                historias.
              </span>
              <br />
              <br />
              Con experiencia en cine autoral y de alto perfil internacional,
              brindamos soluciones integrales para la producción audiovisual:
              <p className="font-bold">
                desarrollo, preproducción, rodaje, postproducción, renta de
                equipo y producción ejecutiva.
              </p>
              <br />
              <br />
              También entendemos la coproducción como un espacio de encuentro
              creativo y estratégico. Nos interesan proyectos con una visión
              única, proyección internacional y la capacidad de conectar con
              audiencias diversas.
              <br />
              <br />
              En nuestro portafolio se encuentran proyectos de alto perfil como:
              The Intruder, Memoria, Blondi y Annette, El Jockey
              <br />
              <br />
              Si tienes un proyecto que desafíe, conmueva o inspire, queremos
              escucharlo.
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[url('/Produccion02NEW.jpg')] bg-cover bg-no-repeat py-15 bg-center px-[5vw] relative">
        <div className="md:max-w-2/3">
          <p className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest  uppercase">
            servicios
            {/* <br /> de producción */}
          </p>
          <p className="text-justify">
            Ofrecemos servicios especializados en la producción cinematográfica,
            desde la gestión de la idea y la consolidación del guion hasta la
            postproducción, en cualquier parte de México y el mundo.
            <br />
            <br />
            Nuestro trabajo combina precisión técnica y visión creativa para
            garantizar que cada proyecto alcance los más altos estándares de
            calidad, listos para recorrer festivales internacionales y
            estrenarse en salas.
            <br />
            <br />
            Acompañamos cada etapa del proceso: desarrollo, preproducción,
            rodaje y postproducción, con un equipo experimentado que coordina
            talento, logística y recursos con eficiencia y cuidado artístico.
            <br />
            <br />
            Nos apasiona hacer posible lo que imaginas. Convertir cada historia
            en una obra terminada, sólida y lista para proyectarse ante el
            público que merece verla.
          </p>
          {/* <ul className=" md:w-max text-sm md:text-base">
            <li className=" text-white  mb-8">Preproducción audiovisual</li>
            <li className=" text-white  mb-8">Producción audiovisual</li>
            <li className=" text-white  mb-8">Postproducción audiovisual</li>
            <li className=" text-white  mb-8">
              Renta de equipo cinematográfico
            </li>
          </ul> */}
        </div>
        <div className="absolute top-[20px] md:top-[60px] right-[5vw] w-max ml-auto text-xs">
          <p>
            <span>MEMORIA</span>, 2021
          </p>
          <p className="uppercase">Apichatpong Weerasethakul</p>
        </div>
        <div
          onClick={() => setOpenForm((prev) => !prev)}
          className="bg-[#30383a] px-2 py-1 mt-7 text-white w-max mx-auto uppercase rounded cursor-pointer"
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
