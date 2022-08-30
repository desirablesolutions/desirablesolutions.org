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

import type { AppProps } from 'next/app'


export interface IApplication extends AppProps {
}

export default function Application({ Component, pageProps }: IApplication) {


  return (
    <>
      <PageTransition timeout={700} classNames="page-transition">
        <Store>
          <RecoilNexus />
          <Component {...pageProps} />
        </Store>
      </PageTransition>
      <style>{`
          .page-transition-enter {
            opacity: 0.1;
            backdropFilter: blur(50px);
          }
          .page-transition-enter-active {
            opacity: 1;
            backdropFilter: blur(5px);

            transition: opacity backdropFilter 1200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 1.2s;
          }
        `}</style>
    </>
  )
}
