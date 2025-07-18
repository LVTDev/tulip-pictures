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

  const fetchedData = await client.fetch(query, {}, {cache: "no-store"});
  console.log("FETCHED DATA",fetchedData)
  return fetchedData;
};
