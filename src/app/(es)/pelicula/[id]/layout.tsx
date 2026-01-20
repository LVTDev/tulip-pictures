import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
    const {id} =   params
  const result = await fetchSanityIndividualMovie("pelicula", id);

  return {
    title:`Pelicula | ${result[0].title}` ,
    keywords: `${result[0].title} + ${result[0].director}`

  
  };
}
export default async function PeliculaLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {

  return <div>{children}</div>;
}
