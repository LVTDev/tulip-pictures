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
      className="fixed top-0 left-1/2 -translate-x-1/2 bg-transparent p-1 md:p-2 z-50 w-screen  flex justify-between px-1 md:px-6 items-center"
      ref={container}
    >
      <div className="relative w-[100px] h-[38px]">
        <Link href={`${pageLang === "es" ? "/" : "/en"}`}>
          <Image src={"/logo-tulip-blanco.png"} fill alt="Logo Tulip" />
        </Link>
      </div>

      {/* <div className="w-max flex justify-between gap-4  md:gap-8 items-center">
        <Link
          className="w-min hover:text-verde transition-all text-[9px] md:text-xs font-medium"
          href={`${pageLang === "es" ? "/our-films" : "/en/our-films"}`}
        >
          {`${pageLang === "es" ? "NUESTRAS PELÍCULAS" : "OUR FILMS"}`}
        </Link>
        <Link
          className="w-min text-[9px] hover:text-verde transition-all md:text-xss font-medium"
          href={"/about-us"}
        >
          {`${pageLang === "es" ? "¿QUIÉNES SOMOS?" : "ABOUT US"}`}
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
