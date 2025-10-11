
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeLogoBtn = () => {
  return (
    <div className="">
        <div className=" md:mx-0 w-max mx-auto z-1000 absolute top-4 right-4">
          <Link href={"/"} className=" relative">
            <Image
              src={"/TULIP_Isotipo.png"}
              height={385 / 13}
              width={364 / 13}
              className="object-contain"
              priority
              alt={"Tulip Logo"}
            />
          </Link>
        </div>
    </div>
  );
};

export default HomeLogoBtn;
