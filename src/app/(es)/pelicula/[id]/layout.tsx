/* eslint-disable */
import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
import { Metadata } from "next";

type Props = {
   params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  const result = await fetchSanityIndividualMovie("pelicula", id);

  return {
    title: `Pelicula | ${result[0].title}`,
    keywords: `${result[0].title} + ${result[0].director}`,
  };
}
export default async function PeliculaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full">{children}</div>;
}
