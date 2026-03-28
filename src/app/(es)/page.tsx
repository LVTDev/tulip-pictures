// import HomeSlider from "@/components/general UI/HomeSlider";
import HomeSliderTailerAudio from "@/components/general UI/HomeSliderTrailerAudio";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#30383a] h-[95vh] relative  overflow-hidden">
      <div className="absolute w-full h-full">
        {/* <HomeSlider lang="es" /> */}
        <HomeSliderTailerAudio lang="es" />
      </div>
    </div>
  );
};

export default Page;
