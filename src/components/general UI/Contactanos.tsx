import React from "react";
import FooterForm from "./FooterForm";

const Contactanos = ({ lang }: { lang: string }) => {
  return (
    <div className="flex flex-col md:flex-row font-poppins max-w-[900px] mx-auto mt-[70px] px-3">
      <div className=" md:w-1/2">
        <p className="text-verde text-sm font-semibold">
          {lang === "en" ? "CONTACT US" : "CONTÁCTANOS"}{" "}
        </p>
        <p className="md:text-[48px] text-[32px] font-bold">
          {lang === "en" ? "Leave us a message" : "Déjanos tu mensaje"}{" "}
        </p>
        <p className="text-sm md:text-base">
          {lang === "en"
            ? "Thanks to the people who shared their stories with us. They trusted us, and we are very grateful."
            : " Gracias a las personas que nos compartieron sus historias. Ellos confiaron en nosotros y estamos muy agradecidos."}
        </p>
      </div>
      <div className="md:w-1/2">
        <FooterForm lang={lang} />
      </div>
    </div>
  );
};

export default Contactanos;
