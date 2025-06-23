import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "react-feather";

const Footer = () => {
  return (
    <div className="bg-gris py-10 mt-16 font-poppins">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mx-auto">
          <div className="w-12">
            <img src="/logo-tulip-blanco.png" alt="Logo Tulip" />
          </div>
          <p className="text-sm text-[#d1d1d1] mt-8">
            Visita nuestras redes sociales
          </p>
          <div className="flex justify-between max-w-[250px] mt-6">
            <Facebook color="#d1d1d1" fill="#d1d1d1" />
            <Twitter color="#d1d1d1" />
            <Instagram color="#d1d1d1" />
            <Youtube color="#d1d1d1" />
          </div>
          <div className="text-xs text-verde my-6">
            <Link href="/avisoDePrivacidad">Aviso de Privacidad</Link>
          </div>
          <div className="text-xs text-verde">
            <Link href="/terminos">Términos y Condiciones de Uso</Link>
          </div>
          <p className="mt-6 text-[#7c7c7c] text-xs">© 2020 Tulip Pictures</p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 mx-auto">
          <p className="text-[18px] uppercase font-extrabold mb-12">Contacto</p>

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
          <div>
            <p className="text-[#d1d1d1] font-bold">Gerente de Programación</p>
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
      </div>
    </div>
  );
};

export default Footer;
