import Pillars from "@includes/Pillars"
import RequestForm from "@includes/RequestForm"
import TeamGallery from "@includes/TeamGallery"
import PageLayout from "@layouts/PageLayout"
import Goals from "@views/includes/Goals"
import ProjectShowcase from "@views/includes/ProjectShowcase"
import WhoWeAre from "@includes/WhoWeAre"
import FAQs from "@includes/FAQs"
import AdvantagesTable from "@views/includes/AdvantagesTable"
export default function HomePage() {

  return (

    <PageLayout>
      <WhoWeAre order={"00"} />
      <ProjectShowcase order={"01"} />
      <Goals order={"02"} />
      <Pillars order={"03"} />
      <AdvantagesTable order={"04"} />
      <FAQs order={"05"} />
      <TeamGallery order={"06"} />
      <RequestForm order={"07"} />
    </PageLayout>
  )

}

