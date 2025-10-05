
import React from "react";

const page = () => {
  return (
    <div className="">

      <div className='bg-[url("https://cdn.sanity.io/images/yj63f9tw/production/53cb2828c1a8ca62f0522dd5e1604f013381acb9-1920x1272.jpg")] bg-center bg-cover bg-no-repeat   py-30 md:pr-20 text-white'>
        <div className="md:w-1/2 md:ml-auto px-6 pb-15">
          <h3 className="uppercase text-4xl md:text-7xl font-bold opacity-50 font-poppins mb-5">
            PRODUCCIÓN
          </h3>
          <p className="text-sm md:text-base">
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

        <div className='bg-[url("https://cdn.sanity.io/images/yj63f9tw/production/a27b0ef7eeba275533ec10c0105fbf9a5d4d82ec-1920x1122.jpg")] bg-right bg-cover bg-no-repeat   py-40 md:pr-20 text-white'>
        <div className="md:w-2/3 md:pl-30 px-6">
          <p className="uppercase text-4xl md:text-7xl mb-5 font-bold opacity-50 font-poppins">
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
