import AnnouncementBar from "@/components/general UI/AnnouncementBar";
import InfiniteHorizontaltext from "@/components/general UI/InfiniteHorizontaltext";
import InfoSlider from "@/components/general UI/InfoSlider";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#ebf5e2] min-h-screen">
      <AnnouncementBar color="dark"  />

      <InfiniteHorizontaltext />
      <InfoSlider lang="es" />
    </div>
  );
};

export default page;
