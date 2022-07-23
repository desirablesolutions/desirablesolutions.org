import HomeLayout from "@layouts/HomeLayout"
import TeamGallery from "@includes/TeamGallery"
import RequestForm from "@includes/RequestForm"
import ProjectShowcase from "@views/includes/ProjectShowcase"
import AdvantagesTable from "@includes/AdvantagesTable"
import FAQs from "@includes/FAQs"
import ToolsShowcase from "@includes/ToolsShowcase"
import Pillars from "@includes/Pillars"
import Goals from "@views/includes/Goals"

export default function HomePage() {

  return (

    <HomeLayout>
      <ProjectShowcase order={"01"} />
      <Goals order={"02"} />
      <Pillars order={"03"} />
      <TeamGallery order={"06"} />
      <FAQs order={"06"} />
      <RequestForm order={"07"} />
    </HomeLayout>
  )

}

