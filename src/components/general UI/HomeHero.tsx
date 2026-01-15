import React from "react";
import SubscribeForm from "./SubscribeForm";
import Link from "next/link";
import { checkES } from "@/utils/pageLang";
const HomeHero = ({ lang }: { lang: string }) => {
  const isES = checkES(lang);
  return (
    <div className="text-black relative pb-10  bg-no-repeat bg-cover bg-left bg-[url('/quienesSomosBack2.png')]">
      <div className=" w-[90vw] mx-auto">
        <h3 className="uppercase text-4xl md:text-7xl font-bold opacity-90 pt-3 md:pt-10">
          {isES ? "QUIÉNES SOMOS" : "WHO WE ARE"}
        </h3>
        <div className="md:flex items-center pt-6 md:pt-10 ">
          <div className="md:w-1/2">
            {isES ? (
              <p className="mb-7 pr-4 text-justify">
                <span className="font-bold mr-1">El cine está cambiando.</span>
                Cambian las formas de hacerlo, de verlo y de compartirlo. En
                Tulip Pictures respondemos a esa transformación con una visión
                amplia y contemporánea.
                <br />
                <br />
                Aquí producimos y distribuimos cine con identidad, impacto y
                alcance internacional. Desde 2018 hemos acompañado películas
                mexicanas e internacionales en salas, festivales y plataformas,
                diseñando estrategias a la medida de cada historia.
                <br />
                <br />
                Como casa productora y distribuidora, creemos en el poder de las
                historias locales para generar conversación global, siempre con
                un enfoque sensible, creativo y estratégico.
                <br />
                <br />
                <span className="font-bold">
                  Somos un puente entre creadores, industria y audiencias.
                </span>
              </p>
            ) : (
              <p className="mb-7 pr-4 text-justify">
                <span className="font-bold mr-1">
                  Cinema is constantly evolving.{" "}
                </span>
                How it’s made, how it’s seen, how it’s shared. At Tulip Pictures
                we respond to this transformation with a broad and contemporary
                vision.
                <br />
                <br />
                We produce and distribute films with identity, impact, and
                international reach. Since 2018 we’ve worked with both Mexican
                and international films across theaters, festivals, and
                streaming platforms, crafting tailored strategies for each
                story.
                <br />
                <br />
                As a production and distribution company we believe in the power
                of storytelling to spark global conversations, always with a
                sensitive, creative, and strategic approach.
                <br />
                <br />
                <span className="font-bold">
                  We are a bridge between creators, the industry, and audiences.
                </span>
              </p>
            )}
          </div>
          <div className="md:w-1/2 ">
            <img
              src={
                "https://cdn.sanity.io/images/yj63f9tw/production/4967549d1bf37f4ff2155b25bb934ee9ec4df7fd-1920x1080.gif"
              }
              width={1920}
              height={1080}
              alt={"Tulip Logo"}
            />
          </div>
        </div>
      </div>

      <div className="w-[90vw] mx-auto mt-20">
        <div className="md:flex gap-10">
          <div className="md:w-2/5">
            <SubscribeForm lang={lang} />
            <div className="flex flex-col gap-2 mt-10 uppercase">
              <Link className=" font-bold" href={"/avisoDePrivacidad"}>
                {isES ? "AVISO DE PRIVACIDAD" : "PRIVACY POLICY"}
              </Link>
              <Link className="font-bold" href={"/terminos"}>
                {isES ? "TÉRMINOS Y CONDICIONES" : "TERMS AND CONDITIONS"}
              </Link>
              <p className=" text-xs opacity-70">&copy; 2025 TULIP PICTURES</p>
            </div>
          </div>
          <div className="mt-15 md:mt-0 md:w-3/5 ">
            <p className="mb-4 uppercase text-center text-xl md:text-3xl font-bold">
                {isES ? "Los Ángeles - CDMX" : "Los Angeles - Mexico City"}
              
            </p>
            <div className="md:flex justify-between">
              <div className="md:w-1/2">
                <p className="uppercase font-bold mb-5">
                  {isES ? "Distribución" : "Distribution"}
                </p>

                <p className="text-sm mb-1">
                  {isES
                    ? "Director de Distribución y Adquisiciones"
                    : "Director of Distribution and Acquisitions"}
                </p>
                <p className="text-sm mb-1 italic font-bold">
                  Abraham González Ruiz
                </p>
                <p className="text-sm mb-6 italic">
                  abraham@tulip-pictures.com
                </p>

                <p className="text-sm mb-1">
                  {isES
                    ? "Coordinador de Marketing y Comunicación"
                    : "Marketing and Communications Coordinator"}
                </p>
                <p className="text-sm italic font-bold">
                  Javier Martinez Ramirez
                </p>
                <p className="text-sm italic mb-6">javier@tulip-pictures.com</p>

                <p className="text-sm mb-1">
                  {isES
                    ? "Coordinadora de Programación"
                    : "Programming Coordinator"}
                </p>
                <p className="text-sm italic font-bold">Jessica Rito Aguilar</p>
                <p className="text-sm italic">jessica@tulip-pictures.com</p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 md:text-right">
                <p className="uppercase font-bold mb-5">
                  {isES ? "Producción" : "Production"}
                </p>
                <p className="text-sm mb-1">
                  {isES
                    ? "Directora de Producción y Desarrollo"
                    : "Director of Production and Development"}
                </p>
                <p className="text-sm mb-1 italic font-bold">Paloma Cabrera</p>
                <p className="text-sm mb-6 italic">paloma@grupolvt.com</p>
                <p className="text-sm mb-1">
                  {isES
                    ? "Coordinadora de Producción"
                    : "Production Coordinator"}
                </p>
                <p className="text-sm italic font-bold">Aranza Miranda</p>
                <p className="text-sm italic mb-6">aranza@letswoohoo.com</p>

                <p className="text-sm mb-1">
                  {isES
                    ? "Coordinadora de Postproducción"
                    : "Post-Production Coordinator"}
                </p>
                <p className="text-sm italic font-bold">Lourdes Huerta</p>
                <p className="text-sm italic">lulu@grupolvt.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
