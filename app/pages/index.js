import Pillars from "@includes/Pillars"
import RequestForm from "@includes/RequestForm"
import TeamGallery from "@includes/TeamGallery"
import PageLayout from "@layouts/PageLayout"
import Goals from "@views/includes/Goals"
import ProjectShowcase from "@views/includes/ProjectShowcase"
import WhoWeAre from "@includes/WhoWeAre"

export default function HomePage() {

  return (

    <PageLayout>
      <WhoWeAre order={"00"} />
      <ProjectShowcase order={"01"} />
      <Goals order={"02"} />
      <Pillars order={"03"} />
      <TeamGallery order={"04"} />
      <RequestForm order={"05"} />
    </PageLayout>
  )

}

