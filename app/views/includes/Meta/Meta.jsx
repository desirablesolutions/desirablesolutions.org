import Head from "next/head"
import useMeta from "@hooks/useMeta"


let { title, pageTitle, description, url, image, basePaths, icons } = useMeta()



const Icons = () => (
  icons.map((icon, index) => (
    <link key={`Icon-${index}`} rel="shortcut android-chrome icon" href={`${basePaths.icons}${icon}.png`} sizes={`${icon}`} type="image/x-icon" />
  ))

)

const Meta = () => {

  return (

    <Head>
      <Icons />

      <title>{title} | {pageTitle}</title>
      <link rel="preload" href="/assets/fonts/the-seasons/the-seasons-Regular.ttf" as="font" type="font/ttf" crossOrigin={true} />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <link href={url} rel="canonical" />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="robots" content="index, follow" />
    </Head>
  )

}

export default Meta