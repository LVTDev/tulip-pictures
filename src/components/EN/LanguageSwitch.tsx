"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LanguageSwitch = ({ location }: { location: "sidebar" | "footer" }) => {
  const [pageLang, setPageLang] = useState<Lang>("es");
  const [expanded, setExpanded] = useState(false);
  const [urlToUse, setUrlToUse] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/en")) {
      setPageLang("en");
    } else {
      setPageLang("es");
    }
  }, [pathname]);
   // Function to get the translated URL
  const getTranslatedUrl = (currentPath: string): string => {
    // Check if exact match exists in links
    if (links[currentPath]) {
      return links[currentPath];
    }

    // Handle dynamic routes for /pelicula/[slug]
    if (currentPath.startsWith("/pelicula/") && !currentPath.includes("/en")) {
      const slug = currentPath.replace("/pelicula/", "");
      return `/en/films/${slug}`;
    }

    // Handle dynamic routes for /en/films/[slug]
    if (currentPath.startsWith("/en/films/") && currentPath.includes("/en")) {
      const slug = currentPath.replace("/en/films/", "");
      return `/pelicula/${slug}`;
    }

    // Fallback: toggle /en prefix
    if (currentPath.startsWith("/en")) {
      return currentPath.replace("/en", "") || "/";
    } else {
      return `/en${currentPath}`;
    }
  };

  useEffect(() => {
    setUrlToUse(getTranslatedUrl(pathname));
  }, [pathname]);

  const links: Record<string, string> = {
    "/": "/en",
    "/about-us": "/en/about-us",
    "/produccion": "/en/production",
    "/produccion/portfolio": "/en/production/portfolio",
    "/distribucion": "/en/distribution",
    "/distribucion/portfolio": "/en/distribution/portfolio",
    "/pelicula/estrenos": "/en/films/premieres",
    "/renta": "/en/rentals",
    // ENglish to spanish
    "/en": "/",
    "/en/about-us": "/about-us",
    "/en/production": "/produccion",
    "/en/production/portfolio": "/produccion/portfolio",
    "/en/distribution": "/distribucion",
    "/en/distribution/portfolio": "/distribucion/portfolio",
    "/en/films/premieres": "/pelicula/estrenos",
    "/en/rentals": "/renta",
  };

  // Get the opposite language and its info
  const otherLang = pageLang === "es" ? "en" : "es";
  const langInfo: LangInfo = {
    es: { label: "Español", flag: "/es_MX.png", href: "/" },
    en: { label: "English", flag: "/en_US.png", href: "/en" },
  };
  type LangInfo = {
    es: { label: string; flag: string; href: string };
    en: { label: string; flag: string; href: string };
  };
  type Lang = "es" | "en";

  return (
    <div>
      {location === "footer" && (
        <div className="mr-3">
          <Link className="flex gap-2 " href={urlToUse}>
            <p className={`${pageLang === "en" ? "opacity-70" : "font-bold"}`}>
              ES
            </p>{" "}
            |{" "}
            <p className={`${pageLang === "es" ? "opacity-70" : "font-bold"}`}>
              EN
            </p>
          </Link>
        </div>
      )}
      {location === "sidebar" &&    <div className="text-[12px] mt-4">
          <Link className="" href={urlToUse}>
            <p className={`${pageLang === "en" ? "opacity-90" : "text-[#e249a3]"} mb-2`}>
              Español
            </p>
         
            <p className={`${pageLang === "es" ? "opacity-90" : "text-[#e249a3]"}`}>
              English
            </p>
          </Link>
        </div>}
    </div>
  );
  // return (
  //   <div>
  //     <div>
  //       <Link className="flex gap-2 " href={links[pathname] || "/"}>
  //         <p className=" opacity-80">{langInfo[pageLang].label}</p>
  //       </Link>
  //     </div>

  //     <div className=" mt-2">
  //       {/* <Link className="flex gap-2" href={langInfo[otherLang].href}> */}
  //       <Link className="flex gap-2" href={links[pathname] || "/"}>
  //         <p className="">{langInfo[otherLang].label}</p>
  //       </Link>
  //     </div>
  //   </div>
  // );
};

export default LanguageSwitch;
