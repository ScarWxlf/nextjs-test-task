import Main from "../components/main/main";
import { fetchSiteContent } from "../../public/lib/sanityApi";

export default async function Home() {
  const siteContent = await fetchSiteContent();

  return (
    <div className="flex flex-col flex-grow w-full px-8 lg:px-14">
      <Main siteContent={siteContent} />
    </div>
  );
}
