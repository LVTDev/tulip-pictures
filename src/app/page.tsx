import Contactanos from "@/components/general UI/Contactanos";
import DistribucionHome from "@/components/general UI/DistribucionHome";
import HomeHero from "@/components/general UI/HomeHero";
import ProduccionHome from "@/components/general UI/ProduccionHome";
import QuienesSomos from "@/components/general UI/QuienesSomos";

export default function Home() {
  return (
    <div className="mx-auto px-2">
      <HomeHero />
      <QuienesSomos />
      <DistribucionHome />
      <ProduccionHome />
      <Contactanos lang="es" />
    </div>
  );
}
