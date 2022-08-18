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

  const servicesData = [
    {
      name: 'Web Development',
    },
    {
      name: 'Mobile Development',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'Digital Marketing',
    },
    {
      name: 'Operations Consultation',
    },
    {
      name: 'Logo Design',
    },
    {
      name: 'Graphic Design',
    },
    {
      name: 'Content Writing',
    },
    {
      name: 'Art & Illustration'
    },
    {
      name: "Brand Identity",
    }
  ]


  return (

    <PageLayout {...metaData}>
      <Hero {...homePage.hero} />
        <Showcase order={"01"} {...homePage.showcase} />
        <SummarySection order={"02"} {...homePage.summarySection} />
        <TextCarousel heading={"WHat's your problem?"} title="Questions" order={"03"} />
        <FormSection
        order={"04"}
        title={"Help"}
        heading={"What's your problem?"}
        services={servicesData} />
    </PageLayout>

  )
}

export default HomePage

