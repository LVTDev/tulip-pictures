import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const fetchSanity = async (fetchSection: string) => {
  const query = groq`   *[_type=='${fetchSection}']{
        ...,
   categories[]->{
    _id,
    title
  }
    }`;

  const fetchedData = await client.fetch(query, {}, { cache: "no-store" });
  return fetchedData;
};
export const fetchSanityIndividualMovie = async (
  fetchSection: string,
  id: string
) => {
  const query = groq`   *[_type=='${fetchSection}'  && slug.current == '${id}']{
        ...,
   categories[]->{
    _id,
    title
  },
  "pressKitURL": pressKit.asset -> url
    }`;

  const fetchedData = await client.fetch(query, {}, { cache: "no-store" });
  return fetchedData;
};
