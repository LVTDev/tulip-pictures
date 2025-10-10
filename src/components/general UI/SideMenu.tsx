"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { ChevronDown, Facebook, Instagram, Menu, Youtube } from "react-feather";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuTL = useRef<GSAPTimeline | null>(null);
  const menuToggleRef = useRef<HTMLDivElement>(null);
  const mainref = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const linkContRef = useRef<HTMLUListElement>(null);
  const { contextSafe } = useGSAP({ scope: mainref.current! });

  const [openDropdown, setOpenDropdown] = useState<
    "produccion" | "distribucion" | null
  >(null);

  const toggleDropdown = (name: "produccion" | "distribucion") => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useGSAP(() => {
    menuTL.current = gsap.timeline({
      defaults: { duration: 0.3, ease: "power4.inOut" },
    });
    menuTL.current
      .to([linkContRef.current], {
        width: "100%",
      })
      .to([asideRef.current], {
        width: "260px",
        opacity: 1,
        stagger: 0.2,
        display: "flex",
      })
      .to([menuToggleRef.current], {
        left: "270px",
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
        className={`fixed left-0  h-[100vh] w-0 z-100 `}
        // className={`fixed left-0 bg-amber-200 h-[100vh]
        //    ${isOpen ? "w-60" : "hidden"}
        //      z-100`}
      >
        <div className="h-full">
          <aside
            ref={asideRef}
            className="bg-[#ebf5e2] h-full flex-col justify-between opacity-0 pr-3 hidden"
          >
            <div className="m-6">
              <div className="mx-auto w-max">
                <Link href="/" className="">
                  <Image
                    src="https://cdn.sanity.io/images/yj63f9tw/production/3603d8ee1bb8cd86cb0bffa5caf14d4ec7ea8433-170x67.png"
                    width={170 / 2}
                    height={67 / 2}
                    alt={"Tulip Logo"}
                  />
                </Link>
              </div>
              <nav className="mt-4">
                <ul
                  ref={linkContRef}
                  className="w-0 text-black flex flex-col gap-3 uppercase text-[12px] font-medium"
                >
                  <Link
                    href="/about-us"
                    className={`${url === "/about-us" && "text-[#e249a2db]"}`}
                  >
                    <div className="mask overflow-hidden">
                      <p>Quiénes Somos</p>
                    </div>
                  </Link>
                  <div className="group">
                    <div
                      onClick={() => toggleDropdown("produccion")}
                      className="flex justify-between items-center"
                    >
                      Producción{" "}
                      <div
                        className={`inline-block transition-transform ${
                          openDropdown === "produccion" ? "rotate-180" : ""
                        } group-hover:rotate-180 md:group-hover:rotate-180`}
                      >
                        <ChevronDown />
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 
          ${openDropdown === "produccion" ? "max-h-40" : "max-h-0"} 
          md:max-h-none md:hidden md:group-hover:block`}
                    >
                      <Link href="/produccion/portfolio">
                        <div className="mask overflow-hidden md:text-xs">
                          <p
                            className={`${
                              url.startsWith("/produccion/portfolio") &&
                              "text-[#e249a3]"
                            } text-[#0000ff89]`}
                          >
                            Catálogo
                          </p>
                        </div>
                      </Link>
                      <Link href="/produccion">
                        <div className="mask overflow-hidden md:text-xs my-2">
                          <p
                            className={`${
                              url === "/produccion" && "text-[#e249a3]"
                            } text-[#0000ff89]`}
                          >
                            Servicios
                          </p>
                        </div>
                      </Link>
                    </div>
                    {/* <div className="md:hidden md:group-hover:block">
                      <Link href="/produccion">
                        <div className="mask overflow-hidden md:text-xs my-2">
                          <p
                            className={`${url === "/produccion" && "text-[#e249a3]"} md:text-[#0000ff89] `}
                          >
                            Servicios de Producción
                          </p>
                        </div>
                      </Link>
                      <Link href="/produccion/portfolio">
                        <div className="mask overflow-hidden md:text-xs">
                          <p
                            className={`${url.startsWith("/produccion/portfolio") && "text-[#e249a3]"} md:text-[#0000ff89]`}
                          >
                            Portafolio de Producción
                          </p>
                        </div>
                      </Link>
                    </div> */}
                  </div>
                  <div className="group">
                    <div
                      onClick={() => toggleDropdown("distribucion")}
                      className="flex justify-between items-center"
                    >
                      Distribución{" "}
                      <div
                        className={`inline-block transition-transform ${
                          openDropdown === "distribucion" ? "rotate-180" : ""
                        } group-hover:rotate-180`}
                      >
                        <ChevronDown />
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 
          ${openDropdown === "distribucion" ? "max-h-40" : "max-h-0"} 
          md:max-h-none md:hidden md:group-hover:block`}
                    >
                      <Link href="/distribucion/portfolio">
                        <div className="mask overflow-hidden md:text-xs">
                          <p
                            className={`${
                              url === "/distribucion/portfolio" && "text-[#e249a3]"
                            } text-[#0000ff89]`}
                          >
                            Catálogo
                          </p>
                        </div>
                      </Link>
                      <Link href="/distribucion">
                        <div className="mask overflow-hidden md:text-xs my-2">
                          <p
                            className={`${
                              url === "/distribucion" && "text-[#e249a3]"
                            } text-[#0000ff89]`}
                          >
                            Servicios
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <Link href="/pelicula/estrenos">
                    <div className="mask overflow-hidden">
                      <p
                        className={`${url === "/pelicula/estrenos" && "text-[#e249a3]"}`}
                      >
                        Próximos Estrenos
                      </p>
                    </div>
                  </Link>
                  <Link href="/renta">
                    <div className="mask overflow-hidden">
                      <p
                        className={`${url.startsWith("/renta") && "text-[#e249a3]"}`}
                      >
                        RENTA DE EQUIPO
                      </p>
                    </div>
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-2 my-10 p-3 text-xs">
              <Link className="text-[#8aaf69]" href={"/avisoDePrivacidad"}>
                Aviso de Privacidad
              </Link>
              <Link className="text-[#8aaf69]" href={"/terminos"}>
                Términos y Condiciones de Uso
              </Link>
              <p className="text-black">&copy; 2025 TULIP PICTURES</p>
              <div className="text-black flex justify-between">
                <a href="https://www.instagram.com/tulippicturesmx/">
                  <Instagram width={16} color="black" />
                </a>
                <a href="https://x.com/TulipPicturesmx" className="w-[16px] my-auto">
                  <svg
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCVweWFFORo2PReDVUeXd15w">
                  <Youtube width={16} color="black" />
                </a>
                <a
                  href="https://www.tiktok.com/@tulippicturesmx"
                  className="w-[16px] my-auto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/TulipPicturesMX/"
                >
                  <Facebook width={16} color="black" />{" "}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div
        // className={`fixed z-200 ${isOpen ? "left-40" : "left-4"}  bg-red-300 rounded-full`}
        className={`fixed z-200 top-6 md:top-2 p-3 left-4 cursor-pointer bg-[#e249afbf] hover:bg-[#e249af] bg-opacity-[%68]   rounded-full`}
        onClick={handleButtonOpen}
        ref={menuToggleRef}
      >
        {" "}
        <Menu color="white" />
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default SideMenu;
