import AnnouncementBar from "@/components/general UI/AnnouncementBar";
import React from "react";

const page = () => {
  return (
    <div className="">
      <AnnouncementBar />

      <div className='bg-[url("https://cdn.sanity.io/images/yj63f9tw/production/959a984996e64259c0115a4d9fad72875c0215b1-1630x1080.jpg")] bg-cover bg-no-repeat   py-40 pr-20 text-white'>
        <div className="w-1/2 ml-auto pb-15">
          <h3 className="uppercase text-7xl font-bold opacity-50 font-poppins mb-5">PRODUCCIÓN</h3>
          <p>
            En Tulip Pictures hacemos cine porque creemos en el poder de contar
            historias.
            <br />
            <br />
            Con experiencia en cine autoral y de alto perfil internacional,
            brindamos soluciones integrales para la producción audiovisual:
            desarrollo, preproducción, rodaje, postproducción, renta de equipo y
            producción ejecutiva.
            <br />
            <br />
            También entendemos la coproducción como un espacio de encuentro
            creativo y estratégico. Nos interesan proyectos con una visión
            única, proyección internacional y la capacidad de conectar con
            audiencias diversas.
          </p>
        </div>

   

      </div>
      <div className='bg-[url("https://cdn.sanity.io/images/yj63f9tw/production/df4374f0c57511226f8af0da92164b5d9513ff2c-1902x1080.jpg")] bg-cover bg-no-repeat   py-40 pr-20 text-white'>
        <div className="w-2/3 pl-30">
          <p className="uppercase text-7xl mb-5 font-bold opacity-50 font-poppins">
            servicios <br />
            de Producción
          </p>
          <ul className="uppercase">
            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Preproducción audiovisual
            </li>
            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Producción audiovisual
            </li>
            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Postproducción audiovisual
            </li>

            <li className="mb-5 border border-[#ffffff60] px-4 py-1 rounded-lg">
              Renta de equipo cinematográfico
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
