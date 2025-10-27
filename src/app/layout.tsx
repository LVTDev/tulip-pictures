import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
// import SidebarMenu from "@/components/general UI/Sidebar";
import Footer from "@/components/general UI/Footer";
import SideMenu from "@/components/general UI/SideMenu";
import HomeLogoBtn from "@/components/general UI/HomeLogoBtn";
// import AnnouncementBar from "@/components/general UI/AnnouncementBar";
import { Analytics } from "@vercel/analytics/next";


const robotoFont = Roboto({
  variable: "--font-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={`${robotoFont.variable}   antialiased`}>
        <Analytics />
        <div className="relative">
          <div className="flex min-h-[90vh]">
            <HomeLogoBtn />
            <SideMenu />
            <div className="flex-1">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
