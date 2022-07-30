import "@views/libs/tailwind.css"
import "@views/libs/globals.css"
import 'react-scramble-text/dist/index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@views/libs/dashvars.css"
import "@views/libs/hover.css"

import Store from "@components/Store"

import RecoilNexus from "recoil-nexus";


import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'

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
        <PageTransition timeout={434} classNames="page-transition">
          <Store>
            <RecoilNexus/>
            <Component {...pageProps} />
          </Store>
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 900ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 900ms;
          }
        `}</style>
      </>
    )
  }
}