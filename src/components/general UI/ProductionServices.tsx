"use client";
import FooterForm from "@/components/general UI/FooterForm";
import { checkES } from "@/utils/pageLang";
import React, { useState } from "react";

const ProductionServices = ({ lang }: { lang: string }) => {
  const [openForm, setOpenForm] = useState(false);
  const isES = checkES(lang);

  return (
    <div>
      <div className=" bg-[url('/Produccion1.jpg')] bg-cover bg-no-repeat py-15 bg-center md:bg-left px-[5vw]">
        <div className="">
          <div className="md:max-w-[40%] md:ml-auto">
            <div className="mb-26 w-max ml-auto text-xs">
              <p>
                <span>{isES ? "EL PRÓFUGO" : "THE INTRUDER"} </span>, 2020
              </p>
              <p>NATALIA META</p>
            </div>
            <h1 className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest ">
              {isES ? "PRODUCCIÓN" : "PRODUCTION"}
            </h1>{" "}
            {isES ? (
              <div className="pb-15 text-sm text-justify">
                En{" "}
                <span className="font-bold">
                  Tulip Pictures hacemos cine porque creemos en el poder de
                  contar historias.
                </span>
                <br />
                <br />
                Con experiencia en cine autoral y de alto perfil internacional,
                brindamos soluciones integrales para la producción audiovisual:
                <p className="font-bold">
                  desarrollo, preproducción, rodaje, postproducción, renta de
                  equipo y producción ejecutiva.
                </p>
                <br />
                También entendemos la coproducción como un espacio de encuentro
                creativo y estratégico. Nos interesan proyectos con una visión
                única, proyección internacional y la capacidad de conectar con
                audiencias diversas.
                <br />
                <br />
                En nuestro portafolio se encuentran proyectos de alto perfil
                como: The Intruder, Memoria, Blondi, Annette y El Jockey.
                <br />
                <br />
                Si tienes un proyecto que desafíe, conmueva o inspire, queremos
                escucharlo.
              </div>
            ) : (
              <div className="pb-15 text-sm text-justify">
                At{" "}
                <span className="font-bold">
                  Tulip Pictures we make films because we believe in the power
                  of storytelling.
                </span>
                <br />
                <br />
                With experience in auteur-driven and high-profile international
                productions, we provide full-service solutions for audiovisual
                production:
                <p className="font-bold">
                  from development and pre-production to shooting,
                  post-production, equipment rental, and executive production.
                </p>
                <br />
                We also see co-production as a space for creative and strategic
                collaboration. We’re drawn to projects with a unique vision,
                international potential, and the ability to connect with diverse
                audiences.
                <br />
                <br />
                Our portfolio includes high-profile projects such as: The
                Intruder, Memoria, Blondi, Annette and Kill The Jockey.
                <br />
                <br />
                If you are working on a project that challenges, moves, or
                inspires, we want to hear from you.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" bg-[url('/Produccion02NEW.jpg')] bg-cover bg-no-repeat py-15 bg-center px-[5vw] relative">
        <div className="md:max-w-2/3">
          <p className="text-3xl  md:text-5xl mb-8 font-bold tracking-widest  uppercase">
            {isES ? "servicios" : "services"}

            {/* <br /> de producción */}
          </p>
          {isES ? (
            <p className="text-justify">
              Ofrecemos servicios especializados en la producción
              cinematográfica, desde la gestión de la idea y la consolidación
              del guion hasta la postproducción, en cualquier parte de México y
              el mundo.
              <br />
              <br />
              Nuestro trabajo combina precisión técnica y visión creativa para
              garantizar que cada proyecto alcance los más altos estándares de
              calidad, listos para recorrer festivales internacionales y
              estrenarse en salas.
              <br />
              <br />
              Acompañamos cada etapa del proceso: desarrollo, preproducción,
              rodaje y postproducción, con un equipo experimentado que coordina
              talento, logística y recursos con eficiencia y cuidado artístico.
              <br />
              <br />
              Nos apasiona hacer posible lo que imaginas. Convertir cada
              historia en una obra terminada, sólida y lista para proyectarse
              ante el público que merece verla.
            </p>
          ) : (
            <p className="text-justify">
              We offer specialized film production services, from concept
              development and script refinement to post-production, anywhere in
              Mexico and around the world.
              <br />
              <br />
              Our work combines technical precision and creative vision to
              ensure that every project meets the highest quality standards,
              ready for international film festivals and theatrical release.
              <br />
              <br />
              We support every stage of the process: development,
              pre-production, filming, and post-production, with an experienced
              team that efficiently coordinates talent, logistics, and resources
              with artistic care.
              <br />
              <br />
              We are passionate about making your vision a reality. We transform
              each story into a finished, polished work, ready to be shown to
              the audience that deserves to see it.
            </p>
          )}
        </div>
        <div className="absolute top-[20px] md:top-[60px] right-[5vw] w-max ml-auto text-xs">
          <p>
            <span>MEMORIA</span>, 2021
          </p>
          <p className="uppercase">Apichatpong Weerasethakul</p>
        </div>
        <div
          onClick={() => setOpenForm((prev) => !prev)}
          className="bg-[#30383a] px-2 py-1 mt-7 text-white w-max mx-auto uppercase rounded cursor-pointer"
        >
         {isES ? "Llena el formulario" : "Fill the form"}
        </div>
        <div className={`${openForm ? "block" : "hidden"}`}>
          <FooterForm renta={false} lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default ProductionServices;
