import Collection from "@components/Collection"
import ComplexTable from "@components/ComplexTable"
import Gallery from "@components/Gallery"
import HelpForm from "@components/HelpForm"
import Hero from "@components/Hero"
import IconGallery from "@components/IconGallery"
import Showcase from "@components/Showcase"
import SimpleForm from "@components/SimpleForm"
import TextCarousel from "@components/TextCarousel"
import PageLayout from "@layouts/PageLayout"
import homePage from "@pages/homePage"
import ThreeColumnSection from "@views/components/ThreeColumnSection"


import type { IPage } from "@typings/Page"



const HomePage: IPage = ({ pageData }) => {


  console.log(pageData)

  return (
    <PageLayout metaData={{ pageTitle: '' }}>
      <Hero {...pageData.hero} />
      <Showcase order={"01"} {...pageData.showcase} />
      <ThreeColumnSection order={"02"} {...pageData.threeColumnSection} />
      <IconGallery />
      <SimpleForm />
      <Collection />
      <TextCarousel order={"03"} {...pageData.textCarousel} />
      <ComplexTable order={"05"} title={""} heading={"Hello"} />
      <Gallery order={"00"} title={""} {...pageData.gallery} />
      <HelpForm order={"06"} {...pageData.helpForm} />
    </PageLayout>
  )
}


export default HomePage



export async function getStaticProps() {

  return {
    props: {
      pageData: homePage.init()
    },
    revalidate: 5
  }
}

