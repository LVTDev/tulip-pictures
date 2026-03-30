"use client";
import React, { useRef, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";

interface VideoSlideProps {
  src: string;
  swiperRef: React.RefObject<SwiperType | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const TrailerSlideAudio = ({ src, swiperRef, videoRef }: VideoSlideProps) => {
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <div
      className="relative min-h-screen"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <video
        ref={videoRef}
        data-testid="video"
        className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center"
        width="100%"
        height="100%"
        muted
        autoPlay
        controls
        loop
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute pointer-events-none text-white bottom-10 w-full z-200">
        <img
          src={
            "https://cdn.sanity.io/images/yj63f9tw/production/c16b940093e06f810cd5a603315ba98fe5683b49-1520x174.png"
          }
          className="mx-auto md:mx-0"
          alt="Header"
        />
      </div>
    </div>
  );
};

export default TrailerSlideAudio;
