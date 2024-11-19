import { SiteContent } from "./types/types";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
    _type == "siteContent"][0]`;

const options = { next: { revalidate: 30 } };

export async function fetchSiteContent(): Promise<SiteContent> {
  try {
    const data = await client.fetch(POSTS_QUERY, {}, options);
    return data || {
      title: "Default Title",
      subtitle: "Default Subtitle",
      contactNumber: "No contact",
      socials: [],
      statistics: [],
    };
  } catch (error) {
    console.error("Failed to fetch site content:", error);
    return {
      title: "Default Title",
      subtitle: "Default Subtitle",
      contactNumber: "No contact",
      socials: [],
      statistics: [],
    };
  }
}
