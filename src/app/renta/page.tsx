"use client";
import FooterForm from "@/components/general UI/FooterForm";
import React, { useState } from "react";

const Page = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="">
      <div className='bg-[url("/rentaBG.jpg")] bg-cover bg-no-repeat h-[75vh] w-full flex flex-col items-center justify-center'>
        <h1 className="text-[#ebf5e27c] text-6xl  font-poppins font-medium mx-auto w-max">
          RENTA DE <br />
          EQUIPO
        </h1>
        <p className="text-[#ebf5e27c] text-lg  font-poppins font-medium ml-auto mr-16">
          RENTA DE EQUIPO <br /> CÁMARA ALEXA 35
          <br />+ SET DE PRODUCCION
        </p>
        <a
          className="bg-[#30383a] px-3 py-1  text-xl font-bold text-white"
          href="https://cdn.sanity.io/files/yj63f9tw/production/11f95e02f3b1835279800e44d49bbed34e8d1853.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Catálogo
        </a>
      </div>
      <div className="bg-[#ebf5e2] py-5">
        {!openForm ? (
          <div
            onClick={() => setOpenForm((prev) => !prev)}
            className="bg-[#30383a] text-white px-2 py-1 w-max mx-auto uppercase rounded cursor-pointer"
          >
            Llena el formulario
          </div>
        ) : (
          <div className={`${openForm ? "block" : "hidden"} `}>
            <FooterForm lang="es" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
