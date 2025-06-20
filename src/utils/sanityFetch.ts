import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const fetchSanity = async (fetchSection: string) => {
  const query = groq`   *[_type=='${fetchSection}']{
        ...,
    }`;

  const fetchedData = await client.fetch(query);
  console.log("FETCHED DATA",fetchedData)
  return fetchedData;
};
