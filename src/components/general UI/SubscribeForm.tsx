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
    <div className="md:max-w-[600px] mx-auto text-white rounded-lg overflow-hidden">
      <p className="uppercase bg-black text-white py-2 px-3 text-xl font-bold">SUSCRÍBETE</p>
      <form onSubmit={handleSubmit} className="text-black  p-5 ">
        <p className="">
          Entérate de nuestros estrenos y nuevas producciones.
          <br />
          <br />
          Recibe ofertas especiales, invitaciones a premieres y nuestra
          cartelera directamente en tu correo.
        </p>
        <div className="mt-8 mb-5 w-full md:flex border">
          <input
            className=" w-full p-3  placeholder:text-black"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={loading || success} className="bg-black py-2 px-4 text-white cursor-pointer disabled:cursor-not-allowed">
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
