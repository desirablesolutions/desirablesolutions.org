import FormSection from "@components/FormSection"
import TextCarousel from "@components/TextCarousel"
import  homePage from "@pages/homePage"
import type { IPage } from "@typings/Page"
import SummarySection from "@views/components/ThreeColumnSection"
import PageLayout from "@views/layouts/PageLayout"
import dynamic from "next/dynamic"


export interface IMeta {
  pageTitle: string;
}


const metaData: IMeta = {
  pageTitle: 'Home'
}


const Hero = dynamic(() => import("@components/Hero"), {
  ssr: false
})

const Showcase = dynamic(() => import("@components/Showcase"), {
  ssr: false
})

const HomePage: IPage = ({ data }) => {

  return (
    <PageLayout {...metaData}>
      <Hero {...homePage.hero} />
      <Showcase order={"01"} {...homePage.showcase} />
      <SummarySection order={"02"} {...homePage.summarySection} />
      <TextCarousel order={"03"} {...homePage.textCarousel} />
      <FormSection order={"04"} {...homePage.formSection} />
    </PageLayout>

  )
}


export default HomePage

