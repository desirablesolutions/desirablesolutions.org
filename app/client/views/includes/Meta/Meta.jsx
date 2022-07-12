import Head from "next/head"
import useMeta from "@hooks/useMeta"


let { title, pageTitle, description, url, image, basePaths, icons } = useMeta()




let Icons = () => (
  icons.map((icon, index) => (
    <link key={`Icon-${index}`} rel="shortcut android-chrome icon" href={`${basePaths.icons}${icon}.png`} sizes={`${icon}`} type="image/x-icon" />
  ))

)


console.log(useMeta())
const Meta = () => {

  return (

    <Head>
      <title>{title} | {pageTitle}</title>
      <Icons />

      <meta name="description" content={description}/>
      
      <link href={url} rel="canonical"/>

      <meta name="og:title" property="og:title" content={title}/>
      <meta name="robots" content="index, follow"/>


    </Head>
  )

}

export default Meta