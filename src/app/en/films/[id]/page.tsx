// import Ficha from "@/components/general UI/Ficha";
// // import FichaBackButton from "@/components/general UI/FichaBackButton";
// // import Loading from "@/components/general UI/Loading";
// // import ReconocimentosList from "@/components/general UI/ReconocimentosList";
// // import SliderPeliculas from "@/components/general UI/SliderPeliculas";
// // import SubscribeForm from "@/components/general UI/SubscribeForm";
// // import { urlFor } from "@/sanity/lib/image";
// // import { fetchSanityIndividualMovie } from "@/utils/sanityFetch";
// // import { Movie } from "@/utils/types";
// // import Image from "next/image";
// import React from "react";

// const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   <Ficha id={id} lang="en" />;
// };

// export default Page;
import Ficha from "@/components/general UI/Ficha";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="h-full">
      <Ficha id={id} lang="en" />
    </div>
  );
};

export default page;
