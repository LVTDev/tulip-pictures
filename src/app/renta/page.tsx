import FooterForm from "@/components/general UI/FooterForm";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className='bg-[url("/rentaBG.jpg")] bg-cover bg-no-repeat h-[80vh] w-full flex flex-col items-center justify-center'>
        <h1 className="text-[#ebf5e27c] text-6xl  font-poppins font-medium mx-auto w-max">
          EQUIPMENT <br />
          RENTAL
        </h1>
        <p className="text-[#ebf5e27c] text-lg  font-poppins font-medium ml-auto mr-16">RENTAL <br /> CÁMARA ALEXA 35<br/>+ PRODUCTION SET</p>
      </div>
      <FooterForm lang="es"/>
    </div>
  );
};

export default page;
