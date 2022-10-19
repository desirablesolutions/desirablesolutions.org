import Collection from "@components/Collection"
import ComplexTable from "@components/ComplexTable"
import Gallery from "@components/Gallery"
import HelpForm from "@components/HelpForm"
import Hero from "@components/Hero"
import IconGallery from "@components/IconGallery"
import Showcase from "@components/Showcase"
import SimpleForm from "@components/SimpleForm"
import TextCarousel from "@components/TextCarousel"
import ThreeColumnSection from "@components/ThreeColumnSection"
import PageService from "@controllers/services/page"

const HomePage = ({ page: { data } }) => {


  const { hero, showcase, gallery, collection, complexTable, iconGallery, textCarousel, threeColumnSection, simpleForm, helpForm } = data

  return (
    <>
      <Hero {...hero} />
      <Showcase order={"01"} {...showcase} />
      <ThreeColumnSection order={"02"} {...threeColumnSection} />
      <IconGallery {...iconGallery} />
      <SimpleForm {...simpleForm} />
      <Collection {...collection} />
      <TextCarousel {...textCarousel} />
      <ComplexTable {...complexTable} />
      <Gallery {...gallery} />
      <HelpForm  {...helpForm} />
    </>
  )
}

export default HomePage


export async function getServerSideProps() {

  const { getPage } = PageService()
  
  const page = await getPage("home")

  return {
    props: {
      page
    }
  }
}