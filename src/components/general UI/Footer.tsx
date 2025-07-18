"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "react-feather";

const Footer = () => {
  const pathname = usePathname();

  const isEnglish = pathname.includes("/en");
  return (
    <div className="bg-gris py-10 mt-16 font-poppins">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/3 mx-auto">
          <div className="w-12">
            <img src="/logo-tulip-blanco.png" alt="Logo Tulip" />
          </div>
          <div className="mt-3">
            <h3 className="mt-3 mb-5 text-2xl font-bold uppercase">
              {isEnglish ? "Locations" : "Ubicaciones"}
            </h3>
            <div>
              <p className="text-lg font-medium">CDMX, México</p>
            </div>
            <div>
              <p className="text-lg font-medium">Los Ángeles, USA</p>
            </div>
          </div>
          <p className="text-sm text-[#d1d1d1] mt-8">
            {isEnglish
              ? "Visit our social media"
              : "Visita nuestras redes sociales"}
          </p>
          <div className="flex justify-between max-w-[250px] mt-6">
            <Facebook color="#d1d1d1" fill="#d1d1d1" />
            <Twitter color="#d1d1d1" />
            <Instagram color="#d1d1d1" />
            <Youtube color="#d1d1d1" />
          </div>
          <div className="text-xs text-verde my-6">
            <Link href="/avisoDePrivacidad">
              {isEnglish ? "Privacy Notice" : "Aviso de Privacidad"}
            </Link>
          </div>
          <div className="text-xs text-verde">
            <Link href="/terminos">
              {isEnglish
                ? "Terms and Conditions of Uses"
                : "Términos y Condiciones de Uso"}
            </Link>
          </div>
          <p className="mt-6 text-[#7c7c7c] text-xs">© 2020 Tulip Pictures</p>
        </div>
        <div className="md:w-2/3">
          <p className="text-2xl uppercase font-extrabold my-6 text-center">
            {isEnglish ? "Contact" : "Contacto"}
          </p>
          <div className=" md:flex">
            <div className=" md:mt-0 mx-auto">
              <div>
                <p className="text-[#d1d1d1] font-bold">
                  Director de Distribución y <br />
                  Adquisiciones
                </p>
                <p>Abraham González Ruiz</p>
                <p className="flex gap-2 items-end">
                  <Mail className="w-4" />
                  <a
                    href="mailto:abraham@tulip-pictures.com"
                    data-magic-cursor="link-small"
                    className="text-verde mt-6"
                  >
                    abraham@tulip-pictures.com
                  </a>
                </p>
              </div>
              <div className="my-8">
                <p className="text-[#d1d1d1] font-bold">
                  Gerente de Marketing y <br />
                  Comunicación
                </p>
                <p>Javier Martínez Ramírez</p>
                <p className="flex gap-2 items-end">
                  <Mail className="w-4" />
                  <a
                    href="mailto:javier@tulip-pictures.com"
                    data-magic-cursor="link-small"
                    className="text-verde mt-6"
                  >
                    javier@tulip-pictures.com
                  </a>
                </p>
              </div>
              <div className="my-8">
                <p className="text-[#d1d1d1] font-bold">
                  Gerente de Programación
                </p>
                <p>Frida Picazo Gayosso</p>
                <p className="flex gap-2 items-end">
                  <Mail className="w-4" />
                  <a
                    href="mailto:frida@tulip-pictures.com"
                    data-magic-cursor="link-small"
                    className="text-verde mt-6"
                  >
                    frida@tulip-pictures.com
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-1/2  md:mt-0 mx-auto">
              <div className="">
                <p className="text-[#d1d1d1] font-bold">
                  Directora de Producción
                </p>
                <p>Paloma Cabrera </p>
                <p className="flex gap-2 items-end">
                  <Mail className="w-4" />
                  <a
                    href="mailto:paloma@grupolvt.com"
                    data-magic-cursor="link-small"
                    className="text-verde mt-6"
                  >
                    paloma@grupolvt.com
                  </a>
                </p>
              </div>
              <div className="my-8">
                <p className="text-[#d1d1d1] font-bold">
                  Coordinadora de Producción
                </p>
                <p>Aranza Miranda</p>
                <p className="flex gap-2 items-end">
                  <Mail className="w-4" />
                  <a
                    href="mailto:aranza@grupolvt.com"
                    data-magic-cursor="link-small"
                    className="text-verde mt-6"
                  >
                    aranza@grupolvt.com
                  </a>
                </p>
              </div>
              <div className="my-8">
                <p className="text-[#d1d1d1] font-bold">
                  Coordinadora de Post Producción
                </p>
                <p>Lulú Huerta</p>
                <p className="flex gap-2 items-end">
                  <Mail className="w-4" />
                  <a
                    href="mailto:lulu@grupolvt.com"
                    data-magic-cursor="link-small"
                    className="text-verde mt-6"
                  >
                    lulu@grupolvt.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
