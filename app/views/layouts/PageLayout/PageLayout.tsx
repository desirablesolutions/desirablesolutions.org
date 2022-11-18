import FadeAnimation from "@components/FadeAnimation"
import Footer from "@components/Footer"
import MagicNavigator from "@includes/MagicNavigator"
import RootLayout from "@layouts/RootLayout"
import Header from "@views/components/Header"
import React, { Suspense } from "react"

import type { ILayout } from "@typings/Layout"

const PageLayout = ({ children, metaData, footer, header, menu, magic }: ILayout) => {

    return (
        <Suspense>
            <RootLayout metaData={metaData}>
                <Header {...header} />
                <FadeAnimation>
                    {children}
                </FadeAnimation>
                <Footer {...footer} />
            </RootLayout>
            <MagicNavigator {...magic} />
        </Suspense>
    )

}

export default React.memo(PageLayout)