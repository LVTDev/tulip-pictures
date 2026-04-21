"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const HomeSlider = ({ lang }: { lang: string }) => {
  let slides;

  lang === "es" ? (slides = slidesEs) : (slides = slidesEn);
  return (
    <Swiper
      modules={[Autoplay, A11y, Navigation]}
      navigation
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full"
      slidesPerView={1}
      //   onSlideChange={() => {
      //     if (currentIndex > 13) setCurrentIndex(0);
      //     else setCurrentIndex((prev) => prev + 1);
      //     console.log("slide change");
      //   }}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, i) => (
        <SwiperSlide className="" key={i}>
          <div className={` h-[95h] bg-cover relative`}>
            <div className="relative  h-[95vh]">
              <Link href={slide.link}>
                <Image
                  src={slide.slideBG}
                  alt={`bg Poster`}
                  className="object-cover hidden md:block"
                  fill
                />
                <Image
                  src={slide.mobileBG || slide.slideBG}
                  alt={`bg Poster`}
                  className="object-cover md:hidden"
                  fill
                />
                <div className="absolute text-white bottom-0 w-full">
                  <p className="text-right font-bold text-base md:text-xl opacity-90 mr-4">
                    {slide.textTop}
                  </p>
                  <div className="text-right font-bold text-base md:text-xl opacity-90 mr-4 mb-5">
                    {slide.textBottom}
                  </div>
                  {slide.slideTitle && (
                    <img
                      src={`${slide.slideTitle}`}
                      className="mx-auto md:mx-0"
                      alt="Header"
                    />
                  )}
                </div>
                {slide.laurel1 && (
                  <Image
                    alt="premio"
                    width={763 / 5}
                    height={546 / 5}
                    src={slide.laurel1}
                    className="absolute w-18 2xl:w-24 hidden md:block right-12 top-[12%]"
                  />
                )}
                {slide.laurel2 && (
                  <Image
                    alt="premio"
                    width={763 / 5}
                    height={546 / 5}
                    src={slide.laurel2}
                    className="absolute w-18 2xl:w-24 hidden md:block right-12 top-[27%]"
                  />
                )}
                {slide.laurel3 && (
                  <Image
                    alt="premio"
                    width={763 / 5}
                    height={546 / 5}
                    src={slide.laurel3}
                    className="absolute w-18 2xl:w-24 hidden md:block right-12 top-[42%]"
                  />
                )}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

type Slides = {
  slideBG: string;
  slideTitle: string;
  textTop?: string; // Add the ? here
  textBottom?: string | React.ReactNode;
  link: string;
  mobileBG?: string;
  laurel1?: string;
  laurel2?: string;
  laurel3?: string;
};
const slidesEn: Slides[] = [
  {
    slideBG: "/lifeISS.jpg",
    mobileBG: "/lifeIsMobileChicago.jpg",
    textTop: "Life Is, 2025",
    textBottom: "Lorena Villarreal",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/2b0c3af3343736884611535a3d287fcf9d9cf9a7-1417x135.png",
    link: "en/films/premieres",
    laurel1: "/goteborg.png",
    laurel2: "/palma.png",
    laurel3: "/chicagoLaurel.png",
  },
  {
    slideBG: "/BACKUnFantasma.jpg",
    textTop: "A Useful Ghost, 2025",
    textBottom: "Ratchapoom Boonbunchachoke",
    mobileBG: "/UNFANTASMA_NEW2.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/cae4dc55dd4a7c3f0e9b333e9d83965e29b3648e-1373x135.png",
    link: "en/distribution",
  },
  {
    slideBG: "/SombraSol.jpg",
    textTop: "The Shadow of the Sun, 2023",
    textBottom: "Miguel A. Ferrer",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/cae4dc55dd4a7c3f0e9b333e9d83965e29b3648e-1373x135.png",
    link: "en/distribution",
  },
  {
    slideBG: "/BACKSorda.jpg",
    mobileBG: "/Movil_Sorda.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/cae4dc55dd4a7c3f0e9b333e9d83965e29b3648e-1373x135.png",
    textTop: "Deaf, 2025",
    textBottom: "Eva Libertad",
    link: "en/distribution",
  },

  {
    slideBG: "/prodBack.jpg",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/1d9c5e0c50d71b1d9692d56bb4efdd50ec3314d1-1283x135.png",
    link: "en/production",
    textTop: "Kill the Jockey, 2024",
    mobileBG: "/Movil_Jockey.jpg",

    textBottom: "Luis Ortega",
  },
  {
    slideBG: "/rentaBG.jpg",
    mobileBG: "/Movil_RentaEQUIPO.jpg",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/a99211c0f9c5f0150534c9ca859be40704ce1190-1829x123.png",
    // textTop: "CÁMARA ALEXA 35",
    textBottom: (
      <div>
        <p className="">
          <ArrowRight className="ml-auto  mb-1 inline" size={18} /> Contact us
          at <strong>cotizaciones@tulip-pictures.com</strong> <br />
          or complete the inquiry form
        </p>
      </div>
    ),
    link: "en/rentals",
  },
  {
    slideBG: "/BACKFlamenco.png",
    mobileBG: "/Movil_Flamenco.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/cae4dc55dd4a7c3f0e9b333e9d83965e29b3648e-1373x135.png",
    textTop: "The Mysterious Gaze of the Flamingo, 2025",
    textBottom: "Diego Céspedes",
    link: "en/distribution",
  },
  {
    slideBG: "/produccion4.jpg",
    mobileBG: "/Movil_Annette.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/1d9c5e0c50d71b1d9692d56bb4efdd50ec3314d1-1283x135.png",
    textTop: "Annette, 2021",
    textBottom: "Leos Carax",
    link: "en/production",
  },
  {
    slideBG: "/distrBack.jpg",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/cae4dc55dd4a7c3f0e9b333e9d83965e29b3648e-1373x135.png",
    textTop: "Bird, 2024",
    textBottom: "Andrea Arnold",
    link: "en/distribution",
    mobileBG: "/Movil_Bird.jpg",
  },

  {
    slideBG: "/rentaBG.jpg",
    mobileBG: "/Movil_RentaEQUIPO.jpg",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/a99211c0f9c5f0150534c9ca859be40704ce1190-1829x123.png",
    // textTop: "CÁMARA ALEXA 35",
    textBottom: (
      <div>
        <p className="">
          <ArrowRight className="ml-auto  mb-1 inline" size={18} /> Contact us
          at <strong>cotizaciones@tulip-pictures.com</strong> <br />
          or complete the inquiry form
        </p>
      </div>
    ),
    link: "en/rentals",
  },
  {
    slideBG: "/produccion3.jpg",
    mobileBG: "/Movil_Silencio.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/1d9c5e0c50d71b1d9692d56bb4efdd50ec3314d1-1283x135.png",
    link: "en/production",
    textTop: "Silencio, 2018",
    textBottom: "Lorena Villarreal",
  },
];
const slidesEs = [
  {
    slideBG: "/lifeISS.jpg",
    mobileBG: "/LifeIsMobileChicagoImage.jpg",

    textTop: "La Vida Es, 2025",
    textBottom: "Lorena Villarreal",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/c16b940093e06f810cd5a603315ba98fe5683b49-1520x174.png",
    link: "/pelicula/estrenos",
    laurel1: "/goteborg.png",
    laurel2: "/palma.png",
    laurel3: "/chicagoLaurel.png",
  },
  {
    slideBG: "/BACKUnFantasma.jpg",
    textTop: "A Useful Ghost, 2025",
    textBottom: "Ratchapoom Boonbunchachoke",
    mobileBG: "/UNFANTASMA_NEW2.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
    link: "/distribucion",
  },
  {
    slideBG: "/SombraSol.jpg",
    textTop: "La Sombra Del Sol, 2023",
    textBottom: "Miguel A. Ferrer",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
    link: "/distribucion",
  },
  {
    slideBG: "/BACKSorda.jpg",
    mobileBG: "/Movil_Sorda.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
    textTop: "Sorda, 2025",
    textBottom: "Eva Libertad",
    link: "/distribucion",
  },

  {
    slideBG: "/prodBack.jpg",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
    link: "/produccion",
    textTop: "El Jockey, 2024",
    mobileBG: "/Movil_Jockey.jpg",

    textBottom: "Luis Ortega",
  },
  {
    slideBG: "/rentaBG.jpg",
    mobileBG: "/Movil_RentaEQUIPO.jpg",
    slideTitle: "/renta de equipo.png",
    // textTop: "CÁMARA ALEXA 35",
    textBottom: (
      <div>
        <p className="">
          <ArrowRight className="ml-auto  mb-1 inline" size={18} />
          Contáctanos en <strong>cotizaciones@tulip-pictures.com</strong> <br />o completa
          el formulario
        </p>
      </div>
    ),
    link: "/renta",
  },
  {
    slideBG: "/BACKFlamenco.png",
    mobileBG: "/Movil_Flamenco.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
    textTop: "La Misteriosa Mirada del Flamenco, 2025",
    textBottom: "Diego Céspedes",
    link: "/distribucion",
  },
  {
    slideBG: "/produccion4.jpg",
    mobileBG: "/Movil_Annette.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
    textTop: "Annette, 2021",
    textBottom: "Leos Carax",
    link: "/produccion",
  },
  {
    slideBG: "/distrBack.jpg",
    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/270d21e9993bbfd86fd16e8cbbc9e641326c59e5-1916x227.png",
    textTop: "Bird, 2024",
    textBottom: "Andrea Arnold",
    link: "/distribucion",
    mobileBG: "/Movil_Bird.jpg",
  },

  {
    slideBG: "/rentaBG.jpg",
    mobileBG: "/Movil_RentaEQUIPO.jpg",
    slideTitle: "/renta de equipo.png",
    // textTop: "CÁMARA ALEXA 35",
    textBottom: (
      <div>
        <p className="">
          <ArrowRight className="ml-auto  mb-1 inline" size={18} />
          Contáctanos en <strong>cotizaciones@tulip-pictures.com</strong> <br />o completa
          el formulario
        </p>
      </div>
    ),
    link: "/renta",
  },
  {
    slideBG: "/produccion3.jpg",
    mobileBG: "/Movil_Silencio.jpg",

    slideTitle:
      "https://cdn.sanity.io/images/yj63f9tw/production/2d0bf05a403bfcfc28684555a08579a959fc50c6-1916x227.png",
    link: "/produccion",
    textTop: "Silencio, 2018",
    textBottom: "Lorena Villarreal",
  },
];

export default HomeSlider;
