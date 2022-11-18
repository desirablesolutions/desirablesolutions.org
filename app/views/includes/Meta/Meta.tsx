import Head from "next/head"
import type { ComponentType } from "@typings/Component"
import type { MetaProps } from "@typings/Meta"

const Meta: ComponentType<MetaProps> = ({ pageTitle }: MetaProps) => {

  return (
    <Head>
      <title>{"Desirable Solutions"}</title>
      <link rel="preload" href="/assets/fonts/the-seasons/the-seasons-Regular.ttf" as="font" type="font/ttf" crossOrigin={"true"} />
      <meta name="theme-color" content="#000000" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
    </Head>
  )

}

export default Meta