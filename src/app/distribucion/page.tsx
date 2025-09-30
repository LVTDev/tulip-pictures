import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">

      <div className='bg-[url("https://cdn.sanity.io/images/yj63f9tw/production/e1f43d89c399abf43c9a114b6da8a67821aa1b52-1248x702.png")] flex flex-col-reverse md:flex-col bg-left bg-cover bg-no-repeat   py-30 md:pr-20 text-white'>
        <p className="md:w-1/2 md:ml-auto px-6 pb-15">
          Desde 2018, Tulip Pictures se especializa en la adquisición y
          distribución de películas de alta calidad, incluyendo cine mexicano e
          internacional.
          <br />
          <br />
          Diseñamos estrategias de distribución y venta de películas para
          México, Estados Unidos y América Latina, maximizando el alcance de
          cada título. Somos expertos en distribución VOD, llevando películas a
          las plataformas digitales más importantes como Amazon Prime Video,
          iTunes, Claro Video y Google Play.
          <br />
          <br />
          Además, ofrecemos soluciones de distribución a productores
          independientes, brindando nuestra experiencia en ruta de festivales y
          aplicación a fondos de cine.
        </p>
        {/* <p className="w-full text-center  text-[140px] uppercase tracking-widest">
          Distribucion
        </p> */}
        <div className=" relative h-[95px]">
          <Image
            src={"/distribución.png"}
            fill
            className="object-contain"
            priority
            alt={"Tulip Logo"}
          />
        </div>
      </div>
      <div className="bg-[#4affff] h-[1px]" />

      <div className='bg-[url("https://cdn.sanity.io/images/yj63f9tw/production/bab15f969ff54881132c0a3dcd58d92f32679ab2-1248x702.png")] bg-cover bg-no-repeat   py-40 md:pr-20 text-white'>
        <div className="md:w-2/3 md:pl-30 px-5 ml-auto">
          <p className="uppercase text-4xl md:text-7xl font-bold opacity-50 font-poppins">
            servicios <br />
            de Distribución
          </p>
          <ul className="uppercase">
            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Adquisición y compra de derechos de películas
            </li>
            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Estrategias de distribución de cine y venta en México, Estados
              Unidos y LATAM
            </li>
            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Consultoría en aplicación de fondos cinematográficos
            </li>

            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Consultoría en rutas de festivales de cine
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
