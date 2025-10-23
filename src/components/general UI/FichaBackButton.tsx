"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "react-feather";

const FichaBackButton = () => {
  const router = useRouter();
  return (
    <Link
      href="/produccion/portfolio"
      className="flex items-center gap-3"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Regresar
    </Link>
  );
};

export default FichaBackButton;
