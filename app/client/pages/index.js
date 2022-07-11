import HomeLayout from "@layouts/HomeLayout"
import TeamGallery from "@includes/TeamGallery"
import RequestForm from "@includes/RequestForm"
import PortfolioShowcase from "@includes/PortfolioShowcase"


export default function HomePage() {

  return (

    <HomeLayout>
      <PortfolioShowcase />
      <TeamGallery />
      <RequestForm />
    </HomeLayout>
  )

}

