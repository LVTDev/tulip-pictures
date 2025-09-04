import AnnouncementBar from "@/components/general UI/AnnouncementBar";
import HomeHero from "@/components/general UI/HomeHero";

export default function Home() {
  return (
    <div className="mx-auto text-black w-full">
      <AnnouncementBar color="light"  />
      <HomeHero />
      
    </div>
  );
}
