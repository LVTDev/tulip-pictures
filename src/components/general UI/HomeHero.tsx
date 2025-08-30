import React from "react";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
const HomeHero = () => {
  return (
    <div className="text-white relative pb-10 w-full bg-no-repeat bg-cover bg-[url('/Back01.jpg')]">
      <div className="flex pt-20 px-10 gap-10">
        <div className="w-1/2">
          <Image
            src={
              "https://cdn.sanity.io/images/yj63f9tw/production/6140a65e162d65e994bb489d9c14a531b54a3c5d-610x244.png"
            }
            width={610}
            height={244}
            alt={"Tulip Logo"}
          />
        </div>
        <div className="w-1/2">
          <p className="text-5xl">
            EL CINE <br /> ESTÁ CAMBIANDO:
          </p>
          <p>
            Cambian las formas de hacerlo, de verlo y de compartilo. En Tulip
            Pictures respondemos a esa transformacion con una visión amplia y
            contemporánea.
          </p>
          <p>
            Aquí producimos y distribuimos cine con identidad. impacto y alcance
            internacional. Desde 2018 hemos acompañado películas mexicanas e
            internacionales en salas, festivales y plataformas, diseñando
            estrategias a la medida de cada historia.
          </p>
        </div>
      </div>
      <div className="w-screen relative h-[200px]">
        <Image
          src={"/quienesomos.png"}
          fill
          className="object-contain"
          priority
          alt={"Tulip Logo"}
        />
      </div>
      <div className="flex gap-10 px-10">
        <div className="w-1/2">
          <p>
            Como casa productora y distribuidora, creemos en el poder de las
            historias locales para generar conversación global, siempre con un
            enfoque sensible, creativo y estratégico.
            <br />
            <br />
            Somos un puente entre creadores, industria y audiencias.
          </p>
          <div className="flex gap-10s">
            <p>SOMOS</p>
            <Image
              src={
                "https://cdn.sanity.io/images/yj63f9tw/production/6140a65e162d65e994bb489d9c14a531b54a3c5d-610x244.png"
              }
              width={305}
              height={122}
              alt={"Tulip Logo"}
            />
          </div>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default HomeHero;
