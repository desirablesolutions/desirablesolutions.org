import Head from "next/head"
import useMeta from "@hooks/useMeta"


let { title, pageTitle, description, url, image, basePaths, icons } = useMeta()


const Meta = () => {

  return (

    <Head>
      <title>{title} | {pageTitle}</title>
    </Head>
  )

}

export default Meta