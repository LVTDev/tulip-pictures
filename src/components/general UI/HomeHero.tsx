import React from "react";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import Link from "next/link";
const HomeHero = () => {
  return (
    <div className="text-[#a8af9f] relative pb-10  bg-no-repeat bg-cover bg-[url('/BackHome.jpg')] w-screen">
      <div className="w-[90vw] mx-auto">
        <h3 className="uppercase text-7xl font-bold opacity-50 font-poppins pt-10">
          QUIENES SOMOS
        </h3>
        <div className="flex items-center pt-20 gap-10">
          <div className="w-1/2">
            <p className="text-5xl mb-3">EL CINE ESTÁ CAMBIANDO</p>
            <p className="mb-7">
              Cambian las formas de hacerlo, de verlo y de compartilo. En Tulip
              Pictures respondemos a esa transformacion con una visión amplia y
              contemporánea.
            </p>
            <p>
              Aquí producimos y distribuimos cine con identidad. impacto y
              alcance internacional. Desde 2018 hemos acompañado películas
              mexicanas e internacionales en salas, festivales y plataformas,
              diseñando estrategias a la medida de cada historia.
            </p>
            <p>
              Como casa productora y distribuidora, creemos en el poder de las
              historias locales para generar conversación global, siempre con un
              enfoque sensible, creativo y estratégico.
              <br />
              <br />
              <span className="font-bold">
                Somos un puente entre creadores, industria y audiencias.
              </span>
            </p>
          </div>
          <div className="w-1/2 px-14">
            <Image
              src={
                "https://cdn.sanity.io/images/yj63f9tw/production/6140a65e162d65e994bb489d9c14a531b54a3c5d-610x244.png"
              }
              width={610}
              height={244}
              alt={"Tulip Logo"}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#4affff] h-[1px] my-10" />
      <div className="w-[90vw] mx-auto">
        <div className="flex gap-10 px-10">
          <div>
            <SubscribeForm />
            <div className="flex flex-col gap-2 mt-10 uppercase">
              <Link
                className="text-white font-bold"
                href={"/avisoDePrivacidad"}
              >
                Notice of Privacy
              </Link>
              <Link className="text-white font-bold" href={"/terminos"}>
                Terms and Conditions
              </Link>
              <p className="text-white text-xs opacity-70">
                &copy; 2025 TULIP PICTURES
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <p className="w-[4/5] mx-auto"></p>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center text-7xl">
              <p>SOMOS</p>
              <Image
                src={
                  "https://cdn.sanity.io/images/yj63f9tw/production/6140a65e162d65e994bb489d9c14a531b54a3c5d-610x244.png"
                }
                width={157}
                height={61}
                alt={"Tulip Logo"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
