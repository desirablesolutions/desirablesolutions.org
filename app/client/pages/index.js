import HomeLayout from "@layouts/HomeLayout"
import TeamGallery from "@includes/TeamGallery"
import RequestForm from "@includes/RequestForm"



export default function HomePage() {

  return (

    <HomeLayout>
      <TeamGallery />
      <RequestForm />
    </HomeLayout>
  )

}

