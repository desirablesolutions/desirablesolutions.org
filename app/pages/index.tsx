import FormSection from "@components/FormSection"
import Hero from "@components/Hero"
import Showcase from "@components/Showcase"
import TextCarousel from "@components/TextCarousel"
import type { IPage } from "@typings/Page"
import ThreeColumnSection from "@views/components/ThreeColumnSection"
import PageLayout from "@views/layouts/PageLayout"



export const resolver = (url) => {
  return `http://localhost:3000${url}`
}

export async function getData() {

  const res = await fetch(resolver('/api/pages/'),

    {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
  const articles = await res.json().then(data => data)
  return articles
}

const HomePage: IPage = ({ pageData }) => {

  console.log(`Data: ${JSON.stringify(pageData)}`)
  
  

  return (
    <PageLayout metaData={pageData.metaData}>
      <Hero {...pageData.hero} />
      <Showcase order={"01"} {...pageData.showcase} />
      <ThreeColumnSection order={"02"} {...pageData.summarySection} />
      <TextCarousel order={"03"} {...pageData.textCarousel} />
      <FormSection order={"04"} {...pageData.formSection} />
    </PageLayout>
  )
}


export default HomePage



export async function getStaticProps() {

  let dataQuery = null;

  await getData().then(data => {
    dataQuery = data
    console.log(dataQuery)
  }).catch(err => {
    console.log(err)
  })


  return {
    props: {
      pageData: dataQuery
    },
    revalidate: 5
  }
}

