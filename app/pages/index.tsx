import HelpForm from "@components/HelpForm"
import Hero from "@components/Hero"
import Showcase from "@components/Showcase"
import TextCarousel from "@components/TextCarousel"
import ThreeColumnSection from "@views/components/ThreeColumnSection"
import PageLayout from "@layouts/PageLayout"
import IconGallery from "@components/IconGallery"
import ComplexTable from "@components/ComplexTable"
import getPages from "@services/getPages"
import SimpleForm from "@components/SimpleForm"
import Gallery from "@components/Gallery"
import Collection from "@components/Collection"

import FacadeService from "@controllers/services/facade"

import type { IPage } from "@typings/Page"
import { useEffect } from "react"



const HomePage: IPage = ({ pageData }) => {

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <PageLayout metaData={{ pageTitle: ''}}>
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

  let dataQuery = null;

   getPages().then(data => {
    dataQuery = data
  }).catch(err => {
    console.log(err)
  })

  return {
    props: {
      pageData: dataQuery
    },
    revalidate: 5
  }
}

