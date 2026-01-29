"use client";
import React, { useState } from "react";

const FooterForm = ({ lang, renta }: { lang: string; renta: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "", company: "" });
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
    <form onSubmit={handleSubmit} className="mt-3 space-y-4 ">
      {lang === "es" && (
        <div className="overflow-hidden bg-[#ededed]">
          <p className="text-center text-black py-2 px-3 text-xl font-bold">
            Contáctanos
          </p>
          {renta === true && (
            <p className="text-center text-sm md:text-base">
              Escríbenos a{" "}
              <span className="font-bold">hello@letswoohoo.com</span> o completa
              el siguente formulario.
            </p>
          )}
          <div className=" px-10 mt-4 pb-7 w-full">
            <div className="">
              <div className="md:flex w-full gap-2 justiy-between">
                <div className="mb-3 md:w-1/3">
                  <label className="hidden" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    placeholder="Nombre"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-1 placeholder:text-black bg-white "
                  />
                </div>
                <div className="mb-3 md:w-1/3">
                  <label className="hidden" htmlFor="email">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-1 bg-white placeholder:text-black"
                  />
                </div>
                <div className="mb-3 md:w-1/3">
                  <label className="hidden" htmlFor="company">
                    Empresa
                  </label>
                  <input
                    placeholder="Empresa"
                    type="company"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full p-1 bg-white placeholder:text-black"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 items-center">
                <div className="w-[90%] pt-2">
                  <label className="hidden" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    id="message"
                    rows={1}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-1 placeholder:text-black bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-2 cursor-pointer transition uppercase text-xs font-bold "
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </div>
              {success && (
                <p className="text-green-600 font-medium">
                  Message Enviado!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {lang === "en" && (
        <div className="overflow-hidden bg-[#ededed]">
          <p className="text-center text-black py-2 px-3 text-xl font-bold">
            Contact Us
          </p>
          {renta === true && (
            <p className="text-center text-sm md:text-base">
              Write to us at{" "}
              <span className="font-bold">hello@letswoohoo.com</span> or fill the following form.
            </p>
          )}
          <div className=" px-10 mt-4 pb-7 w-full">
            <div className="">
              <div className="md:flex w-full gap-2 justiy-between">
                <div className="mb-3 md:w-1/3">
                  <label className="hidden" htmlFor="name">
                    Name
                  </label>
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-1 placeholder:text-black bg-white "
                  />
                </div>
                <div className="mb-3 md:w-1/3">
                  <label className="hidden" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-1 bg-white placeholder:text-black"
                  />
                </div>
                <div className="mb-3 md:w-1/3">
                  <label className="hidden" htmlFor="company">
                    Company
                  </label>
                  <input
                    placeholder="Company"
                    type="company"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full p-1 bg-white placeholder:text-black"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 items-center">
                <div className="w-[90%] pt-2">
                  <label className="hidden" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id="message"
                    rows={1}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-1 placeholder:text-black bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 py-2 cursor-pointer transition uppercase text-xs font-bold "
                >
                  {loading ? "Sending" : "Send"}
                </button>
              </div>
              {success && (
                <p className="text-green-600 font-medium">
                  Message sent successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default FooterForm;
