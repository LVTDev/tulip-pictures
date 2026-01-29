"use client";
import FooterForm from "@/components/general UI/FooterForm";
import { checkES } from "@/utils/pageLang";
import React, { useState } from "react";

const DistributionServices = ({ lang }: { lang: string }) => {
  const [openForm, setOpenForm] = useState(false);

  const isES = checkES(lang);

  return (
    <div>
      <div className=" bg-[url('/Distribucion01.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw]">
        <div className="">
          <div className="md:max-w-[40%] md:ml-auto">
            <div className="mb-26 w-max ml-auto text-xs">
              <p>
                <span>{isES ? "Sorda" : "Deaf"}</span>, 2025
              </p>
              <p>Eva Libertad</p>
            </div>
            <h1 className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest">
              {isES ? "DISTRIBUCIÓN" : "DISTRIBUTION"}
            </h1>{" "}
            {isES ? (
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
            ) : (
              <p className="pb-15 text-sm text-justify">
                <span className="font-bold">
                  Since 2018, Tulip Pictures has specialized in the acquisition
                  and distribution
                </span>{" "}
                of high-quality films, including both Mexican and international
                titles.
                <br />
                <br />
                We design{" "}
                <span className="font-bold">
                  distribution and sales strategies for films across Mexico, the
                  United States, and Latin America
                </span>
                , maximizing each film’s visibility and reach. We are experts in
                VOD distribution,placing titles on major digital platforms such
                as Amazon Prime Video, iTunes, Claro Video, and Google Play.
                <br />
                <br />
                In addition, we offer{" "}
                <span className="font-bold">
                  distribution solutions for independent producers, providing
                  our expertise in festival pathways and film fund applications.
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className=" bg-[url('/Distribucion02.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw] relative">
        {isES ? (
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
        ) : (
          <div className="md:max-w-2/3">
            <p className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest uppercase">
              Distribution
              <br /> Services
            </p>
            <ul className=" md:w-max text-sm md:text-base">
              <li className=" text-white  mb-8">
                Film Rights Acquisition and Purchase
              </li>
              <li className=" text-white  mb-8">
                Distribution and Sales Strategies in Mexico,
                <br />
                the U.S., and Latin America
              </li>
              <li className=" text-white  mb-8">Film Funding Consulting</li>
              <li className=" text-white  mb-8">
                Film Festival Route Consulting
              </li>
            </ul>
          </div>
        )}
        <div className="absolute top-[20px] md:top-[60px] right-[5vw] w-max ml-auto text-xs">
          <p>
            <span>Hachiko</span>, 2024
          </p>
          <p className="uppercase">Ang Xu</p>
        </div>
        <div
          onClick={() => setOpenForm((prev) => !prev)}
          className="bg-[#30383a] px-2 py-1 text-white w-max mx-auto uppercase rounded cursor-pointer"
        >
            {isES ? "Llena el formulario" : "Fill the Form"}
          
        </div>
        <div className={`${openForm ? "block" : "hidden"}`}>
          <FooterForm renta={false} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default DistributionServices;
