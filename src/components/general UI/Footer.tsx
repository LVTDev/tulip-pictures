import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Youtube } from "react-feather";

function Footer() {
  return (
    <footer className=" bg-black py-3  text-white">
      <div className="md:flex w-[90vw] mx-auto justify-between items-center">
        <div className="md:flex gap-2">
          {" "}
          <div className="text-black flex justify-between gap-2">
            <a href="https://www.instagram.com/tulippicturesmx/">
              <Instagram color="white" />
            </a>

            <a href="https://x.com/TulipPicturesmx" className="w-[24px]">
              <svg
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  fill="white"
                  d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"
                />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCVweWFFORo2PReDVUeXd15w">
              <Youtube color="white" />
            </a>
            <a href="https://www.tiktok.com/@tulippicturesmx" className="w-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path
                  fill="white"
                  d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z"
                />
              </svg>
            </a>

            <a target="_blank" href="https://www.facebook.com/TulipPicturesMX/">
              <Facebook color="white" fill="white" />
            </a>
          </div>
          <div className="hidden md:block">
            |
          </div>
          <p className="font-bold text-sm w-max mx-auto md:mx-0">@TULIPPICTURESMX</p>
        </div>
        <div className=" md:mx-0 w-max mx-auto">
          <Link href="/" className=" relative">
            <Image
              src={"/TULIP_Isotipo.png"}
              height={385 / 14}
              width={364 / 14}
              className="object-contain"
              priority
              alt={"Tulip Logo"}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
