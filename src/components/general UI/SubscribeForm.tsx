"use client";
import Link from "next/link";
import React from "react";

const SubscribeForm = () => {
  return (
    <div className="max-w-[600px] mx-auto">
      <p className="bg-[#30383a] text-center py-2">SUSCRIBETE</p>
      <form action="" className="bg-[#a2ae9c]  p-5">
        <p className="text-black">
          Entérate de nuestros estrenos y nuevas producciones.
          <br />
          <br />
          Recibe ofertas especiales, invitaciones a premieres y nuestra
          cartelera directamente en tu correo.
        </p>
        <div className="mt-8 mb-5 w-full flex">
          <input
            className="bg-white h-full py-2 px-4 placeholder:text-[#00000086]"
            type="text"
            placeholder="E-mail"
          />
          <button type="submit" className="bg-[#30383a] py-2 px-4">
            Enviar
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-2 mt-10 uppercase">
        <Link className="text-white font-bold" href={"/avisoDePrivacidad"}>
          Notice of Privacy
        </Link>
        <Link className="text-white font-bold" href={"/terminos"}>
          Terms and Conditions
        </Link>
        <p className="text-white text-xs opacity-70">&copy; 2025 TULIP PICTURES</p>
      </div>
    </div>
  );
};

export default SubscribeForm;
