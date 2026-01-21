"use client";
import { checkES } from "@/utils/pageLang";
import React, { useState } from "react";

const SubscribeForm = ({ lang }: { lang: string }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/mailingList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };
  const isES = checkES(lang);
  return (
    <div className=" max-w-[1200px] mx-auto text-black">
      <p className="border-b border-black  py-2   text-xl md:text-3xl font-bold">
        {" "}
        {isES ? "Suscríbete" : "Subscribe"}
      </p>
      <form onSubmit={handleSubmit} className="text-black  py-3 px-2 bg-[#ededed] mt-3">
        <p className="text-sm">
          <span className="font-bold pb-2 text-base">
            {isES
              ? "Entérate de nuestros estrenos y nuevas producciones."
              : "Stay up-to-date on our premieres and new productions."}
          </span>
          <br />
          {isES
            ? " Recibe ofertas especiales, invitaciones a premieres y nuestra cartelera directamente en tu correo."
            : "Receive special offers, premiere invitations, and our showtimes directly to your inbox."}
        </p>
        <div className="mt-4 mb-2 md:w-[80%] md:flex ">
          <input
            className=" w-full p-3  placeholder:text-black bg-white"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <button
            type="submit"
            disabled={loading || success}
            className="bg-black py-2 px-4 text-white cursor-pointer disabled:cursor-not-allowed"
            >
            {loading && isES && "Enviando..."}
            {loading && !isES && "Sending..."}
            {!loading && isES && "Enviar"}
            {!loading && !isES && "Send"}
            
          </button>
        </div>
        {success && <p className="text-black font-medium">Message Enviado!</p>}
      </form>
    </div>
  );
};

export default SubscribeForm;
