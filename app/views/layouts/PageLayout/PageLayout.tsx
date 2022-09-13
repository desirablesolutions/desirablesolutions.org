import FadeAnimation from "@components/FadeAnimation"
import Header from "@components/Header"
import FloatingNavigator from "@views/includes/FloatingNavigator"
import RootLayout from "@layouts/RootLayout"
import DrawerMenu from "@views/includes/DrawerMenu"
import Footer from "@views/components/Footer"
import React from "react"

import type { ILayout } from "@typings/Layout"



const PageLayout = ({ children, metaData, footer, header }: ILayout) => {

    return (

        <RootLayout metaData={metaData}>
            <DrawerMenu />
            <Header {...header} />
            <FloatingNavigator />
            <FadeAnimation>
                {children}
            </FadeAnimation>
            <Footer {...footer} />
        </RootLayout>
    )

}

export default React.memo(PageLayout)