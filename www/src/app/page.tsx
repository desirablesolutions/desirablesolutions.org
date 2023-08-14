import Hero from "@components/Hero";
import Contact from "@/views/components/Contact";
import ComplexPricingTable from "@components/ComplexPricingTable";
import FeaturedMedia from "@components/FeaturedMedia";
import LogoCloud from "@components/LogoCloud";
import ContentReel from "@components/ContentReel";
import FeaturedSummary from "@components/FeaturedSummary";
import FeaturedFormSection from "@components/FeaturedFormSection";
import Stats from "@/views/components/Stats";
import DetailSummary from "@components/DetailSummary"
import { usePage } from "@hooks/usePage"
import FeaturedLinks from "@/views/components/FeaturedLinks/FeaturedLinks";


export default async function Home() {

  const data = await usePage()

  return (
    <>
      <Hero />
      <FeaturedMedia />
      <Stats />

<FeaturedLinks/>
      <ComplexPricingTable />
      <DetailSummary/>
      <ContentReel/>
      <Contact /> 
    </>
  );
}
