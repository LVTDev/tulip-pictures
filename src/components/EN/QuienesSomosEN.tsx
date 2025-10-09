import React from "react";

const QuienesSomosEN = () => {
  return (
    <div className="flex gap-6 mt-8 flex-col md:flex-row">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <h2 className="text-center text-[36px] md:text-[48px] font-extrabold">
          About Us
        </h2>
        <div className="mt-6">
          <img  className="h-40 md:h-70" src="/flor-tulip.png" alt="Logo Tulip" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-[20px] md:text-[24px] font-bold mb-8">
          Since 2018,<span className="text-verde">Tulip Pictures</span> has been
          entirely focused on the acquisition and distribution of{" "}
          <span className="text-verde">
            Mexican and international high quality films.
          </span>
        </h3>
        <p className=" text-sm">
          In addition to film acquisition, we also develop distribution and
          sales strategies for the Mexican, U.S. and Latin American markets in
          order to maximize the potential for each one of our titles. <br />
          <br />
          Our VOD distribution catalogue currently offers a diverse range of
          titles from different genres which are available in the most prominent
          digital platforms, including Amazon Prime Video, iTunes, Claro Video,
          Google Play, among others.
          <br />
          <br />
          We also offer solutions for independent producers looking for services
          and expertise in distribution, fund application and festival routes.
          <br /> <br />
          As an experienced team, we are committed to creating the best
          strategies in order to maximize the content&apos;s potential.
        </p>
      </div>
    </div>
  );
};

export default QuienesSomosEN;
