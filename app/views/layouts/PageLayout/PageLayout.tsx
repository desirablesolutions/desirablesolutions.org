import FadeAnimation from "@components/FadeAnimation"
import Header from "@components/Header"
import FloatingNavigator from "@views/includes/FloatingNavigator"
import RootLayout from "@layouts/RootLayout"
import type { ILayout } from "@typings/Layout"
import DrawerMenu from "@views/includes/DrawerMenu"
import header from "@configs/header"
import Footer from "@views/components/Footer"
import footer from "@configs/footer"
import React from "react"


const PageLayout = ({ children, metaData }: ILayout) => {

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