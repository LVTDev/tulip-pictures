import FooterForm from "@/components/general UI/FooterForm";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className='bg-[url("/rentaBG.jpg")] bg-cover bg-no-repeat h-[80vh] w-full flex flex-col items-center justify-center'>
        <h1 className="text-[#ebf5e27c] text-6xl  font-poppins font-medium mx-auto w-max">
          RENTA DE <br />
          EQUIPO
        </h1>
        <p className="text-[#ebf5e27c] text-lg  font-poppins font-medium ml-auto mr-16">RENTA DE EQUIPO <br /> CÁMARA ALEXA 35<br/>+ SET DE PRODUCCION</p>
        <a className="bg-[#30383a] px-3 py-1  text-xl font-bold text-white" href="https://cdn.sanity.io/files/yj63f9tw/production/11f95e02f3b1835279800e44d49bbed34e8d1853.pdf" target="_blank" rel="noopener noreferrer">Ver Catalogo</a>
      </div>
      <FooterForm lang="es"/>
    </div>
  );
};

export default page;
