import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de distribución",
  keywords: "Catálogo de películas distribución Tulip Pictures",
};

export default function DistribucionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
