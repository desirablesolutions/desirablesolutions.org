import "@libs/animations.css";
import "@libs/dashvars.css";
import "@libs/globals.css";
import "@libs/hover.css";
import "@libs/tailwind.css";

import "react-multi-carousel/lib/styles.css";
import "react-scramble-text/dist/index.css";

import Store from "@components/Store";
import RecoilNexus from "recoil-nexus";
import PageLayout from "@layouts/PageLayout";
import type { IApplication } from "@typings/Application";
import { PageTransition } from "next-page-transitions";
import PageService from "@services/page";

export default function Application({ Component, pageProps, layout }: IApplication) {

  return (
    <PageTransition timeout={250} classNames="page-transition">
      <Store>
        <RecoilNexus />
        <PageLayout {...layout}>
          <Component {...pageProps} />
        </PageLayout>
      </Store>
    </PageTransition>
  )
}

