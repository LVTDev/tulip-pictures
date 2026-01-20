import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quienes Somos",
  keywords: "Distribuidora de cine independiente en México",
};

export default function SomosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
