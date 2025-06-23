import React from "react";

const QuienesSomos = () => {
  return (
    <div className="flex gap-6 mt-8 flex-col md:flex-row">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <h2 className="text-center text-[36px] md:text-[48px] font-extrabold font-poppins">
          ¿Quiénes Somos?
        </h2>
        <div className="mt-6">
          <img
            className="h-40 md:h-70"
            src="/flor-tulip.png"
            alt="Logo Tulip"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-[20px] md:text-[24px] font-poppins font-bold mb-8">
          Desde 2018 en <span className="text-verde">Tulip Pictures</span>{" "}
          estamos comprometidos con la adquisición y distribución de películas
          de alta calidad tanto
          <span className="text-verde"> mexicanas como internacionales</span>.
        </h3>
        <p className="font-poppins text-xs md:text-sm">
          Además de la adquisición de películas, desarrollamos estrategias de
          distribución y venta a los mercados de México, Estados Unidos y
          América Latina para potencializar al máximo cada uno de nuestros
          títulos. <br />
          <br />
          En la distribución VOD ofrecemos diversos títulos de diferentes
          géneros en las plataformas digitales más importantes como Amazon Prime
          Video, iTunes, Claro Video, Google Play entre otras.
          <br />
          <br />
          Ofrecemos también soluciones a productores independientes en busca de
          servicios y experiencia en distribución, aplicación de fondos y ruta
          de festivales.
          <br /> <br />
          Somos un equipo experimentado, comprometido a crear estrategias y
          maximizar el potencial de los contenidos.
        </p>
      </div>
    </div>
  );
};

export default QuienesSomos;
