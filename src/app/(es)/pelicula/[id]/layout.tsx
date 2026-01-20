/* eslint-disable */
import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const idValue = id
  const result = await fetchSanityIndividualMovie("pelicula", idValue);

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
  return <div>{children}</div>;
}
