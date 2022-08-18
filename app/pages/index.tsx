import type { IPage } from "@typings/Page"
import Hero from "@components/Hero"
import Showcase from "@components/Showcase"
import FormSection from "@components/FormSection"
import SummarySection from "@components/SummarySection"
import TextCarousel from "@views/components/TextCarousel"
import homePage from "@pages/homePage"
import PageLayout from "@layouts/PageLayout"

const HomePage: IPage = () => {

  const metaData = {
    pageTitle: 'Home'
  }

  return (

    <PageLayout {...metaData}>
      <Hero {...homePage.hero} />
      <Showcase order={"01"} {...homePage.showcase} />
      <SummarySection order={"02"} {...homePage.summarySection} />
      <TextCarousel order={"03"} {...homePage.textCarousel}/>
      <FormSection  order={"04"} {...homePage.formSection} />
    </PageLayout>

  )
}

export default HomePage

