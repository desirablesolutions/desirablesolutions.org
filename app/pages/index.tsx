import type { IPage } from "@typings/Page"

import PageLayout from "@layouts/PageLayout"

const HomePage: IPage = () => {

  const { pageTitle } = { pageTitle: 'Home' }

  return (

    <PageLayout pageTitle={pageTitle}>

    </PageLayout>

  )
}

export default HomePage
