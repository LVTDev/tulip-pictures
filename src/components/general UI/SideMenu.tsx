"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "react-feather";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuTL = useRef<GSAPTimeline | null>(null);
  const menuToggleRef = useRef<HTMLDivElement>(null);
  const mainref = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: mainref.current! });

  useGSAP(() => {
    menuTL.current = gsap.timeline({
      defaults: { duration: 0.3, ease: "power4.inOut" },
    });
    menuTL.current
      .to([asideRef.current], {
        width: "230px",
        opacity: 1,
        stagger: 0.2,
      })
      .to([menuToggleRef.current], {
        left: "250px",
      });
    menuTL.current.paused(true);
  });

  const handleTogglePlay = contextSafe(() => {
    if (!menuTL.current) return;
    if (!isOpen) {
      menuTL.current.play();
      setIsOpen(true);
    } else {
      menuTL.current.reverse();
      setIsOpen(false);
    }
  });
  const handleButtonOpen = () => {
    handleTogglePlay();
  };
  const url = usePathname();
  useEffect(() => {
    if (isOpen) handleTogglePlay();
  }, [url]);

  return (
    <div className=" bg-blue-100 relative">
      <div
        ref={mainref}
        className={`fixed left-0 bg-amber-200 h-[100vh] w-0 z-100 `}
        // className={`fixed left-0 bg-amber-200 h-[100vh]
        //    ${isOpen ? "w-60" : "hidden"}
        //      z-100`}
      >
        <div className="h-full">
          <aside
            ref={asideRef}
            className="bg-[#ebf5e2] h-full flex flex-col justify-between opacity-0 pr-3"
          >
            <div className="m-6">
              <Link href="/">
                <Image
                  src="https://cdn.sanity.io/images/yj63f9tw/production/3603d8ee1bb8cd86cb0bffa5caf14d4ec7ea8433-170x67.png"
                  width={170 / 2}
                  height={67 / 2}
                  alt={"Tulip Logo"}
                />
              </Link>
              <nav className="mt-4">
                <ul className="text-black flex flex-col gap-3 uppercase text-lg font-medium">
                  <Link
                    href="/about-us"
                    className={`${url === "/about-us" && "underline"}`}
                  >
                    <div className="mask overflow-hidden">
                      <p>Quiénes Somos</p>
                    </div>
                  </Link>
                  <div>
                    <Link href="/produccion">
                      <div className="mask overflow-hidden ">
                        <p
                          className={`${url === "/produccion" && "underline"}`}
                        >
                          Produccion
                        </p>
                      </div>
                    </Link>
                    <Link href="/produccion/portfolio">
                      <div className="mask overflow-hidden text-sm">
                        <p
                          className={`${url.startsWith("/produccion/portfolio") && "underline"}`}
                        >
                          Produccion Portfolio
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link href="/distribucion">
                      <div className="mask overflow-hidden">
                        <p
                          className={`${url === "/distribucion" && "underline"}`}
                        >
                          Distribución
                        </p>
                      </div>
                    </Link>
                    <Link href="/distribucion/portfolio">
                      <div className="mask overflow-hidden text-sm">
                        <p
                          className={`${url.startsWith("/distribucion/portfolio") && "underline"}`}
                        >
                          Distribución Portfolio
                        </p>
                      </div>
                    </Link>
                  </div>
                  <Link href="/pelicula/estrenos">
                    <div className="mask overflow-hidden">
                      <p
                        className={`${url === "/pelicula/estrenos" && "underline"}`}
                      >
                        Próximos Estrenos
                      </p>
                    </div>
                  </Link>
                  <Link href="/renta">
                    <div className="mask overflow-hidden">
                      <p
                        className={`${url.startsWith("/renta") && "underline"}`}
                      >
                        RENTA
                      </p>
                    </div>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-2 my-10 p-3">
              <Link className="text-[#8aaf69]" href={"/avisoDePrivacidad"}>
                Notice of Privacy
              </Link>
              <Link className="text-[#8aaf69]" href={"/terminos"}>
                Terms and Conditions
              </Link>
              <p className="text-black">&copy; 2025 TULIP PICTURES</p>
              <div className="text-black flex justify-between">
                <Facebook color="black" />
                <Instagram color="black" />
                <Twitter color="black" />
                <Youtube color="black" />
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div
        // className={`fixed z-200 ${isOpen ? "left-40" : "left-4"}  bg-red-300 rounded-full`}
        className={`fixed z-200 top-2  left-4  bg-red-300 rounded-full`}
        onClick={handleButtonOpen}
        ref={menuToggleRef}
      >
        {" "}
        <div>
          <div className=" menu-toggle flex relative :hover:before:absolute z-100 w-max cursor-pointer">
            <svg
              className="open-menu w-[45px] h-[45px]"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M12.5003 14.5833H22.917C23.4695 14.5833 23.9994 14.8028 24.3901 15.1935C24.7808 15.5842 25.0003 16.1141 25.0003 16.6667C25.0003 17.2192 24.7808 17.7491 24.3901 18.1398C23.9994 18.5305 23.4695 18.75 22.917 18.75H12.5003C11.9478 18.75 11.4179 18.5305 11.0272 18.1398C10.6365 17.7491 10.417 17.2192 10.417 16.6667C10.417 16.1141 10.6365 15.5842 11.0272 15.1935C11.4179 14.8028 11.9478 14.5833 12.5003 14.5833ZM27.0837 31.25H37.5003C38.0529 31.25 38.5828 31.4695 38.9735 31.8602C39.3642 32.2509 39.5837 32.7808 39.5837 33.3333C39.5837 33.8859 39.3642 34.4158 38.9735 34.8065C38.5828 35.1972 38.0529 35.4167 37.5003 35.4167H27.0837C26.5311 35.4167 26.0012 35.1972 25.6105 34.8065C25.2198 34.4158 25.0003 33.8859 25.0003 33.3333C25.0003 32.7808 25.2198 32.2509 25.6105 31.8602C26.0012 31.4695 26.5311 31.25 27.0837 31.25ZM12.5003 22.9167H37.5003C38.0529 22.9167 38.5828 23.1362 38.9735 23.5269C39.3642 23.9176 39.5837 24.4475 39.5837 25C39.5837 25.5525 39.3642 26.0824 38.9735 26.4731C38.5828 26.8639 38.0529 27.0833 37.5003 27.0833H12.5003C11.9478 27.0833 11.4179 26.8639 11.0272 26.4731C10.6365 26.0824 10.417 25.5525 10.417 25C10.417 24.4475 10.6365 23.9176 11.0272 23.5269C11.4179 23.1362 11.9478 22.9167 12.5003 22.9167Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
