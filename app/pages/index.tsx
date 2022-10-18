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
import ThreeColumnSection from "@components/ThreeColumnSection"
import PageService from "@controllers/services/page"




const HomePage = ({ pageData }) => {

  return (
    <PageLayout {...pageData.layout}>
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


export async function getServerSideProps() {

  const page = PageService().getPage("home")

  return {
    props: {
      page
    }
  }
}