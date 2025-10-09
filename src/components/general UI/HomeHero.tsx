import React from "react";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import Link from "next/link";
const HomeHero = () => {
  return (
    <div className="text-black relative pb-10  bg-no-repeat bg-cover bg-left bg-[url('/quienesSomosBack2.png')]">
      <div className=" w-[90vw] mx-auto">
        <h3 className="uppercase text-4xl md:text-7xl font-bold opacity-90 pt-3 md:pt-10">
          QUIÉNES SOMOS
        </h3>
        <div className="md:flex items-center pt-6 md:pt-10 gap-10 ">
          <div className="md:w-1/2">
            <p className="mb-7 pr-4 text-justify">
              <span className="font-bold">El cine esta cambiando.</span> Cambian
              las formas de hacerlo, de verlo y de compartilo. En Tulip Pictures
              respondemos a esa transformación con una visión amplia y
              contemporánea.
              <br />
              <br />
              Aquí producimos y distribuimos cine con identidad. impacto y
              alcance internacional. Desde 2018 hemos acompañado películas
              mexicanas e internacionales en salas, festivales y plataformas,
              diseñando estrategias a la medida de cada historia.
              <br />
              <br />
              Como casa productora y distribuidora, creemos en el poder de las
              historias locales para generar conversación global, siempre con un
              enfoque sensible, creativo y estratégico.
              <br />
              <br />
              <span className="font-bold">
                Somos un puente entre creadores, industria y audiencias. SOMOS
                TULIP.
              </span>
            </p>
          </div>
          <div className="md:w-1/2 px-14">
            <Image
              src={
                "https://cdn.sanity.io/images/yj63f9tw/production/556dbabd47db6a8f21b495c56c859a7002342ff1-1920x1080.gif"
              }
              width={1920 / 3}
              height={1080 / 3}
              alt={"Tulip Logo"}
            />
          </div>
        </div>
      </div>

      <div className="w-[90vw] mx-auto mt-20">
        <div className="md:flex gap-10">
          <div className="md:w-2/5">
            <SubscribeForm />
            <div className="flex flex-col gap-2 mt-10 uppercase">
              <Link className=" font-bold" href={"/avisoDePrivacidad"}>
                AVISO DE PRIVACIDAD
              </Link>
              <Link className="font-bold" href={"/terminos"}>
                TÉRMINOS Y CONDICIONES
              </Link>
              <p className=" text-xs opacity-70">&copy; 2025 TULIP PICTURES</p>
            </div>
          </div>
          <div className="mt-15 md:mt-0 md:w-3/5 ">
            <p className="mb-4 uppercase text-center text-xl md:text-3xl font-bold">
              Los Ángeles - CDMX
            </p>
            <div className="md:flex justify-between">
              <div className="md:w-1/2">
                <p className="uppercase font-bold mb-5">Distribución</p>

                <p className="text-sm mb-1">
                  Director de Distribución y Adquisiciones
                </p>
                <p className="text-sm mb-1 italic font-bold">
                  Abraham González Ruiz
                </p>
                <p className="text-sm mb-6 italic">
                  abraham@tulip-pictures.com
                </p>

                <p className="text-sm mb-1">
                  Gerente de Marketing y Comunicación
                </p>
                <p className="text-sm italic font-bold">
                  Javier Martinez Ramirez
                </p>
                <p className="text-sm italic">javier@tulip-pictures.com</p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 md:text-right">
                <p className="uppercase font-bold mb-5">Producción</p>
                <p className="text-sm mb-1">
                  Directora de Producción y Desarrollo
                </p>
                <p className="text-sm mb-1 italic font-bold">Paloma Cabrera</p>
                <p className="text-sm mb-6 italic">paloma@grupolvt.com</p>
                <p className="text-sm mb-1">Coordinadora de Producción</p>
                <p className="text-sm italic font-bold">Aranza Miranda</p>
                <p className="text-sm italic">aranza@letswoohoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
