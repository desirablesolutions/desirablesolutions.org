

import Hero from "@components/Hero";
import Contact from "@includes/Contact"
import FeaturedContent from "@components/FeaturedContent";
import DetailSummary from "@components/DetailSummary"
import ContentRow from "@components/ContentRow"



export default async function Home() {
  return (
    <>
      <Hero />
      <ContentRow/>
      <FeaturedContent/>
      <DetailSummary/>
      <Contact/>
    </>
  );
}
