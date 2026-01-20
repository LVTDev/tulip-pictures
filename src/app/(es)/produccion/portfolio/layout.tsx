import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de producción",
  keywords: "Catálogo de películas producción Tulip Pictures",
};

export default function ProduccionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
