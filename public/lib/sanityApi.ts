import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
    _type == "siteContent"][0]`;

const options = { next: { revalidate: 30 } };

export async function fetchSiteContent() {
  try {
    const data = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
    return data;
  } catch (error) {
    console.error("Failed to fetch site content:", error);
    return null;
  }
}
