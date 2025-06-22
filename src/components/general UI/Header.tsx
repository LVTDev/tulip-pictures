"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const container = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  type Lang = "es" | "en";

  const pathname = usePathname();
  const [pageLang, setPageLang] = useState<Lang>("es");

  useEffect(() => {
    if (pathname.includes("/en")) {
      setPageLang("en");
    } else {
      setPageLang("es");
    }
  }, [pathname]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        // console.log(self.progress);
        if (self.progress > 0.2) {
          gsap.to(container.current, {
            background: "#2b2f35f2",
          });
        } else {
          gsap.to(container.current, {
            background: "transparent",
          });
        }
      },
    });
  });

  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 bg-transparent p-2 z-50 w-screen  flex justify-between px-6 items-center"
      ref={container}
    >
      {pageLang === "es" && (
        <div>
          <Link className="relative w-6 h-8" href="/">
            <Image
              src={"/logo-tulip-blanco.png"}
              width={130}
              height={60}
              alt="Logo Tulip"
            />
          </Link>
        </div>
      )}
      {pageLang === "en" && (
        <div>
          <Link className="relative w-6 h-8" href="/en">
            <Image
              src={"/logo-tulip-blanco.png"}
              width={130}
              height={60}
              alt="Logo Tulip"
            />
          </Link>
        </div>
      )}
      {pageLang === "es" && (
        <div className="flex justify-between gap-8 items-center">
          <Link
            className="text-xs font-poppins font-medium"
            href={"/our-films"}
          >
            NUESTRAS PELÍCULAS
          </Link>
          <Link className="text-xs font-poppins font-medium" href={"/about-us"}>
            ¿QUIÉNES SOMOS?
          </Link>
        </div>
      )}
      {pageLang === "en" && (
        <div className="flex justify-between gap-8 items-center">
          <Link
            className="text-xs font-poppins font-medium"
            href={"/en/our-films"}
          >
            OUR FILMS
          </Link>
          <Link
            className="text-xs font-poppins font-medium"
            href={"/en/about-us"}
          >
            ABOUT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
