import FadeAnimation from "@components/FadeAnimation"
import Header from "@components/Header"
import FloatingNavigator from "@views/includes/FloatingNavigator"
import RootLayout from "@layouts/RootLayout"
import type { ILayout } from "@typings/Layout"
import DrawerMenu from "@views/includes/DrawerMenu"

import Footer from "@components/Footer"
import footer from "@db/footer"



const PageLayout = ({ children, metaData }: ILayout) => {


    return (

        <RootLayout metaData={metaData}>
            <DrawerMenu/>
            <Header favicon={{
                src: '/assets/images/logo-transparent.png',
                href: '/',
                alt: '',
            }} />
            <FloatingNavigator />
            <FadeAnimation>
                {children}
            </FadeAnimation>
            <Footer {...footer}/>
        </RootLayout>
    )

}

export default PageLayout