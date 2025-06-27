import InfoSlider from "@/components/general UI/InfoSlider";
import React from "react";

const page = () => {
  return (
    <div className="font-poppins">
      <div className="bg-[url(/HeaderNosotrosTulip.jpeg)] h-[380px] bg-cover flex items-center">
        {/* <img src="" alt="" /> */}
        <h1 className="transparent-text text-6xl font-bold pl-6">
          ¿Quiénes Somos
        </h1>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="md:flex py-6">
          <div className="border-b pb-8 md:w-1/2 px-4">
            <h3 className="text-2xl md:text-4xl font-bold mb-8">
              Desde 2018 en <span className="text-verde">Tulip Pictures</span>{" "}
              estamos comprometidos con la adquisición y distribución de
              películas de alta calidad tanto mexicanas como internacionales.
            </h3>
            <p className="text-[#d1d1d1] md:text-sm text-[11px]">
              Además de la adquisición de películas, desarrollamos estrategias
              de distribución y venta a los mercados de México, Estados Unidos y
              América Latina para potencializar al máximo cada uno de nuestros
              títulos.
              <br />
              <br />
              En nuestra trayectoria, hemos estrenado en las salas de cine
              mexicanas títulos internacionalmente reconocidos, incluyendo: Dino
              King: Viaje a la montaña de fuego, Relic: Herencia Maldita, Buñuel
              en el Laberinto de las Tortugas y recientemente; Benedetta, y
              Corsage.
              <br />
              <br />
              En la distribución VOD ofrecemos diversos títulos de diferentes
              géneros en las plataformas digitales más importantes como Amazon
              Prime Video, iTunes, Claro Video, Google Play entre otras.
              <br />
              <br />
              Ofrecemos también soluciones a productores independientes en busca
              de servicios y experiencia en distribución, aplicación de fondos y
              ruta de festivales.
              <br />
              <br />
              Somos un equipo experimentado, comprometido a crear estrategias y
              maximizar el potencial de los contenidos.
            </p>
          </div>
          <div className="md:w-1/2 pt-5 md:pt-0">
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">01</span>Adquisición de
              Contenidos
            </p>
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">02</span>Estrategias de
              Distribución
            </p>
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">03</span>Análisis desde la
              Producción
            </p>
            <p className="font-bold text-3xl mb-6">
              <span className="transparent-text mr-3">04</span>Marketing
              Cinematográfico
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <InfoSlider lang={"es"} />
        </div>
      </div>
    </div>
  );
};

export default page;
