"use client";
import React, { useState } from "react";

const SubscribeForm = () => {
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
        body: JSON.stringify({email}),
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
  return (
    <div className="md:max-w-[600px] mx-auto text-white">
      <p className="bg-[#30383a] text-center py-2">SUSCRIBETE</p>
      <form onSubmit={handleSubmit} className="bg-[#707873]  p-5">
        <p className="text-white">
          Entérate de nuestros estrenos y nuevas producciones.
          <br />
          <br />
          Recibe ofertas especiales, invitaciones a premieres y nuestra
          cartelera directamente en tu correo.
        </p>
        <div className="mt-8 mb-5 w-full md:flex">
          <input
            className=" h-full py-2 px-4 placeholder:text-black text-black placeholder:bg-[#c1cabc] bg-[#c1cabc]"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={loading || success} className="bg-[#30383a] py-2 px-4 cursor-pointer disabled:cursor-not-allowed">
             {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
           {success && (
            <p className="text-white font-medium">
              Message Enviado!
            </p>
          )}
      </form>
    </div>
  );
};

export default SubscribeForm;
