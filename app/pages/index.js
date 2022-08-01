import FAQs from "@includes/FAQs"
import Pillars from "@includes/Pillars"
import RequestForm from "@includes/RequestForm"
import TeamGallery from "@includes/TeamGallery"
import WhoWeAre from "@includes/WhoWeAre"
import PageLayout from "@layouts/PageLayout"
import AdvantagesTable from "@views/includes/AdvantagesTable"
import Vision from "@views/includes/Vision"
import ProjectShowcase from "@views/includes/ProjectShowcase"

export default function HomePage() {

  return (

    <PageLayout>
      <WhoWeAre order={"00"} />
      <ProjectShowcase order={"01"} />
      <Vision order={"02"} />
      <Pillars order={"03"} />
      <AdvantagesTable order={"04"} />
      <FAQs order={"05"} />
      <TeamGallery order={"06"} />
      <RequestForm order={"07"} />
    </PageLayout>
  )

}

