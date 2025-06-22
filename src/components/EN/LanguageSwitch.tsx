"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LanguageSwitch = () => {
  const [pageLang, setPageLang] = useState<Lang>("es");
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/en")) {
      setPageLang("en");
    } else {
      setPageLang("es");
    }
  }, [pathname]);

  // Get the opposite language and its info
  const otherLang = pageLang === "es" ? "en" : "es";
  const langInfo: LangInfo = {
    es: { label: "ES_MX", flag: "/es_MX.png", href: "/" },
    en: { label: "EN_US", flag: "/en_US.png", href: "/en" },
  };
  type LangInfo = {
    es: { label: string; flag: string; href: string };
    en: { label: string; flag: string; href: string };
  };
  type Lang = "es" | "en";
  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`fixed bottom-0 right-[10%] bg-[#1E1E1E] rounded-t-[8px] z-[999] w-[80px] h-14 pt-[6px] px-[9px] pb-[9px] flex flex-col items-center justify-center transition-all duration-300 ${
        expanded ? "h-28" : "h-14"
      }`}
      onClick={toggleExpand} // for mobile/touch toggle
      onMouseEnter={() => setExpanded(true)} // desktop hover
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Active Language */}
      <div className={`${expanded && "mb-5"}`}>
        <Link className="flex gap-2 " href={langInfo[pageLang].href}>
          <Image
            src={langInfo[pageLang].flag}
            width={18}
            height={12}
            alt={`flag ${pageLang}`}
          />
          <p className="text-[10px] opacity-80">{langInfo[pageLang].label}</p>
        </Link>
      </div>

      {/* Show other language only when expanded */}
      {expanded && (
        <div className=" mt-2">
          <Link className="flex gap-2" href={langInfo[otherLang].href}>
            <Image
              src={langInfo[otherLang].flag}
               width={18}
            height={12}
              alt={`flag ${otherLang}`}
            />
            <p className="text-[10px] opacity-80">{langInfo[otherLang].label}</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
