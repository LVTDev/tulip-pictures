import type { Metadata } from "next";

import Footer from "@/components/general UI/Footer";
import SideMenu from "@/components/general UI/SideMenu";
import HomeLogoBtn from "@/components/general UI/HomeLogoBtn";

export const metadata: Metadata = {
  title: "Tulip Pictures",
  description:
    "Producimos y distribuimos cine con identidad. Desde 2018 hemos acompañado películas mexicanas e internacionales en salas, festivales y plataformas, diseñando estrategias a la medida de cada historia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative">
        <div className="flex min-h-[90vh]">
          <HomeLogoBtn lang="en" />
          <SideMenu language="en" />
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
