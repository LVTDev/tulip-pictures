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
          <div className="md:w-1/2">
            <SubscribeForm lang={lang} />
        
          </div>
          <div className="mt-15 md:mt-0 md:w-1/2 ">
            <p className="mb-6 text-xl md:text-3xl font-bold border-b border-black pb-2">
                {isES ? "Los Ángeles - CDMX" : "Los Angeles - Mexico City"}
              
            </p>
            <div className="md:flex justify-between">
              <div className="md:w-1/2">
                <p className=" font-bold mb-3">
                  {isES ? "Distribución" : "Distribution"}
                </p>

                {/* <p className="text-[12px] lg:text-sm whitespace-pre-line">
                  {isES
                    ? "Director de Distribución \n y Adquisiciones"
                    : "Director of Distribution \n and Acquisitions"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">
                  Abraham González Ruiz
                </p>
                <p className="text-[12px] lg:text-sm mb-3 italic">
                  abraham@tulip-pictures.com
                </p> */}

                <p className="text-[12px] lg:text-sm whitespace-pre-line">
                  {isES
                    ? "Coordinador de Marketing \ny Comunicación"
                    : "Marketing and Communications \nCoordinator"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">
                  Javier Martinez Ramirez
                </p>
                <p className="text-[12px] lg:text-sm italic mb-3">javier@tulip-pictures.com</p>

                <p className="text-[12px] lg:text-sm whitespace-pre-line">
                  {isES
                    ? "Coordinadora de Programación"
                    : "Programming Coordinator"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Jessica Rito Aguilar</p>
                <p className="text-[12px] lg:text-sm italic mb-3">jessica@tulip-pictures.com</p>
             
             
             
                <p className="text-[12px] lg:text-sm whitespace-pre-line">
                  {isES
                    ? "Coordinadora de Programación"
                    : "Programming Coordinator"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Dalia Rosa Peña</p>
                <p className="text-[12px] lg:text-sm italic">dalia@tulip-pictures.com</p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 md:text-right">
                <p className=" font-bold mb-3">
                  {isES ? "Producción" : "Production"}
                </p>
                <p className="text-[12px] lg:text-sm whitespace-pre-line">
                  {isES
                    ? "Directora de Producción \n y Desarrollo"
                    : "Director of Production \n and Development"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Paloma Cabrera</p>
                <p className="text-[12px] lg:text-sm mb-3 italic">paloma@grupolvt.com</p>
                <p className="text-[12px] lg:text-sm whitespace-pre-line">
                  {isES
                    ? "Coordinadora \nde Producción"
                    : "Production \nCoordinator"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold ">Aranza Miranda</p>
                <p className="text-[12px] lg:text-sm italic mb-3">aranza@letswoohoo.com</p>

                <p className="text-[12px] lg:text-sm">
                  {isES
                    ? "Coordinadora \n de Postproducción"
                    : "Post-Production\n Coordinator"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Lourdes Huerta</p>
                <p className="text-[12px] lg:text-sm italic mb-3">lulu@grupolvt.com</p>
              
              
              
                <p className="text-[12px] lg:text-sm">
                  {isES
                    ? "Productora Ejecutiva"
                    : "Executive Producer"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Livi Herrera Pelayo</p>
                <p className="text-[12px] lg:text-sm italic mb-3">liviherrera@tulip-pictures.com</p>
               
               
                <p className="text-[12px] lg:text-sm">
                  {isES
                    ? "Productora Ejecutiva y Estrategia Internacional"
                    : "Executive Producer & International Strategy"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Mariana Monroy</p>
                <p className="text-[12px] lg:text-sm italic mb-3">mmonroy@tulip-pictures.com</p>
                <p className="text-[12px] lg:text-sm">
                  {isES
                    ? "Productora de Línea"
                    : "Line Producer"}
                </p>
                <p className="text-[12px] lg:text-sm italic font-bold">Brenda Medina</p>
                <p className="text-[12px] lg:text-sm italic ">bmedina@tulip-pictures.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
