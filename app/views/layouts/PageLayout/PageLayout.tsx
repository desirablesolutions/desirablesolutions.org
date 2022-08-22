import FadeAnimation from "@components/FadeAnimation"
import BottomNav from "@includes/BottomNav"
import FloatingNavigator from "@includes/FloatingNavigator"
import MenuNav from "@includes/MenuNav"
import RootLayout from "@layouts/RootLayout"
import type { ILayout } from "@typings/Layout"
import Header from "@components/Header"



const PageLayout = ({ children, metaData }: ILayout) => {


    return (

        <RootLayout metaData={metaData}>
            <Header favicon={{
                src: '/assets/images/logo-transparent.png',
                href: '/',
                alt: ''
            }} />
            <FloatingNavigator />
            <FadeAnimation>
                {children}
            </FadeAnimation>
        </RootLayout>
    )

}

export default PageLayout