"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "react-feather";
import { checkES } from "@/utils/pageLang";

const FichaBackButton = ({lang}:{lang: string}) => {
  const isES = checkES(lang)
  const router = useRouter();
  return (
    <Link
      href="#"
      className="flex items-center gap-3"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      {isES ? "Regresar" : "Return"}
    </Link>
  );
};

export default FichaBackButton;
