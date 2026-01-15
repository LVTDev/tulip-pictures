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
    <div className=" max-w-[1200px] mx-auto text-black bg-[#ededed]">
      <p className="   py-2 px-3 text-2xl text-center font-bold">
        {" "}
        {isES ? "Suscríbete" : "Subscribe"}
      </p>
      <form onSubmit={handleSubmit} className="text-black  p-5 ">
        <p className="text-center">
          {isES
            ? "Entérate de nuestros estrenos y nuevas producciones."
            : "Stay up-to-date on our premieres and new productions."}
          <br />
          <br />
          {isES
            ? " Recibe ofertas especiales, invitaciones a premieres y nuestra cartelera directamente en tu correo."
            : "Receive special offers, premiere invitations, and our showtimes directly to your inbox."}
        </p>
        <div className="mt-8 mb-5 mx-auto md:w-[60%] md:flex ">
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
