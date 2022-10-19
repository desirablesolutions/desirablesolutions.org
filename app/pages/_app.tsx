import "@libs/animations.css";
import "@libs/dashvars.css";
import "@libs/globals.css";
import "@libs/hover.css";
import "@libs/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import 'react-scramble-text/dist/index.css';

import Store from "@components/Store";
import RecoilNexus from "recoil-nexus";

import { PageTransition } from 'next-page-transitions';
import App from 'next/app';
import React from 'react';
import PageLayout from "@layouts/PageLayout"
import type { AppProps } from 'next/app'


export interface IApplication extends AppProps {
  layout?: any,
}

export default function Application({ Component, pageProps, layout }: IApplication) {


  return (

    <PageTransition timeout={700} classNames="page-transition">
      <Store>
        <RecoilNexus />
        <PageLayout {...layout}>
          <Component {...pageProps} />
        </PageLayout>
      </Store>
    </PageTransition>

  )
}

Application.getInitalProps = async () => {
  const layout = {
    metaData: {

    }
  }
  return { layout }
}