import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estrenos",
  keywords: "Estrenos de cine 2026 México",
};

export default function EstrenosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
