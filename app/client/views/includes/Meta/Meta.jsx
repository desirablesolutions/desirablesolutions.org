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
    </Head>
  )

}

export default Meta