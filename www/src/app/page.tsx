import Hero from "@components/Hero";
import ContactFormSection from "@components/ContactFormSection";
import ComplexPricingTable from "@components/ComplexPricingTable";
import FeaturedMedia from "@components/FeaturedMedia";
import LogoCloud from "@components/LogoCloud";
import ContentReel from "@components/ContentReel";
import FeaturedSummary from "@components/FeaturedSummary";
import FeaturedFormSection from "@components/FeaturedFormSection";
import StatsGrid from "@components/StatsGrid";

import { usePage } from "@hooks/usePage"


export default async function Home() {

  const data = await usePage()

  
  return (
    <>
      <FeaturedSummary />
      <ContentReel />
      <StatsGrid />
      <LogoCloud />
      <ContentReel />
      <FeaturedFormSection />
      <ComplexPricingTable />
      <FeaturedMedia />
      <ContactFormSection /> 
    </>
  );
}

/*

  <Hero />
    
      
      */