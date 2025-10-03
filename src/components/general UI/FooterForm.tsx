"use client";
import React, { useState } from "react";

const FooterForm = ({ lang }: { lang: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        setFormData({ name: "", email: "", message: "" });
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
      className="w-full mx-auto p-6  space-y-4 font-poppins bg-[#ebf5e2]"
    >
      {lang === "es" && (
        <div>
          <div>
            <label htmlFor="name">Nombre</label>
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
            <label htmlFor="email">Correo Electrónico</label>
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
            <label htmlFor="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-black rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#30383a] text-white px-6 py-3 cursor-pointer transition uppercase text-xs font-bold"
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
