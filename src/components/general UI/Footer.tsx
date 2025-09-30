import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-feather";

function Footer() {
  return (
    <div className="md:flex justify-between items-center bg-[#30383a] py-5 px-2 text-white">
      <div>
        {" "}
        <div className="text-black flex justify-between">
          <Facebook color="white" />
          <Instagram color="white" />
          <Twitter color="white" />
          <Youtube color="white" />
        </div>
        <p>SOMOSTULIPPICTURESMX</p>
      </div>

      <Link  href="/" className=" relative h-[55px] w-[40px]">
        <Image
          src={"/TULIP_Isotipo.png"}
          fill
          className="object-contain"
          priority
          alt={"Tulip Logo"}
        />
      </Link>
      <div>
        <div className="flex flex-col gap-2">
            <Link className="" href={"/avisoDePrivacidad"}>
            Notice of Privacy
          </Link>
            <Link className="" href={"/terminos"}>
            Terms and Conditions
          </Link>
          <p className="text-white">&copy; 2025 TULIP PICTURES</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
