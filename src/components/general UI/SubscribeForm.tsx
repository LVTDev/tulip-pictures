"use client";
import React from "react";

const SubscribeForm = () => {
  return (
    <div className="max-w-[600px] mx-auto text-white">
      <p className="bg-[#30383a] text-center py-2">SUSCRIBETE</p>
      <form action="" className="bg-[#707873]  p-5">
        <p className="text-white">
          Entérate de nuestros estrenos y nuevas producciones.
          <br />
          <br />
          Recibe ofertas especiales, invitaciones a premieres y nuestra
          cartelera directamente en tu correo.
        </p>
        <div className="mt-8 mb-5 w-full flex">
          <input
            className=" h-full py-2 px-4 placeholder:text-black text-black placeholder:bg-[#c1cabc] bg-[#c1cabc]"
            type="text"
            placeholder="E-mail"
          />
          <button type="submit" className="bg-[#30383a] py-2 px-4">
            Enviar
          </button>
        </div>
      </form>

    </div>
  );
};

export default SubscribeForm;
