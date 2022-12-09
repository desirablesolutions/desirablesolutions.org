import "@libs/animations.css";
import "@libs/dashvars.css";
import "@libs/globals.css";
import "@libs/hover.css";
import "@libs/tailwind.css";

import "react-multi-carousel/lib/styles.css";
import "react-scramble-text/dist/index.css";

import Store from "@components/Store";
import { PageTransition } from "next-page-transitions";
import RecoilNexus from "recoil-nexus";

export default function Application({ Component, pageProps }) {

  const { PageLayout } = Component?.layout ?? null

  return (
    <Store>
      <RecoilNexus />
      <PageLayout {...pageProps.layout}>
        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
      </PageLayout>
    </Store>
  )
}

