"use client";
import React, { useState } from "react";

const FooterForm = ({ lang }: { lang: string }) => {
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
    <form
      onSubmit={handleSubmit}
      className="  space-y-4 font-poppins "
    >
      {lang === "es" && (
        <div className="rounded-lg overflow-hidden">
          <p className="uppercase bg-black text-white py-2 px-3 text-xl font-bold">Contáctanos</p>
          <div className="bg-[#fff7] px-10 md:flex pb-7">
            <div className="md:w-3/4 md:mr-4 ">
              <div className="mb-3">
                <label className="hidden" htmlFor="name">Nombre</label>
                <input
                placeholder="Nombre"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-b border-black placeholder:text-black "
                />
              </div>
              <div className="mb-3">
                <label className="hidden" htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                placeholder="Correo"

                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-b border-black placeholder:text-black"
                />
              </div>
              <div className="mb-3">
                <label className="hidden" htmlFor="email">Empresa</label>
                <input
                placeholder="Empresa"
                  type="company"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-b border-black placeholder:text-black"
                />
              </div>
              <div>
                <label className="hidden" htmlFor="message">Mensaje</label>
                <textarea
                placeholder="Mensaje"
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-b border-black placeholder:text-black"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 cursor-pointer transition uppercase text-xs font-bold mt-auto"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
            {success && (
              <p className="text-green-600 font-medium">
                Message sent successfully!
              </p>
            )}
          </div>
        </div>
      )}
      {lang === "en" && (
        <div>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-black rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-black rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-verde text-white px-6 py-3 cursor-pointer transition uppercase text-xs font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {success && (
            <p className="text-green-600 font-medium">
              Message sent successfully!
            </p>
          )}
        </div>
      )}
    </form>
  );
};

export default FooterForm;
