"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const InfiniteHorizontaltext = () => {
  const movingContainer = useRef<HTMLDivElement>(null);

  const text =
    "Si tienes un proyecto que desafie, conmueva o inspire, queremos escucharlo.";

  useGSAP(() => {
    gsap.to(movingContainer.current, {
      xPercent: -50, 
      duration: 20,
      ease: "none",
      repeat: -1, 
    });
  });
  return (
    <div className="overflow-hidden">
      <div
        ref={movingContainer}
        className="flex whitespace-nowrap text-[#6c7570] w-fit py-3  max-w-screen"
      >
        <div className="flex items-center mx-4">
          <span className="w-max mx-4">{text}</span>
          <div className=" h-2 w-2 rounded-full bg-[#6c7570] mx-4" />
          {text} <div className="h-2 w-2 rounded-full bg-[#6c7570] mx-4" />
          {text} <div className="h-2 w-2 rounded-full bg-[#6c7570] mx-4" />
        </div>
        <div className="flex items-center mx-4">
          <span className="w-max mx-4">{text}</span>
          <div className=" h-2 w-2 rounded-full bg-[#6c7570] mx-4" />
          {text} <div className="h-2 w-2 rounded-full bg-[#6c7570] mx-4" />
          {text} <div className="h-2 w-2 rounded-full bg-[#6c7570] mx-4" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteHorizontaltext;
