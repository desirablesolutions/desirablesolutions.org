import "@views/libs/animations.css";
import "@views/libs/dashvars.css";
import "@views/libs/globals.css";
import "@views/libs/hover.css";
import "@views/libs/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-scramble-text/dist/index.css';

import Store from "@components/Store";
import RecoilNexus from "recoil-nexus";

import { PageTransition } from 'next-page-transitions';
import App from 'next/app';
import React from 'react';

export default class Application extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <PageTransition timeout={500} classNames="page-transition">
          <Store>
            <RecoilNexus/>
            <Component {...pageProps} />
          </Store>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            backdropFilter: blur(50px);
          }
          .page-transition-enter-active {
            opacity: 1;
            backdropFilter: blur(0px);

            transition: opacity backdropFilter 900ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 1s;
          }
        `}</style>
      </>
    )
  }
}