import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-feather";

function Footer() {
  return (
    <footer className=" bg-[#30383a] py-5  text-white">
      <div className="md:flex w-[90vw] mx-auto justify-between items-center">
        <div>
          {" "}
          <div className="text-black flex justify-between">
            <Facebook color="white" fill="white" />
            <Instagram    color="white" />
            <Twitter color="white" fill="white" />
            <Youtube color="white"/>
          </div>
          <p className="font-bold">@SOMOSTULIPPICTURESMX</p>
        </div>
        <Link  href="/" className=" relative">
          <Image
            src={"/TULIP_Isotipo.png"}
             height={385/9}
            width={364/9}
            className="object-contain"
            priority
            alt={"Tulip Logo"}
          />
        </Link>
        <div>
          <div className="flex flex-col gap-2">
              <Link className="font-bold uppercase" href={"/avisoDePrivacidad"}>
              Notice of Privacy
            </Link>
              <Link className="font-bold uppercase" href={"/terminos"}>
              Terms and Conditions
            </Link>
            <p className="text-white opacity-80">&copy; 2025 TULIP PICTURES</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
