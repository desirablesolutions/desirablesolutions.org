import FAQs from "@includes/FAQs"
import Principles from "@views/includes/Principles"
import RequestForm from "@includes/RequestForm"
import TeamGallery from "@includes/TeamGallery"
import WhatWeDo from "@views/includes/WhatWeDo"
import PageLayout from "@layouts/PageLayout"
import AdvantagesTable from "@views/includes/AdvantagesTable"
import Vision from "@views/includes/Vision"
import ProjectShowcase from "@views/includes/ProjectShowcase"

export default function HomePage() {

  return (

    <PageLayout>
      <WhatWeDo order={"00"} />
      <ProjectShowcase order={"01"} />
      <Vision order={"02"} />
      <Principles order={"03"} />
      <AdvantagesTable order={"04"} />
      <FAQs order={"05"} />
      <TeamGallery order={"06"} />
      <RequestForm order={"07"} />
    </PageLayout>
  )

}

