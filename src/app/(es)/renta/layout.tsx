import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renta de Equipo",
  keywords: "Renta de equipo para producción cinematográfica",
  description: "Renta de equipo para producción cinematográfica"
};

export default function ProduccionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
