import Contact from "@/views/components/Contact";
import FeaturedLinks from "@components/FeaturedLinks";
import Stats from "@/views/components/Stats";
import ContentReel from "@components/ContentReel";
import DetailSummary from "@components/DetailSummary";
import FeaturedMedia from "@components/FeaturedMedia";
import Hero from "@components/Hero";

import { usePage } from "@hooks/usePage";


export default async function Home() {

  const data = await usePage()

  return (
    <>
      <Hero />
      <FeaturedMedia />
      <Stats />
<FeaturedLinks/>
      <DetailSummary/>
      <ContentReel/>
      <Contact /> 
    </>
  );
}
